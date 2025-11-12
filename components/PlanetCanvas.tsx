"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Planet() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta * 0.2;
    meshRef.current.rotation.x = Math.sin(Date.now() * 0.00015) * 0.15;
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#2563EB"
        emissive="#1d4ed8"
        emissiveIntensity={0.7}
        roughness={0.2}
        metalness={0.6}
      />
    </mesh>
  );
}

export function PlanetCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="h-full w-full"
      shadows
    >
      <color attach="background" args={['#0b1120']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 3]} intensity={1.2} />
      <pointLight position={[-6, -4, -6]} intensity={0.6} color="#0EA5E9" />
      <Stars radius={60} depth={40} count={1200} factor={2.5} fade />
      <Planet />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.4}
      />
    </Canvas>
  );
}

