import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

/* ─── global mouse position ref (set from HeroScene) ─── */
export const globalMouse = { x: 0, y: 0 };

/* ─── colour palette (matches Medora CSS vars) ─── */
const INDIGO      = '#2e3192';
const INDIGO_DARK = '#1e2060';
const CYAN        = '#00c0f3';
const WHITE       = '#f0f4ff';
const LIGHT_GRAY  = '#c8d4e8';

/* ─── reusable materials ─── */
function useBodyMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: INDIGO,
    roughness: 0.35,
    metalness: 0.45,
  }), []);
}

function useDarkMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: INDIGO_DARK,
    roughness: 0.4,
    metalness: 0.5,
  }), []);
}

function useAccentMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: CYAN,
    roughness: 0.2,
    metalness: 0.6,
  }), []);
}

function useGlowMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: CYAN,
    emissive: CYAN,
    emissiveIntensity: 1.8,
    roughness: 0.1,
    metalness: 0.3,
    transparent: true,
    opacity: 0.92,
  }), []);
}

function useWhiteMaterial() {
  return useMemo(() => new THREE.MeshStandardMaterial({
    color: WHITE,
    roughness: 0.5,
    metalness: 0.1,
  }), []);
}

/* ─── medical cross emblem ─── */
function MedicalCross({ position, scale = 1 }) {
  const mat = useWhiteMaterial();
  return (
    <group position={position} scale={scale}>
      <mesh material={mat}>
        <boxGeometry args={[0.28, 0.08, 0.04]} />
      </mesh>
      <mesh material={mat}>
        <boxGeometry args={[0.08, 0.28, 0.04]} />
      </mesh>
    </group>
  );
}

/* ─── the robot ─── */
function MedoraBot() {
  const groupRef = useRef();
  const headRef  = useRef();
  const { viewport } = useThree();

  /* smooth pointer tracking */
  const target = useRef({ x: 0, y: 0 });

  useFrame(() => {
    /* use global mouse position (normalised -1 to 1) */
    const px = globalMouse.x;
    const py = globalMouse.y;

    /* lerp target — smooth but responsive */
    target.current.x += (px * 0.5 - target.current.x) * 0.1;
    target.current.y += (py * 0.4 - target.current.y) * 0.1;

    /* head follows cursor — wide range */
    if (headRef.current) {
      headRef.current.rotation.y = target.current.x * 1.0;
      headRef.current.rotation.x = -target.current.y * 0.6;
    }

    /* body lean — noticeable tilt */
    if (groupRef.current) {
      groupRef.current.rotation.y = target.current.x * 0.3;
      groupRef.current.rotation.x = -target.current.y * 0.18;
    }
  });

  const bodyMat   = useBodyMaterial();
  const darkMat   = useDarkMaterial();
  const accentMat = useAccentMaterial();
  const glowMat   = useGlowMaterial();
  const whiteMat  = useWhiteMaterial();

  /* responsive scale */
  const sc = Math.min(viewport.width / 7, 1);

  return (
    <Float
      speed={2.5}
      rotationIntensity={0.15}
      floatIntensity={0.6}
      floatingRange={[-0.12, 0.12]}
    >
      <group ref={groupRef} scale={sc}>

        {/* ── HEAD ── */}
        <group ref={headRef} position={[0, 1.3, 0]}>
          {/* main head */}
          <RoundedBox args={[1.3, 1.05, 1.1]} radius={0.22} smoothness={6} material={bodyMat} />

          {/* visor / face screen */}
          <RoundedBox
            args={[1.0, 0.48, 0.12]}
            radius={0.12}
            smoothness={4}
            position={[0, 0.02, 0.52]}
            material={glowMat}
          />

          {/* eyes on visor */}
          <mesh position={[-0.22, 0.04, 0.6]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={2} />
          </mesh>
          <mesh position={[0.22, 0.04, 0.6]}>
            <sphereGeometry args={[0.09, 16, 16]} />
            <meshStandardMaterial color={WHITE} emissive={WHITE} emissiveIntensity={2} />
          </mesh>

          {/* antenna base */}
          <mesh position={[0, 0.58, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.25, 12]} />
            <meshStandardMaterial {...darkMat} />
          </mesh>
          {/* antenna tip */}
          <mesh position={[0, 0.78, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={2.4} />
          </mesh>

          {/* ear accents */}
          <mesh position={[-0.72, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.1, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
          <mesh position={[0.72, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.12, 0.1, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
        </group>

        {/* ── NECK ── */}
        <mesh position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.18, 0.22, 0.25, 12]} />
          <meshStandardMaterial {...darkMat} />
        </mesh>

        {/* ── TORSO ── */}
        <group position={[0, -0.1, 0]}>
          <RoundedBox args={[1.5, 1.4, 1.0]} radius={0.2} smoothness={6} material={bodyMat} />

          {/* chest accent panel */}
          <RoundedBox
            args={[1.1, 0.85, 0.08]}
            radius={0.12}
            smoothness={4}
            position={[0, 0.1, 0.48]}
            material={darkMat}
          />

          {/* medical cross on chest */}
          <MedicalCross position={[0, 0.12, 0.55]} scale={1.1} />

          {/* cyan stripe accents */}
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
        {/* left arm - upper */}
        <group position={[-1.0, 0.1, 0]}>
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0.15]}>
            <capsuleGeometry args={[0.14, 0.55, 8, 12]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>
          {/* shoulder joint */}
          <mesh position={[0, 0.35, 0]}>
            <sphereGeometry args={[0.17, 12, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
          {/* hand */}
          <mesh position={[0.04, -0.42, 0]}>
            <sphereGeometry args={[0.16, 12, 12]} />
            <meshStandardMaterial {...darkMat} />
          </mesh>
        </group>

        {/* right arm - upper */}
        <group position={[1.0, 0.1, 0]}>
          <mesh position={[0, 0, 0]} rotation={[0, 0, -0.15]}>
            <capsuleGeometry args={[0.14, 0.55, 8, 12]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>
          {/* shoulder joint */}
          <mesh position={[0, 0.35, 0]}>
            <sphereGeometry args={[0.17, 12, 12]} />
            <meshStandardMaterial {...accentMat} />
          </mesh>
          {/* hand */}
          <mesh position={[-0.04, -0.42, 0]}>
            <sphereGeometry args={[0.16, 12, 12]} />
            <meshStandardMaterial {...darkMat} />
          </mesh>
        </group>

        {/* ── LOWER BODY / HOVER BASE ── */}
        <group position={[0, -1.1, 0]}>
          {/* tapered lower section */}
          <mesh>
            <cylinderGeometry args={[0.55, 0.35, 0.5, 16]} />
            <meshStandardMaterial {...bodyMat} />
          </mesh>

          {/* glow ring at bottom (hover thruster) */}
          <mesh position={[0, -0.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.32, 0.05, 8, 32]} />
            <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.6} transparent opacity={0.8} />
          </mesh>

          {/* bottom glow disc */}
          <mesh position={[0, -0.38, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.28, 24]} />
            <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.2} transparent opacity={0.35} side={THREE.DoubleSide} />
          </mesh>
        </group>

      </group>
    </Float>
  );
}

export default MedoraBot;
