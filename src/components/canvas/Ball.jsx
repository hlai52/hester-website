import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { technologies } from "../../constants";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          flatShading
          position={[0, 0, 1]}
          map={decal}
          //rotation={[0, Math.PI, 0]}

          rotation={[2 * Math.PI, 0, 6.25]}
        />
        {/* Postion use to be 0, 0 , 1 */}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  return (
    <>
      <Canvas
        frameloop="always"
        shadows
        camera={{ position: [5, 0, 20], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />

          <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  );
};

function name() {
  return (
    <div>
      <p>String: {technologies.name}</p>
    </div>
  );
}

export default BallCanvas;

//text={`{technologies.name}`} did not work
// render();

// {
//   const { technologies } = this.state;

//   return (
//     <div>
//       {technologies.map((technologies) => (
//         <p key={technologies.name}> {technologies.title}</p>
//       ))}
//     </div>
//   );
// }
