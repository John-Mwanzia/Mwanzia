'use client';

import React, { useEffect, useRef } from 'react';

interface CanvasProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

const Canvas: React.FC<CanvasProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let canvas: HTMLCanvasElement | null;
    let ctx: CanvasRenderingContext2D | null;
    let w: number;
    let h: number;
    let units: Unit[];
    const unitCount = 100;
    let hue = 0;

    function init() {
      canvas = document.querySelector('#canvas');
      if (canvas) {
        ctx = canvas.getContext('2d');
        if (ctx) {
          resizeReset();
          createUnits();
          animationLoop();
        }
      }
    }

    function resizeReset() {
      if (canvas && ctx) {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;

        ctx.fillStyle = '#222';
        ctx.fillRect(0, 0, w, h);
      }
    }

    function createUnits() {
      units = [];
      for (let i = 0; i < unitCount; i++) {
        setTimeout(() => {
          units.push(new Unit());
        }, i * 200);
      }
    }

    function animationLoop() {
      if (ctx) {
        ctx.fillStyle = 'rgba(0, 0, 0, .05)';
        ctx.fillRect(0, 0, w, h);

        drawScene();
        requestAnimationFrame(animationLoop);
      }
    }

    function drawScene() {
      if (units) {
        for (let i = 0; i < units.length; i++) {
          units[i].update();
          units[i].draw();
        }
      }
    }

    function getRandomInt(min: number, max: number) {
      return Math.round(Math.random() * (max - min)) + min;
    }

    class Unit {
      x: number = 0;
      y: number = 0;
      sx: number = 0;
      sy: number = 0;
      angle: number = 0;
      size: number = 0;
      radian: number = 0;
      speed: number = 0;
      maxDistance: number = 0;
      time: number = 0;
      ttl: number = 0;
      hue: number = 0;
      constructed: boolean;

      constructor() {
        this.reset();
        this.constructed = true;
      }

      reset() {
        this.x = Math.round(w / 2);
        this.y = Math.round(h / 2);
        this.sx = this.x;
        this.sy = this.y;
        this.angle = 60 * getRandomInt(0, 5);
        this.size = 1;
        this.radian = (Math.PI / 180) * (this.angle + 90);
        this.speed = 2;
        this.maxDistance = 30;
        this.time = 0;
        this.ttl = getRandomInt(180, 300);
        this.hue = hue;
        hue += 0.5;
      }

      draw() {
        if (ctx) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
          ctx.shadowColor = `hsl(${this.hue}, 100%, 50%)`;
          ctx.shadowBlur = 5;
          ctx.fill();
          ctx.closePath();
          ctx.restore();
        }
      }

      update() {
        const dx = this.sx - this.x;
        const dy = this.sy - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= this.maxDistance) {
          if (getRandomInt(0, 1)) {
            this.angle += 60;
          } else {
            this.angle -= 60;
          }

          this.radian = (Math.PI / 180) * (this.angle + 90);
          this.sx = this.x;
          this.sy = this.y;
        }

        this.x += this.speed * Math.sin(this.radian);
        this.y += this.speed * Math.cos(this.radian);

        if (
          this.time >= this.ttl ||
          this.x < 0 ||
          this.x > w ||
          this.y < 0 ||
          this.y > h
        ) {
          this.reset();
        }

        this.time++;
      }
    }

    init();
  }, []);

  return <canvas id="canvas" ref={canvasRef} {...props} />;
};

export default Canvas;
