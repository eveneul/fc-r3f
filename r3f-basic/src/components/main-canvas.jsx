import { Canvas } from "@react-three/fiber";
import { Color } from "three";
import { OrbitControls } from "@react-three/drei";
import Meshes from "./Meshes";

export default function MainCanvas() {
  const rendererOptions = {
    antialias: true,
  };

  const cameraOptions = {
    fov: 75,
    aspect: window.innerWidth / window.innerHeight,
    near: 0.1,
    far: 2000,
    position: [5, 5, 5],
  };

  const sceneOptions = {
    background: new Color(0x000000),
  };

  return (
    <Canvas
      gl={rendererOptions}
      camera={cameraOptions}
      scene={sceneOptions}
      shadows={"soft"}>
      <OrbitControls enableDamping={true} />
      <directionalLight
        castShadow
        args={[0xffffff, 5]}
        position={[4, 4, 4]}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      />
      <Meshes />
    </Canvas>
  );
}
