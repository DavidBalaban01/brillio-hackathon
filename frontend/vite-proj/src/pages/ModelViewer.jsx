// src/components/ModelViewer.jsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import modelUrl from "../assets/model.gltf";

// Model component
const Model = ({ onClick }) => {
  const gltf = useGLTF(modelUrl); // Path to your GLB model in the public folder

  return (
    <primitive
      object={gltf.scene}
      scale={6.5}
      onPointerDown={(e) => {
        e.stopPropagation();
        onClick(e.point); // Pass the clicked point to the onClick handler
      }}
    />
  );
};

// RedDot component for marking click positions
const RedDot = ({ position, onRemove }) => {
  return (
    <mesh
      position={position}
      onPointerDown={(e) => {
        e.stopPropagation();
        onRemove(); // Call onRemove when clicked
      }}
    >
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};

// ModelViewer component
const ModelViewer = () => {
  const [clickPositions, setClickPositions] = useState([]);

  const handleModelClick = (position) => {
    setClickPositions([...clickPositions, position]);
    console.log("Clicked position:", position); // Logs x, y, z coordinates
  };

  const handleDotRemove = (index) => {
    setClickPositions((prevPositions) =>
      prevPositions.filter((_, i) => i !== index),
    );
  };

  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model onClick={handleModelClick} />
      <OrbitControls />
      {clickPositions.map((pos, index) => (
        <RedDot
          key={index}
          position={pos}
          onRemove={() => handleDotRemove(index)}
        />
      ))}
    </Canvas>
  );
};

export default ModelViewer;
