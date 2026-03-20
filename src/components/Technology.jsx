import React from 'react';
import { Atom } from 'lucide-react';
import { techStackData } from '../data/content.jsx';
import { motion } from 'framer-motion';
import './Technology.css';

const Technology = () => {
  return (
    <section className="tech-section section-padding" id="technology">
      <div className="container">
        <div className="tech-layout">
          <motion.div 
            className="tech-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="tech-core glass-effect pulse-glow">
              <span className="core-icon"><Atom size={48} color="white" /></span>
            </div>
            {techStackData.map((tech, i) => (
              <div key={tech.id} className={`tech-node node-${i+1} glass-effect`}>
                <span className="node-icon">{tech.icon}</span>
              </div>
            ))}
            
            {/* Connection lines would go here, simulated with CSS */}
            <svg className="tech-connections" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <line x1="200" y1="200" x2="100" y2="100" stroke="var(--color-primary-light)" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="200" y1="200" x2="300" y2="100" stroke="var(--color-primary-light)" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="200" y1="200" x2="100" y2="300" stroke="var(--color-primary-light)" strokeWidth="2" strokeDasharray="5,5"/>
              <line x1="200" y1="200" x2="300" y2="300" stroke="var(--color-primary-light)" strokeWidth="2" strokeDasharray="5,5"/>
            </svg>
          </motion.div>
          
          <motion.div 
            className="tech-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge tech-badge">Tech Stack</span>
            <h2 className="section-title">Powered by tomorrow's technology.</h2>
            <p className="tech-desc">
              We leverage the latest advancements in AI, blockchain, and cloud computing to deliver a 
              fast, secure, and resilient healthcare platform.
            </p>
            <motion.div 
              className="tech-list"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {techStackData.map((tech) => (
                <motion.div 
                  key={tech.id} 
                  className="tech-list-item"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                >
                  <div className="tech-list-icon">{tech.icon}</div>
                  <div>
                    <h4 className="tech-list-title">{tech.title}</h4>
                    <p className="tech-list-desc">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
