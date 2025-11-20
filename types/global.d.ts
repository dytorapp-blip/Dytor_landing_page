// types/global.d.ts
import { ShaderMaterial } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      shaderMaterial: React.Node<
        JSX.IntrinsicElements['meshStandardMaterial'] & {
          attach?: string;
          args?: ConstructorParameters<typeof ShaderMaterial>;
          fragmentShader: string;
          vertexShader: string;
          uniforms: { [key: string]: { value: any } };
        }
      >;
    }
  }
}
