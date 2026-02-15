"use client";

import { useEffect, useRef } from "react";

class Dot {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = 1.5;
    this.density = Math.random() * 20 + 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(152, 38, 244, 0.6)"; // Soft purple
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update(mouse: { x: number | null; y: number | null }) {
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = 100;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      if (distance < maxDistance) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 10;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 10;
        }
      }
    }
  }
}

export function DotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    const mouse = { x: null as number | null, y: null as number | null };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dots = [];

      const numberOfDots = Math.floor((canvas.width * canvas.height) / 5000); // Density control

      for (let i = 0; i < numberOfDots; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        dots.push(new Dot(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        dot.update(mouse);
        dot.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-transparent"
    />
  );
}
