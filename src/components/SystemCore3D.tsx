import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';

function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#3b82f6"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>
      
      {/* Orbiting Rings */}
      <Ring rotation={[Math.PI / 2, 0, 0]} radius={1.5} speed={0.5} />
      <Ring rotation={[0, Math.PI / 2, 0]} radius={1.8} speed={0.8} />
      <Ring rotation={[Math.PI / 4, Math.PI / 4, 0]} radius={2.1} speed={0.3} />
    </group>
  );
}

function Ring({ rotation, radius, speed }: { rotation: [number, number, number], radius: number, speed: number }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.z = time * speed;
    }
  });

  return (
    <group ref={ref} rotation={rotation}>
      <mesh>
        <torusGeometry args={[radius, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function FloatingText({ text, position, delay }: { text: string, position: [number, number, number], delay: number }) {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + delay;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(time) * 0.2;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
      >
        {text}
      </Text>
    </group>
  );
}

export default function SystemCore3D() {
  return (
    <div className="h-[80vh] w-full relative flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-4">Digital Ecosystem</h2>
      <p className="text-white/40 text-lg">Scroll to explore the architecture</p>
      {/* 3D Canvas removed as requested */}
    </div>
  );
}

function Stars({ count }: { count: number }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}
