import { User, Brain, Lightbulb, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
  {
    num: "01",
    icon: <User size={28} strokeWidth={1.5} />,
    title: "Understand the Patient",
    desc: "Patients input symptoms through an intuitive interface or conversation."
  },
  {
    num: "02",
    icon: <Brain size={28} strokeWidth={1.5} />,
    title: "Process Multimodal Data",
    desc: "AI analyzes symptoms, reports, prescriptions, and medical images."
  },
  {
    num: "03",
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
    title: "Generate Insights",
    desc: "Provides possible conditions, recommended tests, and specialists."
  },
  {
    num: "04",
    icon: <ArrowRight size={28} strokeWidth={1.5} />,
    title: "Enable Action",
    desc: "Book consultations, access reports, and continue care seamlessly."
  }
];

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
          <h2 className="section-title">How ayeeni healthtech Works</h2>
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
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              className="timeline-item"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="timeline-number">{step.num}</div>
              <div className="timeline-content">
                <div className="timeline-icon">{step.icon}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-desc">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
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
