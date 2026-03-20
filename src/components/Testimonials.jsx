import React from 'react';
import { testimonialsData } from '../data/content.jsx';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding section-shell section-shell-airy" id="testimonials">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge trust-badge">Trust & Safety</span>
          <h2 className="section-title">Trusted by doctors, hospitals, and patients.</h2>
          <p className="section-subtitle">
            Join thousands of users who have already transformed their healthcare experience with Medora.
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="testimonial-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="quote-icon">"</div>
              <p className="testimonial-text">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className={`author-avatar ${testimonial.avatarClass}`}></div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="partners-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="partners-title">INTEGRATED WITH LEADING HEALTHCARE PROVIDERS</p>
          <div className="partners-marquee border-glass">
            <div className="partners-track">
              <img src="/kle-logo.svg" alt="KLE" className="partner-logo-img" />
              <img src="/lake-logo.svg" alt="Lakeview Hospital" className="partner-logo-img" />
              <img src="/manipal-logo.svg" alt="Manipal Hospitals" className="partner-logo-img" />
              <img src="/apollo-logo.svg" alt="Apollo Hospitals" className="partner-logo-img" />
              <img src="/nimhans-logo.svg" alt="NIMHANS" className="partner-logo-img" />
              <img src="/aiims-logo.svg" alt="AIIMS" className="partner-logo-img" />
              <img src="/monsterlabs-logo.svg" alt="TheMonster.Labs" className="partner-logo-img" />
              {/* Duplicate set for seamless loop */}
              <img src="/kle-logo.svg" alt="KLE" className="partner-logo-img" />
              <img src="/lake-logo.svg" alt="Lakeview Hospital" className="partner-logo-img" />
              <img src="/manipal-logo.svg" alt="Manipal Hospitals" className="partner-logo-img" />
              <img src="/apollo-logo.svg" alt="Apollo Hospitals" className="partner-logo-img" />
              <img src="/nimhans-logo.svg" alt="NIMHANS" className="partner-logo-img" />
              <img src="/aiims-logo.svg" alt="AIIMS" className="partner-logo-img" />
              <img src="/monsterlabs-logo.svg" alt="TheMonster.Labs" className="partner-logo-img" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
