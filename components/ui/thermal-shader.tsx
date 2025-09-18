'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ThermalEffectProps {
  width: number;
  height: number;
  logoUrl: string;
  className?: string;
}

export function ThermalEffect({ width, height, logoUrl, className }: ThermalEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Create thermal effect
    const createThermalEffect = () => {
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        // Create noise pattern
        const noise = Math.random() * 255;
        
        // Create thermal-like color mapping
        const intensity = Math.sin(Date.now() * 0.001 + i * 0.01) * 0.5 + 0.5;
        const thermalValue = noise * intensity;
        
        // Map to thermal colors (blue -> green -> yellow -> red)
        if (thermalValue < 64) {
          data[i] = 0; // R
          data[i + 1] = 0; // G
          data[i + 2] = thermalValue * 4; // B
        } else if (thermalValue < 128) {
          data[i] = 0; // R
          data[i + 1] = (thermalValue - 64) * 4; // G
          data[i + 2] = 255; // B
        } else if (thermalValue < 192) {
          data[i] = (thermalValue - 128) * 4; // R
          data[i + 1] = 255; // G
          data[i + 2] = 255 - (thermalValue - 128) * 4; // B
        } else {
          data[i] = 255; // R
          data[i + 1] = 255 - (thermalValue - 192) * 4; // G
          data[i + 2] = 0; // B
        }
        
        data[i + 3] = 200; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    // Animation loop
    const animate = () => {
      createThermalEffect();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height]);

  return (
    <div className={cn("relative", className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-lg"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={logoUrl}
          alt="DYTOR Logo"
          className="w-24 h-24 object-contain mix-blend-screen"
        />
      </div>
    </div>
  );
}
