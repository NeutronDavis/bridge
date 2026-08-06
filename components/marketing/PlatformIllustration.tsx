"use client";

import { useEffect, useState, useRef } from "react";

export function PlatformIllustration() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor offset from center of window (-0.5 to 0.5)
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-image text-center lg:text-end"
      role="img"
      aria-label="Integrated Bridge Dynamics suites sharing one enterprise operating platform"
      style={{
        "--mouse-x": coords.x,
        "--mouse-y": coords.y,
      } as React.CSSProperties}
    >
      <img
        src="/images/hero-image.svg"
        alt="Bridge Dynamics Enterprise Business Operating System Interface"
        className="w-full h-auto max-w-full mx-auto"
      />
    </div>
  );
}
