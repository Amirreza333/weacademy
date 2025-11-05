'use client';

import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';

/* ==================== تنظیمات پیش‌فرض ==================== */
const DEFAULTS = {
  maxVerticalRotationDeg: 80,
  dragSensitivity: 15,
  enlargeTransitionMs: 300,
  segments: 28,
};

/* ==================== توابع کمکی ==================== */
const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const wrapAngleSigned = deg => {
  const a = ((deg % 360) + 360) % 360;
  return a > 180 ? a - 360 : a;
};

const getDataNumber = (el, name, fallback) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

/* ==================== ساخت آیتم‌ها – کره کامل ==================== */
function buildItems(pool, seg) {
  const items = [];
  const segments = seg;

  const phiStep = 180 / segments; // از -90 تا +90
  const thetaStepBase = 360 / segments;

  let index = 0;

  for (let i = 0; i < segments; i++) {
    const phi = -90 + i * phiStep + phiStep / 2;
    const radius = Math.cos((phi * Math.PI) / 180);
    const y = Math.sin((phi * Math.PI) / 180);

    const colsInRow = Math.max(1, Math.round(segments * Math.abs(radius)));
    const actualThetaStep = 360 / colsInRow;

    for (let j = 0; j < colsInRow; j++) {
      const theta = j * actualThetaStep;
      items.push({
        x: theta,           // زاویه افقی
        y: phi,             // زاویه عمودی
        sizeX: 1.2,
        sizeY: 1.2,
        theta,
        phi,
        src: '',
        alt: '',
      });
      index++;
    }
  }

  // پر کردن تصاویر
  const normalizedImages = pool.map(img => ({
    src: img.url || img.src || '',
    alt: img.alt || img.caption || '',
  }));

  const totalSlots = items.length;
  const usedImages = Array.from({ length: totalSlots }, (_, i) =>
    normalizedImages[i % normalizedImages.length] || { src: '', alt: '' }
  );

  // جلوگیری از تکرار متوالی
  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src && usedImages.length > 2) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          [usedImages[i], usedImages[j]] = [usedImages[j], usedImages[i]];
          break;
        }
      }
    }
  }

  return items.map((item, i) => ({
    ...item,
    src: usedImages[i].src,
    alt: usedImages[i].alt,
  }));
}

/* ==================== محاسبه چرخش پایه ==================== */
function computeItemBaseRotation(offsetX, offsetY) {
  return { rotateX: -offsetY, rotateY: offsetX };
}

