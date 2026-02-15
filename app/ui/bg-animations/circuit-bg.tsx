"use client";

import { useEffect, useRef } from "react";

class Circuit {
  x: number;
  y: number;
  length: number;
  speed: number;
  color: string;
  width: number;
  direction: "horizontal" | "vertical";
  history: { x: number; y: number }[];
  maxHistory: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.length = Math.random() * 50 + 20;
    this.speed = Math.random() * 2 + 1;
    this.width = Math.random() * 2 + 1;
    this.color =
      Math.random() > 0.5
        ? "rgba(152, 38, 244, 0.5)"
        : "rgba(88, 166, 255, 0.5)";
    this.direction = Math.random() > 0.5 ? "horizontal" : "vertical";
    this.history = [];
    this.maxHistory = 20;
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.history.push({ x: this.x, y: this.y });
    if (this.history.length > this.maxHistory) {
      this.history.shift();
    }

    if (this.direction === "horizontal") {
      this.x += this.speed;
      if (Math.random() < 0.02) this.direction = "vertical";
    } else {
      this.y += this.speed;
      if (Math.random() < 0.02) this.direction = "horizontal";
    }

    if (this.x > canvasWidth || this.y > canvasHeight) {
      this.x = Math.random() * canvasWidth;
      this.y = 0;
      this.history = [];
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    ctx.beginPath();

    if (this.history.length > 0) {
      ctx.moveTo(this.history[0].x, this.history[0].y);
      for (let i = 1; i < this.history.length; i++) {
        ctx.lineTo(this.history[i].x, this.history[i].y);
      }
      ctx.lineTo(this.x, this.y);
    }

    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
    ctx.fill();
  }
}

export function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let circuits: Circuit[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      circuits = [];
      const numberOfCircuits = 60;
      for (let i = 0; i < numberOfCircuits; i++) {
        circuits.push(new Circuit(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circuits.forEach((circuit) => {
        circuit.update(canvas.width, canvas.height);
        circuit.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-transparent"
    />
  );
}
