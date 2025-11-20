// custom.d.ts
import * as THREE from 'three';
import { ShaderMaterial } from 'three';
import React from 'react'; // Import React to ensure JSX namespace is available

declare global {
  namespace JSX {
    interface IntrinsicElements {
      shaderMaterial: {
        attach?: string;
        args?: ConstructorParameters<typeof ShaderMaterial>;
        fragmentShader: string;
        vertexShader: string;
        uniforms: { [key: string]: THREE.IUniform<any> };
        ref?: React.Ref<THREE.ShaderMaterial>;
      };
    }
  }
}
