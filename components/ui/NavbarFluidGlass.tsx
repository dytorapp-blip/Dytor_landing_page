'use client';

import LiquidGlass from 'liquid-glass-react';
import React from 'react';

interface NavbarFluidGlassProps {
  className?: string;
  style?: React.CSSProperties;
}

// Library-based liquid glass effect for navbar
export const NavbarFluidGlass: React.FC<NavbarFluidGlassProps> = ({
  className = '',
  style = {}
}) => {
  return (
    <div
      className={`absolute inset-0 rounded-2xl overflow-hidden ${className}`}
      style={style}
    >
      <LiquidGlass
        displacementScale={0}
        blurAmount={0.1}
        saturation={110}
        aberrationIntensity={0.5}
        elasticity={0.1}
        cornerRadius={16}
        className="w-full h-full"
      >
        <div className="w-full h-full" />
      </LiquidGlass>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none" />
    </div>
  );
};

export default NavbarFluidGlass;