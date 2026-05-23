import { motion } from 'framer-motion';
import './Vision.css';

const Vision = () => {
  return (
    <section className="vision-section section-padding section-shell section-shell-slate" id="vision">
      <div className="container">
        <motion.div
          className="vision-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="vision-headline">
            The Future of Healthcare is <span className="text-primary">Intelligent, Connected, and Proactive</span>
          </h2>
          <p className="vision-body">
            Our vision is to build the intelligence layer for healthcare&mdash;where every patient interaction,
            medical record, and clinical decision is seamlessly connected and continuously improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
