import React from 'react';
import { motion } from 'framer-motion';
import './CTA.css';

const CTA = ({ onOpenWishlist }) => {
  return (
    <section className="cta-section section-padding section-shell section-shell-slate" id="cta">
      <div className="container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="cta-title">Join the Future of Healthcare</h2>
          <p className="cta-subtitle">
            Be part of a smarter, faster, and more connected healthcare ecosystem.
          </p>
          <div className="cta-buttons">
            <button type="button" className="btn btn-white" onClick={onOpenWishlist}>
              Get Started
            </button>
            <a href="#contact" className="btn btn-outline-white">
              Request Demo
            </a>
          </div>
          <div className="cta-decor circle-1"></div>
          <div className="cta-decor circle-2"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
