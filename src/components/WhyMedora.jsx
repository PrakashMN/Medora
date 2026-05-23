import { BrainCircuit, ArrowLeftRight, Activity, RefreshCw, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyMedora.css';

const points = [
  {
    icon: <BrainCircuit size={24} strokeWidth={1.5} />,
    text: "Multimodal AI (text, speech, images)"
  },
  {
    icon: <ArrowLeftRight size={24} strokeWidth={1.5} />,
    text: "End-to-end healthcare ecosystem"
  },
  {
    icon: <Activity size={24} strokeWidth={1.5} />,
    text: "Real-time clinical decision support"
  },
  {
    icon: <RefreshCw size={24} strokeWidth={1.5} />,
    text: "Continuously learning system"
  },
  {
    icon: <Globe size={24} strokeWidth={1.5} />,
    text: "Designed for scale and real-world adoption"
  }
];

const WhyMedora = () => {
  return (
    <section className="why-section section-padding section-shell section-shell-cool" id="why-medora">
      <div className="container">
        <div className="why-layout">
          <motion.div
            className="why-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="why-headline">Not Just Another Healthcare App</h2>
            <p className="why-body">
              ayeeni healthtech is not a single-feature tool&mdash;it is a unified intelligence layer built for healthcare.
            </p>
          </motion.div>

          <motion.div
            className="why-points"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 }
              }
            }}
          >
            {points.map((point, i) => (
              <motion.div
                key={i}
                className="why-point"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                }}
              >
                <span className="why-point-icon">{point.icon}</span>
                <span className="why-point-text">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMedora;
