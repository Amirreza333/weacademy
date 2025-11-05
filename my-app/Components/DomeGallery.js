"use client";

import { useEffect, useRef, useMemo } from "react";


const CONFIG = {
  segments: 40, 
  imageScale: 5,
  minImageSize: 80, 
  maxVerticalRotationDeg: 75,
  dragSensitivity: 10,
  perspective: 1000,
  hoverScale: 1.15,
};


const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const wrapAngleSigned = (deg) =>
  ((deg % 360) + 360) % 360 > 180
    ? (((deg % 360) + 360) % 360) - 360
    : ((deg % 360) + 360) % 360;


function buildItems(pool, seg) {
  const items = [];
  const segments = seg;
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
        theta,
        phi,
        src: "",
        alt: "",
      });
    }
  }


  const images = pool.map((img) => ({
    src: img.url || img.src || "",
    alt: img.alt || img.caption || "",
  }));

  const total = items.length;
  return items.map((item, i) => ({
    ...item,
    src: images[i % images.length]?.src || "",
    alt: images[i % images.length]?.alt || "",
  }));
}


export default function DomeGallery({
  images = [],
  fit = 2,
  minRadius = 400,
  maxRadius = 1000,
  grayscale = false,
  imageBorderRadius = "20px",
}) {
  const rootRef = useRef(null);
  const sphereRef = useRef(null);
  const rotation = useRef({ x: 0, y: 0 });
  const dragging = useRef(false);
  const startPos = useRef(null);
  const startRot = useRef(null);
  const inertiaId = useRef(null);

  const items = useMemo(() => buildItems(images, CONFIG.segments), [images]);

  const applyRotation = (x, y) => {
    if (sphereRef.current) {
      sphereRef.current.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${x}deg) rotateY(${y}deg)`;
    }
  };

  const startInertia = (vx, vy) => {
    let vel = { x: vx * 90, y: vy * 90 };
    const friction = 0.96;

    const step = () => {
      vel.x *= friction;
      vel.y *= friction;

      if (Math.abs(vel.x) < 0.03 && Math.abs(vel.y) < 0.03) return;

      const nx = clamp(
        rotation.current.x - vel.y / 180,
        -CONFIG.maxVerticalRotationDeg,
        CONFIG.maxVerticalRotationDeg
      );
      const ny = wrapAngleSigned(rotation.current.y + vel.x / 180);

      rotation.current = { x: nx, y: ny };
      applyRotation(nx, ny);

      inertiaId.current = requestAnimationFrame(step);
    };

    cancelAnimationFrame(inertiaId.current);
    inertiaId.current = requestAnimationFrame(step);
  };


  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const down = (e) => {
      if (e.button !== 0) return;
      dragging.current = true;
      startPos.current = { x: e.clientX, y: e.clientY };
      startRot.current = { ...rotation.current };
      cancelAnimationFrame(inertiaId.current);
      el.style.cursor = "grabbing";
    };

    const move = (e) => {
      if (!dragging.current || !startPos.current) return;
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;

      const nx = clamp(
        startRot.current.x - dy / CONFIG.dragSensitivity,
        -CONFIG.maxVerticalRotationDeg,
        CONFIG.maxVerticalRotationDeg
      );
      const ny = wrapAngleSigned(
        startRot.current.y + dx / CONFIG.dragSensitivity
      );

      rotation.current = { x: nx, y: ny };
      applyRotation(nx, ny);
    };

    const up = (e) => {
      if (!dragging.current || !startPos.current) return;
      const dx = e.clientX - startPos.current.x;
      const dy = e.clientY - startPos.current.y;
      const speed = Math.hypot(dx, dy);

      dragging.current = false;
      el.style.cursor = "grab";

      if (speed > 15) {
        const vx = (dx / speed) * Math.min(speed / 80, 1.8);
        const vy = (dy / speed) * Math.min(speed / 80, 1.8);
        startInertia(vx, vy);
      }
    };

    el.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    return () => {
      el.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, []);


  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const update = () => {
      const { width, height } = root.getBoundingClientRect();
      const size = Math.min(width, height);
      let radius = size * fit;
      radius = clamp(radius, minRadius, maxRadius);

      root.style.setProperty("--radius", `${radius}px`);
      applyRotation(rotation.current.x, rotation.current.y);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, minRadius, maxRadius]);


  const itemStyle = useMemo(() => {
    const baseSize = 100 / CONFIG.segments;
    const scaled = baseSize * CONFIG.imageScale;
    const minPx = CONFIG.minImageSize;
    const pxSize = Math.max(
      minPx % 1 === 0 ? minPx : minPx * (window.devicePixelRatio || 1),
      scaled
    );

    return {
      width: `calc(${scaled}% * var(--scale-factor, 1))`,
      height: `calc(${scaled}% * var(--scale-factor, 1))`,
      minWidth: `${minPx}px`,
      minHeight: `${minPx}px`,
      marginLeft: `calc(-${scaled}% * var(--scale-factor, 1) / 2)`,
      marginTop: `calc(-${scaled}% * var(--scale-factor, 1) / 2)`,
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full overflow-hidden bg-gradient-to-b from-gray-900 to-black"
      style={{
        "--radius": "600px",
        cursor: "grab",
        userSelect: "none",
        perspective: `${CONFIG.perspective}px`,
      }}
    >
      <div
        ref={sphereRef}
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(calc(var(--radius) * -1))",
        }}
      >
        {items.map((it, i) => {
          const sizeStyle = {
            ...itemStyle,
            transform: `
              rotateY(${it.theta}deg)
              rotateX(${it.phi}deg)
              translateZ(var(--radius))
            `,
          };

          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                ...sizeStyle,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="group relative w-full h-full overflow-hidden shadow-2xl transition-all duration-300 ease-out"
                style={{
                  borderRadius: imageBorderRadius,
                  transform: "translateZ(2px)",
                }}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-300 group-hover:scale-110"
                  style={{
                    filter: grayscale ? "grayscale(1)" : "none",
                    borderRadius: imageBorderRadius,
                  }}
                  draggable={false}
                />
              
                <div className="absolute inset-0 ring-4 ring-inset ring-black/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          );
        })}
      </div>

    
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-white/5 to-transparent opacity-50" />
    </div>
  );
}
