import { Box, Plane, Sphere } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function Meshes() {
  const planeProps = {
    args: [40, 40, 40],
    rotation: [-Math.PI / 2, 0, 0],
    receiveShadow: true,
  };

  const boxProps = {
    args: [2, 2, 2],
    castShadow: true,
    position: [0, 0.5, 0],
  };

  const sphereProps = {
    args: [1],
    position: [0, 1, 3],
  };

  return (
    // <mesh>
    //   <boxGeometry args={[1, 1, 1]} />
    //   <meshBasicMaterial color={0xff0000} />
    // </mesh>
    <>
      <Plane {...planeProps}>
        <meshStandardMaterial />
      </Plane>
      <Box {...boxProps}>
        <meshStandardMaterial color={0xff0000} />
      </Box>
    </>
  );
}
