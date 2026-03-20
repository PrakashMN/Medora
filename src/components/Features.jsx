import React from 'react';
import { featuresList } from '../data/content.jsx';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section pb-24 section-shell-cool">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge features-badge">Capabilities</span>
          <h2 className="section-title">Empowering Care Through Technology</h2>
          <p className="section-subtitle">
            A comprehensive suite of tools designed to prioritize your wellness above all else.
          </p>
        </motion.div>

        <motion.div 
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {featuresList.map(feature => (
            <motion.div 
              key={feature.id} 
              className="feature-card group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
