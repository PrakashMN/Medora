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
          <motion.span
            className="section-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="hero-badge-dot" aria-hidden="true"></span>
            Intelligent Care Infrastructure
          </motion.span>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Redefining <br /> Healthcare for Everyone <br />
            <span className="text-primary">with AI.</span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Medora connects records, providers, hospitals, and live care signals into one calm,
            patient-centered platform.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button type="button" className="btn btn-primary" onClick={onOpenWishlist}>
              Get Started
            </button>
            <a href="#solution" className="btn btn-outline">
              Learn More
            </a>
          </motion.div>

          <motion.div
            className="trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="trust-text">Trusted by leading hospitals</p>
            <div className="trust-logos">
              <img src="/kle-logo.svg" alt="KLE Ayurveda Hospital" className="trust-logo" />
              <img src="/lake-logo.svg" alt="Lakeview Hospital" className="trust-logo" />
              <img src="/manipal-logo.svg" alt="Manipal Hospitals" className="trust-logo" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
