import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import MedoraBot, { globalMouse } from './MedoraBot';

function HeroScene({ className = '' }) {
  /* track mouse across the entire window, normalise to [-1, 1] */
  useEffect(() => {
    const onMove = (e) => {
      globalMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      globalMouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className={`hero-scene-wrapper ${className}`}>
      <Canvas
        camera={{ position: [0, 0.2, 4.2], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.0} color="#ffffff" />
        <directionalLight position={[-3, 2, 4]} intensity={0.35} color="#00c0f3" />
        <pointLight position={[0, -2, 3]} intensity={0.4} color="#2e3192" />
        <Suspense fallback={null}>
          <MedoraBot />
          <Environment preset="city" environmentIntensity={0.25} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default HeroScene;
