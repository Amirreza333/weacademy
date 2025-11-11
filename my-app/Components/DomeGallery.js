"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import { useGesture } from "@use-gesture/react";

const CONFIG = {
  segments: 35,
  imageScale: 1.5, // از 1.2 به 1.8 (کمی بزرگ‌تر، متعادل)
  minImageSize: 45, // از 40 به 50
  maxVerticalRotationDeg: 50,
  dragSensitivity: 10,
  perspective: 100,
  hoverScale: 1.15,
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const wrapAngleSigned = (deg) => {
  const a = ((deg % 360) + 360) % 360;
  return a > 180 ? a - 360 : a;
};

function buildItems(images, segments) {
  const items = [];
  const phiStep = 180 / segments;

  for (let i = 0; i < segments; i++) {
    const phi = -90 + i * phiStep + phiStep / 2;
    const radius = Math.cos((phi * Math.PI) / 180);
    const colsInRow = Math.max(
      1,
      Math.round(segments * Math.abs(radius) * 1.1)
    );
    const thetaStep = 360 / colsInRow;

    for (let j = 0; j < colsInRow; j++) {
      const theta = j * thetaStep;
      items.push({
        x: theta,
        y: phi,
        sizeX: 1.2,
        sizeY: 1.2,
        theta,
        phi,
        src: "",
        alt: "",
      });
    }
  }

  const totalSlots = items.length;
  const usedImages = Array.from({ length: totalSlots }, (_, i) => {
    const img = images[i % images.length];
    return img || { src: "", alt: "" };
  });

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

export default function DomeGallery({
  images = [],
  fit = 0.45,
  minRadius = 500,
  maxRadius = 1200,
  fitBasis = "auto",
  padFactor = 0.25,
  overlayBlurColor = "#060010",
  maxVerticalRotationDeg = CONFIG.maxVerticalRotationDeg,
  dragSensitivity = CONFIG.dragSensitivity,
  enlargeTransitionMs = 300,
  segments = CONFIG.segments,
  dragDampening = 0.6,
  openedImageWidth = "500px",
  openedImageHeight = "650px",
  imageBorderRadius = "20px",
  openedImageBorderRadius = "32px",
  grayscale = false,
}) {
  const rootRef = useRef(null);
  const sphereRef = useRef(null);
  const mainRef = useRef(null);
  const viewerRef = useRef(null);
  const frameRef = useRef(null);
  const scrimRef = useRef(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const startPosRef = useRef(null);
  const startRotRef = useRef({ x: 0, y: 0 });
  const inertiaRAF = useRef(null);
  const scrollLockedRef = useRef(false);
  const openingRef = useRef(false);
  const focusedElRef = useRef(null);
  const movedRef = useRef(false);
  const lastDragEndAt = useRef(0);
  const lockedRadiusRef = useRef(600);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = useCallback((x, y) => {
    if (sphereRef.current) {
      sphereRef.current.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${x}deg) rotateY(${y}deg)`;
    }
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx, vy) => {
      stopInertia();
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening, 0, 1);
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
        const nextX = clamp(
          rotationRef.current.x - vY / 200,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia, applyTransform]
  );

  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add("overflow-hidden");
  }, []);

  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.dataset.enlarging === "true") return;
    scrollLockedRef.current = false;
    document.body.classList.remove("overflow-hidden");
  }, []);

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
      onDrag: ({ movement: [mx, my], velocity, last }) => {
        if (!draggingRef.current || !startPosRef.current) return;

        const dxTotal = mx;
        const dyTotal = my;

        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(
          startRotRef.current.y + dxTotal / dragSensitivity
        );

        if (
          rotationRef.current.x !== nextX ||
          rotationRef.current.y !== nextY
        ) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }

        if (Math.abs(mx) > 5 || Math.abs(my) > 5) {
          movedRef.current = true;
        }

        if (last) {
          draggingRef.current = false;
          const [vx, vy] = velocity;
          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) {
            startInertia(vx, vy);
          }
          lastDragEndAt.current = performance.now();
        }
      },
    },
    {
      target: mainRef,
      eventOptions: { passive: false },
      drag: { filterTaps: true },
    }
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ro = new ResizeObserver((entries) => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width);
      const h = Math.max(1, cr.height);
      const minDim = Math.min(w, h);

      let basis;
      switch (fitBasis) {
        case "min":
          basis = minDim;
          break;
        case "max":
          basis = Math.max(w, h);
          break;
        case "width":
          basis = w;
          break;
        case "height":
          basis = h;
          break;
        default:
          basis = w / h >= 1.3 ? w : minDim;
      }

      let radius = basis * fit;
      radius = Math.min(radius, h * 1.35);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = radius;

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));

      root.style.setProperty("--radius", `${radius}px`);
      root.style.setProperty("--viewer-pad", `${viewerPad}px`);
      root.style.setProperty("--overlay-blur-color", overlayBlurColor);
      root.style.setProperty("--tile-radius", imageBorderRadius);
      root.style.setProperty("--enlarge-radius", openedImageBorderRadius);
      root.style.setProperty(
        "--image-filter",
        grayscale ? "grayscale(1)" : "none"
      );

      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });

    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    applyTransform,
  ]);

  const openItemFromElement = useCallback(
    (el) => {
      if (
        openingRef.current ||
        !viewerRef.current ||
        !frameRef.current ||
        !mainRef.current
      )
        return;

      openingRef.current = true;
      lockScroll();

      const img = el.querySelector("img");
      if (!img) {
        openingRef.current = false;
        unlockScroll();
        return;
      }

      focusedElRef.current = img;
      img.style.visibility = "hidden";

      const parent = el.parentElement;
      const theta = parseFloat(parent?.dataset.theta || "0");
      const phi = parseFloat(parent?.dataset.phi || "0");

      const globalY = rotationRef.current.y;
      const rotY = wrapAngleSigned(-(theta + globalY));
      const rotX = -phi - rotationRef.current.x;

      const refDiv = document.createElement("div");
      refDiv.className = "absolute inset-0 opacity-0";
      parent?.appendChild(refDiv);
      void refDiv.offsetHeight;

      const tileR = refDiv.getBoundingClientRect();
      const mainR = mainRef.current.getBoundingClientRect();
      const frameR = frameRef.current.getBoundingClientRect();

      parent?.removeChild(refDiv);

      if (tileR.width <= 0) {
        img.style.visibility = "";
        openingRef.current = false;
        unlockScroll();
        return;
      }

      const overlay = document.createElement("div");
      overlay.className =
        "absolute flex items-center justify-center opacity-0 transition-all duration-300 ease-in-out z-50 pointer-events-auto";
      overlay.style.left = `${frameR.left - mainR.left}px`;
      overlay.style.top = `${frameR.top - mainR.top}px`;
      overlay.style.width = `${frameR.width}px`;
      overlay.style.height = `${frameR.height}px`;

      const overlayImg = document.createElement("img");
      overlayImg.src = img.src;
      overlayImg.className = "max-w-full max-h-full object-contain";
      overlayImg.style.borderRadius = openedImageBorderRadius;
      overlayImg.style.maxHeight = openedImageHeight;
      overlayImg.style.maxWidth = openedImageWidth;
      overlay.appendChild(overlayImg);
      viewerRef.current.appendChild(overlay);

      const tx0 = tileR.left - frameR.left;
      const ty0 = tileR.top - frameR.top;
      const sx0 = tileR.width / frameR.width;
      const sy0 = tileR.height / frameR.height;

      overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${sx0}, ${sy0})`;

      requestAnimationFrame(() => {
        overlay.style.opacity = "1";
        overlay.style.transform = "translate(0px, 0px) scale(1, 1)";
        rootRef.current.dataset.enlarging = "true";
      });

      const close = () => {
        overlay.style.opacity = "0";
        overlay.style.transform = `translate(${tx0}px, ${ty0}px) scale(${sx0}, ${sy0})`;
        setTimeout(() => {
          if (overlay.parentElement) viewerRef.current?.removeChild(overlay);
          img.style.visibility = "";
          openingRef.current = false;
          rootRef.current.dataset.enlarging = "false";
          unlockScroll();
        }, enlargeTransitionMs);
      };

      overlay.onclick = close;
      if (scrimRef.current) scrimRef.current.onclick = close;
    },
    [
      enlargeTransitionMs,
      lockScroll,
      unlockScroll,
      openedImageBorderRadius,
      openedImageWidth,
      openedImageHeight,
    ]
  );

  const onTileClick = useCallback(
    (e) => {
      if (
        draggingRef.current ||
        movedRef.current ||
        performance.now() - lastDragEndAt.current < 80 ||
        openingRef.current
      )
        return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  const itemStyle = useMemo(() => {
    const baseSize = 100 / segments;
    const scaled = baseSize * CONFIG.imageScale;
    const minPx = CONFIG.minImageSize;

    return {
      width: `calc(${scaled}% * var(--scale-factor, 1))`,
      height: `calc(${scaled}% * var(--scale-factor, 1))`,
      minWidth: `${minPx}px`,
      minHeight: `${minPx}px`,
      marginLeft: `calc(-${scaled}% * var(--scale-factor, 1) / 2)`,
      marginTop: `calc(-${scaled}% * var(--scale-factor, 1) / 2)`,
    };
  }, [segments]);

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full overflow-hidden bg-gradient-to-b from-gray-900 to-black"
      style={{
        perspective: `${CONFIG.perspective}px`,
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <main
        ref={mainRef}
        className="w-full h-full"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            ref={sphereRef}
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform:
                "translateZ(calc(var(--radius) * -1)) rotateX(0deg) rotateY(0deg)",
            }}
          >
            {items.map((it, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{
                  ...itemStyle,
                  transform: `
                    rotateY(${it.theta}deg)
                    rotateX(${it.phi}deg)
                    translateZ(var(--radius))
                  `,
                  transformStyle: "preserve-3d",
                }}
                data-theta={it.theta}
                data-phi={it.phi}
              >
                <div
                  className="relative w-full h-full cursor-pointer overflow-hidden rounded-[var(--tile-radius)] shadow-2xl transition-all duration-200 hover:scale-105 hover:shadow-3xl group"
                  role="button"
                  tabIndex={0}
                  aria-label={it.alt || "باز کردن عکس"}
                  onClick={onTileClick}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="w-full h-full object-cover pointer-events-none transition-transform duration-300 group-hover:scale-110"
                    style={{
                      filter: "var(--image-filter)",
                      borderRadius: "var(--tile-radius)",
                    }}
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent to-[var(--overlay-blur-color)] opacity-40 z-20" />

        <div
          ref={viewerRef}
          className="absolute inset-[var(--viewer-pad)] pointer-events-none z-50"
        >
          <div
            ref={scrimRef}
            className="absolute inset-0 backdrop-blur-sm opacity-0 transition-opacity duration-300 pointer-events-auto"
            style={{ background: "rgba(0,0,0,0.7)" }}
          />
          <div
            ref={frameRef}
            className="absolute inset-0 rounded-2xl border-4 border-white/30 opacity-0 transition-opacity duration-300 pointer-events-none"
          />
        </div>
      </main>
    </div>
  );
}
