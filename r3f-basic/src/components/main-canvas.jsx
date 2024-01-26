import { Canvas } from "@react-three/fiber";
import { Color } from "three";

export default function MainCanvas() {
  return (
    <Canvas
      gl={{
        // gl은 renderer
        antialias: true,
      }}
      camera={{
        // 기본적으로 PerspectiveCamera인 듯...
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.1,
        far: 2000,
        position: [5, 5, 5],
      }}
      scene={{
        background: new Color(0x000000),
      }}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>
    </Canvas>
  );
}
