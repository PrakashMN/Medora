import { Brain, Users, Workflow, Database, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';
import './Technology.css';

const differentiators = [
  {
    icon: <Brain size={24} strokeWidth={1.5} />,
    text: "Multimodal intelligence (text + speech + images)"
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    text: "Unified patient context"
  },
  {
    icon: <Workflow size={24} strokeWidth={1.5} />,
    text: "Real-world workflow integration"
  },
  {
    icon: <Database size={24} strokeWidth={1.5} />,
    text: "Proprietary data learning loop"
  },
  {
    icon: <GitBranch size={24} strokeWidth={1.5} />,
    text: "Context-aware clinical reasoning"
  }
];

const Technology = () => {
  return (
    <section className="tech-section section-padding" id="technology">
      <div className="container">
        <div className="tech-layout">
          <motion.div
            className="tech-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="tech-intro">
              What makes ayeeni healthtech&rsquo;s AI truly powerful is not just individual models,
              but how they work together.
            </p>
          </motion.div>

          <motion.div
            className="tech-diff"
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
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                className="tech-diff-item"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                }}
              >
                <span className="tech-diff-icon">{item.icon}</span>
                <span className="tech-diff-text">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="tech-closing"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          An AI system that evolves with healthcare&mdash;not one that operates outside it.
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
