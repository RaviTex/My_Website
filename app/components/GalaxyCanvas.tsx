'use client';

import { useEffect, useRef } from 'react';

const NUM_STARS = 300;
const NUM_ARMS = 2;
const ROTATION_SPEED = 0.00008;

// Gaussian random (Box-Muller)
function gaussRand() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Particle {
  angle: number;      // base spiral angle
  radius: number;     // distance from center
  angleJitter: number; // perpendicular spread
  size: number;
  brightness: number;
  layer: number;      // 0=core, 1=arm, 2=dust
}

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Background stars
    const stars: Star[] = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.2 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      twinkleSpeed: Math.random() * 0.012 + 0.002,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Galaxy parameters
    const galaxyRadius = () => Math.min(w, h) * 0.65;
    const TILT = 0.45; // elliptical tilt (viewed at angle)
    const SPIRAL_TIGHTNESS = 4.5; // how many radians the arms wind

    // Generate particles
    function generateParticles(): Particle[] {
      const particles: Particle[] = [];
      const gR = galaxyRadius();

      // Core particles — dense bright cluster at center
      for (let i = 0; i < 1200; i++) {
        const r = Math.abs(gaussRand()) * gR * 0.12;
        const angle = Math.random() * Math.PI * 2;
        particles.push({
          angle,
          radius: r,
          angleJitter: 0,
          size: Math.random() * 1.5 + 0.4,
          brightness: Math.random() * 0.5 + 0.5,
          layer: 0,
        });
      }

      // Spiral arm particles — the main visible structure
      for (let i = 0; i < 5500; i++) {
        const arm = Math.floor(Math.random() * NUM_ARMS);
        const t = Math.random(); // 0=center, 1=edge
        const armBase = (arm / NUM_ARMS) * Math.PI * 2;
        const spiralAngle = armBase + t * SPIRAL_TIGHTNESS;
        const radius = t * gR;

        // Gaussian spread perpendicular to arm — tighter near center, wider at edges
        const spread = (0.15 + t * 0.35) * gaussRand();

        particles.push({
          angle: spiralAngle,
          radius,
          angleJitter: spread,
          size: Math.random() * 1.4 + 0.3,
          brightness: (1 - t * 0.6) * (Math.random() * 0.5 + 0.5),
          layer: 1,
        });
      }

      // Dust/haze particles — larger, dimmer, fill between arms
      for (let i = 0; i < 1000; i++) {
        const arm = Math.floor(Math.random() * NUM_ARMS);
        const t = Math.random();
        const armBase = (arm / NUM_ARMS) * Math.PI * 2;
        const spiralAngle = armBase + t * SPIRAL_TIGHTNESS;
        const radius = t * gR;
        const spread = (0.3 + t * 0.6) * gaussRand();

        particles.push({
          angle: spiralAngle,
          radius,
          angleJitter: spread,
          size: Math.random() * 3 + 1.5,
          brightness: (1 - t * 0.7) * (Math.random() * 0.15 + 0.03),
          layer: 2,
        });
      }

      return particles;
    }

    let particles = generateParticles();

    // Regenerate on resize for proper scaling
    const origResize = resize;
    const resizeHandler = () => {
      origResize();
      particles = generateParticles();
    };
    window.removeEventListener('resize', resize);
    window.addEventListener('resize', resizeHandler);

    let time = 0;
    let animId: number;

    const draw = () => {
      time++;
      ctx.fillStyle = '#0a0a0f';
      ctx.fillRect(0, 0, w, h);

      // Galaxy center — slightly above viewport center
      const cx = w * 0.52;
      const cy = h * 0.38;

      // Background stars with twinkle
      for (const s of stars) {
        const twinkle = Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 190, 220, ${s.opacity * twinkle})`;
        ctx.fill();
      }

      // Outer haze glow — large soft gradient
      const gR = galaxyRadius();
      const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, gR * 0.8);
      outerGlow.addColorStop(0, 'rgba(160, 175, 240, 0.04)');
      outerGlow.addColorStop(0.3, 'rgba(130, 145, 200, 0.02)');
      outerGlow.addColorStop(1, 'rgba(100, 110, 150, 0)');
      ctx.fillStyle = outerGlow;
      ctx.fillRect(0, 0, w, h);

      const globalAngle = time * ROTATION_SPEED;

      // Draw dust layer first (layer 2) — behind everything
      ctx.globalCompositeOperation = 'screen';
      for (const p of particles) {
        if (p.layer !== 2) continue;
        const angle = p.angle + p.angleJitter + globalAngle;
        const x = cx + Math.cos(angle) * p.radius;
        const y = cy + Math.sin(angle) * p.radius * TILT;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 160, 220, ${p.brightness})`;
        ctx.fill();
      }

      // Draw arm particles (layer 1)
      for (const p of particles) {
        if (p.layer !== 1) continue;
        const angle = p.angle + p.angleJitter + globalAngle;
        const x = cx + Math.cos(angle) * p.radius;
        const y = cy + Math.sin(angle) * p.radius * TILT;
        const alpha = p.brightness;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 215, 255, ${alpha})`;
        ctx.fill();

        // Soft glow for brighter arm particles
        if (p.brightness > 0.55 && p.size > 0.8) {
          ctx.beginPath();
          ctx.arc(x, y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 195, 255, ${alpha * 0.07})`;
          ctx.fill();
        }
      }

      // Draw core particles (layer 0)
      for (const p of particles) {
        if (p.layer !== 0) continue;
        const angle = p.angle + globalAngle;
        const x = cx + Math.cos(angle) * p.radius;
        const y = cy + Math.sin(angle) * p.radius * TILT;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${p.brightness})`;
        ctx.fill();
      }

      // Bright core glow — layered for intensity
      ctx.globalCompositeOperation = 'screen';
      const coreGlow1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, gR * 0.12);
      coreGlow1.addColorStop(0, 'rgba(230, 235, 255, 0.25)');
      coreGlow1.addColorStop(0.5, 'rgba(190, 200, 240, 0.08)');
      coreGlow1.addColorStop(1, 'rgba(150, 165, 210, 0)');
      ctx.fillStyle = coreGlow1;
      ctx.fillRect(0, 0, w, h);

      const coreGlow2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, gR * 0.25);
      coreGlow2.addColorStop(0, 'rgba(200, 210, 255, 0.1)');
      coreGlow2.addColorStop(0.4, 'rgba(160, 175, 230, 0.03)');
      coreGlow2.addColorStop(1, 'rgba(130, 145, 200, 0)');
      ctx.fillStyle = coreGlow2;
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'source-over';

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
