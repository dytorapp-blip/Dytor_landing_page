'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface FluidGlassProps {
  mode?: 'lens' | 'bar' | 'cube';
  lensProps?: {
    scale?: number;
    ior?: number;
    thickness?: number;
    chromaticAberration?: number;
    anisotropy?: number;
  };
  barProps?: {
    scale?: number;
    ior?: number;
    thickness?: number;
    chromaticAberration?: number;
    anisotropy?: number;
  };
  cubeProps?: {
    scale?: number;
    ior?: number;
    thickness?: number;
    chromaticAberration?: number;
    anisotropy?: number;
  };
  className?: string;
  style?: React.CSSProperties;
}

// Liquid Glass Shader Material
const LiquidGlassMaterial = React.forwardRef<any, any>(({
  ior = 1.15,
  thickness = 5,
  chromaticAberration = 0.1,
  anisotropy = 0.01,
  scale = 0.25,
  ...props
}, ref) => {
  const material = useMemo(() => {
    const vertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform float uIor;
      uniform float uThickness;
      uniform float uChromaticAberration;
      uniform float uAnisotropy;
      uniform float uScale;
      
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying vec2 vUv;
      
      // Noise function for liquid effect
      float noise(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      
      // Smooth noise
      float smoothNoise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = noise(i);
        float b = noise(i + vec2(1.0, 0.0));
        float c = noise(i + vec2(0.0, 1.0));
        float d = noise(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      
      // Fractal noise for complex patterns
      float fractalNoise(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        
        for (int i = 0; i < 4; i++) {
          value += amplitude * smoothNoise(p * frequency);
          amplitude *= 0.5;
          frequency *= 2.0;
        }
        
        return value;
      }
      
      // Liquid glass effect
      vec3 liquidGlass(vec2 uv, float time) {
        // Create flowing liquid patterns
        vec2 flow = vec2(
          fractalNoise(uv * 2.0 + time * 0.1),
          fractalNoise(uv * 2.0 + time * 0.15 + 100.0)
        );
        
        // Add distortion
        vec2 distortedUV = uv + flow * 0.1;
        
        // Create glass-like refraction
        float refraction = fractalNoise(distortedUV * 4.0 + time * 0.2);
        
        // Chromatic aberration effect
        float r = refraction + uChromaticAberration;
        float g = refraction;
        float b = refraction - uChromaticAberration;
        
        // Create liquid flow effect
        float liquidFlow = sin(distortedUV.x * 10.0 + time * 2.0) * 
                          cos(distortedUV.y * 8.0 + time * 1.5) * 0.5 + 0.5;
        
        // Combine effects
        vec3 color = vec3(r, g, b) * liquidFlow;
        
        // Add glass-like transparency and reflection
        float transparency = 0.8 + 0.2 * sin(time * 3.0);
        float reflection = 0.3 + 0.2 * fractalNoise(uv * 6.0 + time * 0.5);
        
        color = mix(color, vec3(1.0), reflection * 0.4);
        
        return color * transparency;
      }
      
      void main() {
        vec3 liquidColor = liquidGlass(vUv, uTime);
        
        // Add fresnel effect for glass-like appearance
        vec3 viewDirection = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(vNormal, viewDirection), 0.0), 2.0);
        
        // Combine liquid effect with fresnel
        vec3 finalColor = mix(liquidColor, vec3(1.0), fresnel * 0.6);
        
        gl_FragColor = vec4(finalColor, 0.9);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uIor: { value: ior },
        uThickness: { value: thickness },
        uChromaticAberration: { value: chromaticAberration },
        uAnisotropy: { value: anisotropy },
        uScale: { value: scale },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [ior, thickness, chromaticAberration, anisotropy, scale]);

  useFrame((state) => {
    if (material) {
      material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return <primitive object={material} ref={ref} attach="material" {...props} />
});

// Lens Component
const Lens = ({ scale = 0.25, ...props }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <LiquidGlassMaterial {...props} />
    </mesh>
  );
};

// Bar Component
const Bar = ({ scale = 0.25, ...props }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
      <LiquidGlassMaterial {...props} />
    </mesh>
  );
};

// Cube Component
const Cube = ({ scale = 0.25, ...props }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <LiquidGlassMaterial {...props} />
    </mesh>
  );
};

// Main FluidGlass Component
export const FluidGlass: React.FC<FluidGlassProps> = ({
  mode = 'lens',
  lensProps = {},
  barProps = {},
  cubeProps = {},
  className = '',
  style = {}
}) => {
  const renderComponent = () => {
    switch (mode) {
      case 'lens':
        return <Lens {...lensProps} />;
      case 'bar':
        return <Bar {...barProps} />;
      case 'cube':
        return <Cube {...cubeProps} />;
      default:
        return <Lens {...lensProps} />;
    }
  };

  return (
    <div className={`w-full h-full ${className}`} style={style}>
      <Canvas
        camera={{ position: [0, 0, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />

        {renderComponent()}

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default FluidGlass;
