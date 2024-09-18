"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import {  useRef } from 'react';
import globe from '@/assets/images/gloab.webp';
import * as THREE from 'three';

// Separate component for the globe that can use `useFrame`
const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null); // Correctly typed ref

  // Animate the rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust rotation speed if needed
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load(globe.src)} />
    </mesh>
  );
};

const RotatingGlobe = () => {
  return (
    <Canvas style={{ width: '100%', height: '500px' }}>
      <ambientLight intensity={0.5} />
      <GlobeMesh /> {/* Now the GlobeMesh uses useFrame properly */}
    </Canvas>
  );
};



export default RotatingGlobe;
