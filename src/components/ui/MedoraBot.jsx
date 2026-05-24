import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

export const globalMouse = { x: 0, y: 0 };

const TEAL        = '#1A9B84';
const TEAL_DARK   = '#0F6B5B';
const TEAL_ACCENT = '#3BAE9B';
const WHITE       = '#f0f4ff';

function useBodyMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: TEAL, roughness: 0.35, metalness: 0.45,
  }), []);
}

function useDarkMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: TEAL_DARK, roughness: 0.4, metalness: 0.5,
  }), []);
}

function useAccentMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: TEAL_ACCENT, roughness: 0.2, metalness: 0.6,
  }), []);
}

function useGlowMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: TEAL_ACCENT, emissive: TEAL_ACCENT,
    emissiveIntensity: 1.8, roughness: 0.1, metalness: 0.3,
    transparent: true, opacity: 0.92,
  }), []);
}

function MedicalCross({ position, scale = 1 }) {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: WHITE, roughness: 0.5, metalness: 0.1,
  }), []);
  return (
    <group position={position} scale={scale}>
      <mesh material={mat}><boxGeometry args={[0.28, 0.08, 0.04]} /></mesh>
      <mesh material={mat}><boxGeometry args={[0.08, 0.28, 0.04]} /></mesh>
    </group>
  );
}

