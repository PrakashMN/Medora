import { AlertTriangle, EyeOff, Stethoscope, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';
import './Problem.css';

const impactPoints = [
  {
    icon: <AlertTriangle size={24} strokeWidth={1.5} />,
    text: "No unified patient health record"
  },
  {
    icon: <EyeOff size={24} strokeWidth={1.5} />,
    text: "Poor health awareness and delayed diagnosis"
  },
  {
    icon: <Stethoscope size={24} strokeWidth={1.5} />,
    text: "Overburdened doctors and hospitals"
  },
  {
    icon: <Repeat size={24} strokeWidth={1.5} />,
    text: "Inefficient workflows and repeated tests"
  }
];

const Problem = () => {
  return (
    <section className="problem-section section-padding section-shell section-shell-slate" id="problem">
      <div className="container">
        <div className="problem-layout">
          <motion.div
            className="problem-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="problem-headline">
              Healthcare is fragmented. Patients are confused. Doctors are overloaded.
            </h2>
            <p className="problem-paragraph">
              Healthcare today is disconnected and inefficient. Patients struggle to understand symptoms,
              access the right care, and manage their medical records. Doctors spend valuable time on
              documentation instead of treatment. Critical health data exists—but it is scattered,
              unstructured, and underutilized.
            </p>
          </motion.div>

          <motion.div
            className="problem-impact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {impactPoints.map((point, i) => (
              <motion.div
                key={i}
                className="impact-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <span className="impact-icon">{point.icon}</span>
                <span className="impact-text">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
