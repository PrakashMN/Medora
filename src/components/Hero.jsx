import { Shield, HeartPulse, Pill, Stethoscope, Dna, Activity, Cross, Syringe } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroScene from './ui/HeroScene';
import './Hero.css';

const Hero = ({ onOpenWishlist }) => {
  return (
    <section className="hero gradient-bg" id="hero">
      {/* ── Background layers ── */}
      <div className="hero-medical-bg">
        {/* primary grid */}
        <div className="medical-grid"></div>
        {/* secondary dot grid for depth */}
        <div className="medical-dot-grid"></div>

        {/* floating healthcare icons scattered across hero */}
        <div className="bg-health-icon float-icon-1">
          <HeartPulse size={58} strokeWidth={1.1} />
        </div>
        <div className="bg-health-icon float-icon-2">
          <Shield size={50} strokeWidth={1.1} />
        </div>
        <div className="bg-health-icon float-icon-3">
          <Pill size={44} strokeWidth={1.1} />
        </div>
        <div className="bg-health-icon float-icon-4">
          <Stethoscope size={62} strokeWidth={1.0} />
        </div>
        <div className="bg-health-icon float-icon-5">
          <Dna size={52} strokeWidth={1.1} />
        </div>
        <div className="bg-health-icon float-icon-6">
          <Activity size={42} strokeWidth={1.1} />
        </div>
        <div className="bg-health-icon float-icon-7">
          <Cross size={36} strokeWidth={1.2} />
        </div>
        <div className="bg-health-icon float-icon-8">
          <Syringe size={46} strokeWidth={1.0} />
        </div>
      </div>

      {/* ── 3D Robot as full background ── */}
      <div className="hero-robot-bg">
        <HeroScene className="hero-robot-scene" />
      </div>

      {/* ── Content on top ── */}
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Building the <br /> Intelligence Layer <br />
            <span className="text-primary">for Healthcare</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A unified AI system that understands symptoms, medical data, and clinical conversations—delivering faster, smarter, and more accessible care.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button type="button" className="btn btn-primary" onClick={onOpenWishlist}>
              Get Started
            </button>
            <a href="#solution" className="btn btn-outline">
              Book a Demo
            </a>
          </motion.div>

          <motion.div
            className="trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="trust-text">Trusted by doctors and healthcare providers in pilot deployments</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