/* ==================== کامپوننت اصلی ==================== */
export default function DomeGallery({
  images = [],
  fit = 0.45,
  fitBasis = 'auto',
  minRadius = 500,
  maxRadius = 1200,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '500px',
  openedImageHeight = '650px',
  imageBorderRadius = '20px',
  openedImageBorderRadius = '32px',
  grayscale = false,
}) {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const sphereRef = useRef(null);
  const frameRef = useRef(null);
  const viewerRef = useRef(null);
  const scrimRef = useRef(null);
  const focusedElRef = useRef(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef(null);
  const openingRef = useRef(false);
  const lastDragEndAt = useRef(0);
  const scrollLockedRef = useRef(false);
  const lockedRadiusRef = useRef(null);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = useCallback((xDeg, yDeg) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  }, []);

  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('overflow-hidden');
  }, []);

  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.dataset.enlarging === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('overflow-hidden');
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback((vx, vy) => {
    const MAX_V = 1.4;
    let vX = clamp(vx, -MAX_V, MAX_V) * 80;
    let vY = clamp(vy, -MAX_V, MAX_V) * 80;
    let frames = 0;
    const d = clamp(dragDampening ?? 0.6, 0, 1);
    const frictionMul = 0.94 + 0.055 * d;
    const stopThreshold = 0.015 - 0.01 * d;
    const maxFrames = Math.round(90 + 270 * d);

    const step = () => {
      vX *= frictionMul;
      vY *= frictionMul;
      if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
        inertiaRAF.current = null;
        return;
      }
      if (++frames > maxFrames) {
        inertiaRAF.current = null;
        return;
      }
      const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
      const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
      rotationRef.current = { x: nextX, y: nextY };
      applyTransform(nextX, nextY);
      inertiaRAF.current = requestAnimationFrame(step);
    };
    stopInertia();
    inertiaRAF.current = requestAnimationFrame(step);
  }, [dragDampening, maxVerticalRotationDeg, stopInertia, applyTransform]);

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current || !event) return;
        stopInertia();
        const evt = event;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current || !event) return;
        const evt = event;
        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;

        if (!movedRef.current && dxTotal * dxTotal + dyTotal * dyTotal > 16) {
          movedRef.current = true;
        }

        const nextX = clamp(startRotRef.current.x - dyTotal / dragSensitivity, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);

        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }

        if (last) {
          draggingRef.current = false;
          let [vMagX, vMagY] = velocity;
          const [dirX, dirY] = direction;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;

          if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
            vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
          }

          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy);
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
        }
      },
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width), h = Math.max(1, cr.height);
      const minDim = Math.min(w, h), maxDim = Math.max(w, h);
      const aspect = w / h;

      let basis;
      switch (fitBasis) {
        case 'min': basis = minDim; break;
        case 'max': basis = maxDim; break;
        case 'width': basis = w; break;
        case 'height': basis = h; break;
        default: basis = aspect >= 1.3 ? w : minDim;
      }

      let radius = basis * fit;
      radius = Math.min(radius, h * 1.35);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');

      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });

    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, fitBasis, minRadius, maxRadius, padFactor, overlayBlurColor, grayscale, imageBorderRadius, openedImageBorderRadius, applyTransform]);

  const openItemFromElement = useCallback((el) => {
    if (openingRef.current || !viewerRef.current || !frameRef.current || !mainRef.current) return;
    openingRef.current = true;
    lockScroll();

    const parent = el.parentElement;
    if (!parent) {
      openingRef.current = false;
      unlockScroll();
      return;
    }

    focusedElRef.current = el;
    el.dataset.focused = 'true';

    const theta = getDataNumber(parent, 'theta', 0);
    const phi = getDataNumber(parent, 'phi', 0);
    const parentRot = computeItemBaseRotation(theta, phi);
    const globalY = rotationRef.current.y;
    let rotY = wrapAngleSigned(-(theta + globalY));
    const rotX = -phi - rotationRef.current.x;

    const refDiv = document.createElement('div');
    refDiv.className = 'absolute inset-0 opacity-0';
    refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
    parent.appendChild(refDiv);
    void refDiv.offsetHeight;

    const tileR = refDiv.getBoundingClientRect();
    const mainR = mainRef.current.getBoundingClientRect();
    const frameR = frameRef.current.getBoundingClientRect();

    parent.removeChild(refDiv);

    if (tileR.width <= 0) {
      openingRef.current = false;
      focusedElRef.current = null;
      unlockScroll();
      return;
    }

    el.style.visibility = 'hidden';

    const overlay = document.createElement('div');
    overlay.className = 'absolute flex items-center justify-center opacity-0 transition-all duration-300 ease-in-out z-50';
    overlay.style.left = `${frameR.left - mainR.left}px`;
    overlay.style.top = `${frameR.top - mainR.top}px`;
    overlay.style.width = `${frameR.width}px`;
    overlay.style.height = `${frameR.height}px`;

    const img = document.createElement('img');
    img.src = parent.dataset.src || el.querySelector('img')?.src || '';
    img.className = 'max-w-full max-h-full object-contain';
    img.style.borderRadius = openedImageBorderRadius;
    img.style.maxHeight = openedImageHeight;
    img.style.maxWidth = openedImageWidth;
    overlay.appendChild(img);
    viewerRef.current.appendChild(overlay);

    const tx0 = tileR.left - frameR.left;
    const ty0 = tileR.top - frameR.top;
    const sx0 = tileR.width / frameR.width;
    const sy0 = tileR.height / frameR.height;

    overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${sx0}, ${sy0})`;

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
      if (rootRef.current) rootRef.current.dataset.enlarging = 'true';
    });

    const close = () => {
      overlay.style.opacity = '0';
      overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${sx0}, ${sy0})`;
      setTimeout(() => {
        if (overlay.parentElement) viewerRef.current?.removeChild(overlay);
        el.style.visibility = '';
        delete el.dataset.focused;
        focusedElRef.current = null;
        openingRef.current = false;
        if (rootRef.current) rootRef.current.dataset.enlarging = 'false';
        unlockScroll();
      }, enlargeTransitionMs);
    };

    overlay.onclick = close;
    if (scrimRef.current) {
      scrimRef.current.onclick = close;
    }
  }, [enlargeTransitionMs, lockScroll, unlockScroll, openedImageBorderRadius, openedImageWidth, openedImageHeight]);

  const onTileClick = useCallback((e) => {
    if (draggingRef.current || movedRef.current || performance.now() - lastDragEndAt.current < 80 || openingRef.current) return;
    openItemFromElement(e.currentTarget);
  }, [openItemFromElement]);

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full overflow-hidden bg-black select-none touch-none"
      style={{
        '--radius': '600px',
        '--viewer-pad': '16px',
        '--overlay-blur-color': overlayBlurColor,
        '--tile-radius': imageBorderRadius,
        '--enlarge-radius': openedImageBorderRadius,
        '--image-filter': grayscale ? 'grayscale(1)' : 'none',
      }}
    >
      <main ref={mainRef} className="w-full h-full" style={{ perspective: '1200px' }}>
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          <div
            ref={sphereRef}
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(calc(var(--radius) * -1)) rotateX(0deg) rotateY(0deg)',
            }}
          >
            {items.map((it, i) => (
              <div
                key={`${it.theta},${it.phi},${i}`}
                className="absolute"
                data-src={it.src}
                data-theta={it.theta}
                data-phi={it.phi}
                style={{
                  left: '50%',
                  top: '50%',
                  width: `calc(100% / ${segments} * ${it.sizeX})`,
                  height: `calc(100% / ${segments} * ${it.sizeY})`,
                  marginLeft: `calc(-100% / ${segments} * ${it.sizeX} / 2)`,
                  marginTop: `calc(-100% / ${segments} * ${it.sizeY} / 2)`,
                  transform: `
                    rotateY(${it.theta}deg)
                    rotateX(${it.phi}deg)
                    translateZ(var(--radius))
                  `,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="relative w-full h-full cursor-pointer overflow-hidden rounded-[var(--tile-radius)] shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-3xl"
                  role="button"
                  tabIndex={0}
                  aria-label={it.alt || 'باز کردن عکس'}
                  onClick={onTileClick}
                  style={{ transform: 'translateZ(1px)' }}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="w-full h-full object-cover pointer-events-none"
                    style={{ filter: 'var(--image-filter)', borderRadius: 'var(--tile-radius)' }}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* افکت‌های پس‌زمینه */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 z-10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent to-[var(--overlay-blur-color)] opacity-40 z-20" />
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-30" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-30" />

        {/* لایت‌باکس */}
        <div ref={viewerRef} className="absolute inset-[var(--viewer-pad)] pointer-events-none z-50">
          <div ref={scrimRef} className="absolute inset-0 bg-black/85 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-auto" />
          <div ref={frameRef} className="absolute inset-0 rounded-2xl border-4 border-white/30 opacity-0 transition-opacity duration-300 pointer-events-none" />
        </div>
      </main>
    </div>
  );
}