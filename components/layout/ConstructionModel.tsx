"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import type { Group } from "three";

function TrafficCone({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.42, 0.48, 0.1, 32]} />
        <meshStandardMaterial color="#1c1d22" roughness={0.5} metalness={0.25} />
      </mesh>
      <mesh position={[0, 0.58, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.36, 1.05, 32]} />
        <meshPhysicalMaterial
          color="#d85a22"
          roughness={0.32}
          metalness={0.08}
          clearcoat={0.35}
          clearcoatRoughness={0.4}
        />
      </mesh>
      <mesh position={[0, 0.38, 0]}>
        <cylinderGeometry args={[0.22, 0.28, 0.13, 32]} />
        <meshStandardMaterial color="#eef0f3" roughness={0.35} />
      </mesh>
      <mesh position={[0, 0.72, 0]}>
        <cylinderGeometry args={[0.13, 0.19, 0.12, 32]} />
        <meshStandardMaterial color="#eef0f3" roughness={0.35} />
      </mesh>
    </group>
  );
}

function Barricade({ position = [0, 0, 0] as [number, number, number] }) {
  return (
    <group position={position} rotation={[0, 0.35, 0]}>
      <mesh position={[-0.55, 0.28, 0]} castShadow>
        <boxGeometry args={[0.08, 0.56, 0.08]} />
        <meshStandardMaterial color="#8a6a18" roughness={0.6} />
      </mesh>
      <mesh position={[0.55, 0.28, 0]} castShadow>
        <boxGeometry args={[0.08, 0.56, 0.08]} />
        <meshStandardMaterial color="#8a6a18" roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.38, 0]} castShadow>
        <boxGeometry args={[1.28, 0.22, 0.06]} />
        <meshStandardMaterial color="#d85a22" roughness={0.4} />
      </mesh>
      <mesh position={[-0.28, 0.38, 0.035]}>
        <boxGeometry args={[0.22, 0.22, 0.01]} />
        <meshStandardMaterial color="#eef0f3" roughness={0.35} />
      </mesh>
      <mesh position={[0.28, 0.38, 0.035]}>
        <boxGeometry args={[0.22, 0.22, 0.01]} />
        <meshStandardMaterial color="#eef0f3" roughness={0.35} />
      </mesh>
    </group>
  );
}

function Crane({ position = [0, 0, 0] as [number, number, number] }) {
  const hook = useRef<Group>(null);

  useFrame((state) => {
    if (!hook.current) return;
    hook.current.position.y = 0.35 + Math.sin(state.clock.elapsedTime * 1.1) * 0.12;
  });

  return (
    <group position={position}>
      <mesh position={[0, 0.12, 0]} castShadow>
        <boxGeometry args={[0.55, 0.24, 0.55]} />
        <meshStandardMaterial color="#4a72b8" roughness={0.4} metalness={0.35} />
      </mesh>
      <mesh position={[0, 1.15, 0]} castShadow>
        <boxGeometry args={[0.16, 1.9, 0.16]} />
        <meshStandardMaterial color="#c5cad3" roughness={0.3} metalness={0.65} />
      </mesh>
      <mesh position={[0.7, 2.12, 0]} castShadow>
        <boxGeometry args={[1.7, 0.1, 0.12]} />
        <meshStandardMaterial color="#c5cad3" roughness={0.3} metalness={0.65} />
      </mesh>
      <mesh position={[-0.35, 2.08, 0]} castShadow>
        <boxGeometry args={[0.45, 0.16, 0.2]} />
        <meshStandardMaterial color="#3b5f9c" roughness={0.35} metalness={0.5} />
      </mesh>
      <mesh position={[1.42, 1.25, 0]}>
        <cylinderGeometry args={[0.012, 0.012, 1.7, 8]} />
        <meshStandardMaterial color="#8eadd4" metalness={0.8} roughness={0.25} />
      </mesh>
      <group ref={hook} position={[1.42, 0.4, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.12, 0.08, 0.08]} />
          <meshStandardMaterial color="#d85a22" roughness={0.4} metalness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function Site() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    const reduce = state.gl.domElement.ownerDocument.defaultView?.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    group.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group} position={[0, -0.55, 0]}>
      <Crane position={[-0.85, 0, -0.35]} />
      <TrafficCone position={[0.55, 0, 0.35]} />
      <TrafficCone position={[0.95, 0, -0.25]} />
      <Barricade position={[0.15, 0, 0.85]} />
    </group>
  );
}

export default function ConstructionModel() {
  return (
    <Canvas
      shadows
      camera={{ position: [3.4, 2.2, 4.2], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.75]}
      aria-label="3D construction site"
    >
      <color attach="background" args={["#0f1013"]} />
      <ambientLight intensity={0.35} />
      <spotLight
        position={[6, 8, 4]}
        angle={0.45}
        penumbra={0.6}
        intensity={90}
        color="#cfe0f5"
        castShadow
      />
      <pointLight position={[-4, 2, -2]} intensity={18} color="#4a72b8" />
      <Suspense fallback={null}>
        <Site />
        <ContactShadows position={[0, -0.55, 0]} opacity={0.45} scale={8} blur={2.4} far={2.5} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.05}
        autoRotate={false}
        target={[0.15, 0.55, 0]}
      />
    </Canvas>
  );
}
