'use client';

import React from 'react';

interface NavbarFluidGlassProps {
  className?: string;
  style?: React.CSSProperties;
}

// CSS-based liquid glass effect for navbar
export const NavbarFluidGlass: React.FC<NavbarFluidGlassProps> = ({
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`absolute inset-0 rounded-2xl ${className}`} 
      style={{
        background: `
          linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.2) 100%
          )
        `,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          inset 0 -1px 0 rgba(255, 255, 255, 0.05),
          0 0 20px rgba(255, 255, 255, 0.05)
        `,
        ...style
      }}
    />
  );
};

export default NavbarFluidGlass;