import React from 'react';
import { stepsData } from '../data/content.jsx';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section section-padding section-shell section-shell-slate" id="how-it-works">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge hiw-badge">Simple Process</span>
          <h2 className="section-title">How Medora Works</h2>
          <p className="section-subtitle">
            Your journey to better health starts with four simple steps.
          </p>
        </motion.div>

        <motion.div 
          className="timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {stepsData.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="timeline-item"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="timeline-number">{step.id}</div>
              <div className="timeline-content">
                <div className="timeline-icon">{step.icon}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </div>
              {index < stepsData.length - 1 && (
                <div className="timeline-connector">
                  <div className="line"></div>
                  <div className="arrow"></div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