function MedoraBot() {
  const groupRef = useRef();
  const headRef  = useRef();
  const torsoRef = useRef();
  const leftArmRef  = useRef();
  const rightArmRef = useRef();
  const { viewport } = useThree();

  const target = useRef({ x: 0, y: 0 });
  const armTarget = useRef({ x: 0, y: 0 });

  const blinkRef = useRef({ timer: 3 + Math.random() * 2, phase: 0, closed: false });
  const breathRef = useRef(0);

  useFrame((_, delta) => {
    const px = globalMouse.x;
    const py = globalMouse.y;

    target.current.x += (px * 0.5 - target.current.x) * 0.1;
    target.current.y += (py * 0.4 - target.current.y) * 0.1;

    armTarget.current.x += (px * 0.3 - armTarget.current.x) * 0.06;
    armTarget.current.y += (py * 0.25 - armTarget.current.y) * 0.06;

    if (headRef.current) {
      headRef.current.rotation.y = target.current.x * 1.0;
      headRef.current.rotation.x = -target.current.y * 0.6;
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = target.current.x * 0.3;
      groupRef.current.rotation.x = -target.current.y * 0.18;
    }

    /* blink */
    const blink = blinkRef.current;
    blink.timer -= delta;
    if (blink.timer <= 0 && !blink.closed) {
      blink.closed = true;
      blink.phase = 0;
    }
    if (blink.closed) {
      blink.phase += delta;
      const eyeScaleY = Math.max(0.01, 1 - blink.phase * 20);
      if (headRef.current) {
        const leftEye = headRef.current.children.find(
          (c) => c.isMesh && c.geometry.type === 'SphereGeometry' && c.position.x < 0
        );
        const rightEye = headRef.current.children.find(
          (c) => c.isMesh && c.geometry.type === 'SphereGeometry' && c.position.x > 0
        );
        if (leftEye) leftEye.scale.y = eyeScaleY;
        if (rightEye) rightEye.scale.y = eyeScaleY;
      }
      if (blink.phase > 0.12) {
        blink.closed = false;
        blink.phase = 0;
        blink.timer = 2.5 + Math.random() * 3;
        if (headRef.current) {
          const eyes = headRef.current.children.filter(
            (c) => c.isMesh && c.geometry.type === 'SphereGeometry'
          );
          eyes.forEach((e) => e.scale.y = 1);
        }
      }
    }

    /* breathing */
    breathRef.current += delta;
    const breathScale = 1 + Math.sin(breathRef.current * 2.2) * 0.006;
    if (torsoRef.current) {
      torsoRef.current.scale.y = breathScale;
    }

    /* arm tracking */
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = 0.15 + armTarget.current.x * 0.15;
    }
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -0.15 + armTarget.current.x * 0.15;
    }

    /* antenna glow pulse */
    if (headRef.current) {
      const antenna = headRef.current.children.find(
        (c) => c.isMesh && c.geometry.type === 'SphereGeometry' && c.position.y > 0.6
      );
      if (antenna && antenna.material) {
        antenna.material.emissiveIntensity = 2.0 + Math.sin(breathRef.current * 1.5) * 0.6;
      }
    }
  });

  const bodyMat   = useBodyMaterial();
  const darkMat   = useDarkMaterial();
  const accentMat = useAccentMaterial();
  const glowMat   = useGlowMaterial();

  const sc = Math.min(viewport.width / 7, 1);

  return (
    <Float speed={2.5} rotationIntensity={0.15} floatIntensity={0.6} floatingRange={[-0.12, 0.12]}>
      <group ref={groupRef} scale={sc}>

        {/* ── HEAD ── */}
        <group ref={headRef} position={[0, 1.3, 0]}>
          <RoundedBox args={[1.3, 1.05, 1.1]} radius={0.22} smoothness={6} material={bodyMat} />

          <RoundedBox args={[1.0, 0.48, 0.12]} radius={0.12} smoothness={4}
            position={[0, 0.02, 0.52]} material={glowMat} />

          <mesh position={[-0.22, 0.04, 0.6]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={2} />
          </mesh>
          <mesh position={[0.22, 0.04, 0.6]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={2} />
          </mesh>

          <mesh position={[0, 0.58, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.25, 12]} />
            <meshStandardMaterial {...darkMat} />
          </mesh>
          <mesh position={[0, 0.78, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={TEAL_ACCENT} emissive={TEAL_ACCENT} emissiveIntensity={2.4} />
          </mesh>

          <mesh position={[-0.72, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.1, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
          <mesh position={[0.72, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.1, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
        </group>

        <mesh position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.25, 12]} />
          <meshStandardMaterial {...darkMat} />
        </mesh>

        {/* ── TORSO ── */}
        <group ref={torsoRef} position={[0, -0.1, 0]}>
          <RoundedBox args={[1.5, 1.4, 1.0]} radius={0.2} smoothness={6} material={bodyMat} />

          <RoundedBox args={[1.1, 0.85, 0.08]} radius={0.12} smoothness={4}
            position={[0, 0.1, 0.48]} material={darkMat} />

          <MedicalCross position={[0, 0.12, 0.55]} scale={1.1} />

          <mesh position={[0, -0.5, 0.45]}>
            <boxGeometry args={[1.0, 0.06, 0.06]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
          <mesh position={[0, -0.58, 0.45]}>
            <boxGeometry args={[0.6, 0.04, 0.06]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
        </group>

        {/* ── ARMS ── */}
        <group ref={leftArmRef} position={[-1.0, 0.1, 0]}>
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0.15]}>
            <capsuleGeometry args={[0.14, 0.55, 8, 12]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>
          <mesh position={[0, 0.35, 0]}>
            <sphereGeometry args={[0.17, 12, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
          <mesh position={[0.04, -0.42, 0]}>
            <sphereGeometry args={[0.16, 12, 12]} />
            <meshStandardMaterial {...darkMat} />
          </mesh>
        </group>

        <group ref={rightArmRef} position={[1.0, 0.1, 0]}>
          <mesh position={[0, 0, 0]} rotation={[0, 0, -0.15]}>
            <capsuleGeometry args={[0.14, 0.55, 8, 12]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>
          <mesh position={[0, 0.35, 0]}>
            <sphereGeometry args={[0.17, 12, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
          <mesh position={[-0.04, -0.42, 0]}>
            <sphereGeometry args={[0.16, 12, 12]} />
            <meshStandardMaterial {...darkMat} />
          </mesh>
        </group>

        {/* ── LOWER BODY ── */}
        <group position={[0, -1.1, 0]}>
          <mesh>
            <cylinderGeometry args={[0.55, 0.35, 0.5, 16]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>
          <mesh position={[0, -0.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.32, 0.05, 8, 32]} />
            <meshStandardMaterial color={TEAL_ACCENT} emissive={TEAL_ACCENT} emissiveIntensity={1.6} transparent opacity={0.8} />
          </mesh>
          <mesh position={[0, -0.38, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.28, 24]} />
            <meshStandardMaterial color={TEAL_ACCENT} emissive={TEAL_ACCENT} emissiveIntensity={1.2} transparent opacity={0.35} side={THREE.DoubleSide} />
          </mesh>
        </group>

      </group>
    </Float>
  );
}

export default MedoraBot;
