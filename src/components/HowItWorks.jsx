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
    <section className="how-section section-padding section-shell section-shell-slate" id="how-it-works">
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

        <div className="how-steps">
          <div className="how-steps-row">
            {steps.map((step, index) => (
              <div key={step.num} className="how-step-col">
                <div className="how-step-badge-wrap">
                  <div className="how-step-badge">{step.num}</div>
                </div>
                <div className="how-step-card-outer">
                  <motion.div
                    className="how-step-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  >
                    <div className="how-step-icon">{step.icon}</div>
                    <h3 className="how-step-title">{step.title}</h3>
                    <p className="how-step-desc">{step.desc}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
