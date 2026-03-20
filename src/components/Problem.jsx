import React from 'react';
import { FileWarning, FileSearch, RefreshCcwDot, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Problem.css';

const Problem = () => {
  const problems = [
    {
      id: 1,
      icon: <FileWarning size={36} strokeWidth={1.5} />,
      title: "Lost Medical Records",
      desc: "Patients struggle to maintain and share their complete health history."
    },
    {
      id: 2,
      icon: <FileSearch size={36} strokeWidth={1.5} />,
      title: "Difficulty Finding Doctors",
      desc: "Finding the right specialist with verified credentials takes too much time."
    },
    {
      id: 3,
      icon: <RefreshCcwDot size={36} strokeWidth={1.5} />,
      title: "Poor Follow-up Care",
      desc: "Lack of continuous monitoring after discharge leads to preventable readmissions."
    },
    {
      id: 4,
      icon: <Building2 size={36} strokeWidth={1.5} />,
      title: "Disconnected Hospitals",
      desc: "Silos between healthcare providers cause delays and repeated tests."
    }
  ];

  return (
    <section className="problem-section section-padding section-shell section-shell-slate" id="problem">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">The Challenge</span>
          <h2 className="section-title">Healthcare today is fragmented.</h2>
          <p className="section-subtitle">
            The current system creates unnecessary hurdles for everyone involved in the care journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="problem-grid"
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
          {problems.map((prob) => (
            <motion.div 
              key={prob.id} 
              className="problem-card hover-lift"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="problem-icon-wrapper">
                <span className="problem-emoji">{prob.icon}</span>
              </div>
              <h3 className="problem-card-title">{prob.title}</h3>
              <p className="problem-card-desc">{prob.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
