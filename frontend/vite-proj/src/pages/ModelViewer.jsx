// src/components/ModelViewer.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import modelUrl from '../assets/model.gltf';


const Model = () => {
    const gltf = useGLTF(modelUrl); // Path to your GLB model in the public folder
    return <primitive object={gltf.scene} scale={1.5} />;
};

const ModelViewer = () => {
    return (
        <Canvas style={{ width: '100%', height: '100vh' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Model />
            <OrbitControls />
        </Canvas>
    );
};

export default ModelViewer;
