import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, speed, rotationSpeed }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * rotationSpeed;
        meshRef.current.rotation.y = t * rotationSpeed * 0.5;
        meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.2;
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.1}
                    metalness={0.1}
                    transparent
                    opacity={0.6}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#eab308" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#475569" />

                <group>
                    <FloatingShape position={[-4, 2, -5]} color="#eab308" speed={1.5} rotationSpeed={0.2} />
                    <FloatingShape position={[4, -2, -8]} color="#94a3b8" speed={1.2} rotationSpeed={0.15} />
                    <FloatingShape position={[0, -3, -4]} color="#cbd5e1" speed={0.8} rotationSpeed={0.1} />
                    <FloatingShape position={[6, 3, -10]} color="#eab308" speed={2} rotationSpeed={0.25} />
                    <FloatingShape position={[-6, -1, -12]} color="#94a3b8" speed={1} rotationSpeed={0.1} />
                </group>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Hero3D;
