import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import './Taglines.css';

const taglines = [
  "One Patient. One System. One Continuous Care Journey.",
  "From Symptoms to Solutions—Instantly.",
  "Healthcare, Connected by Intelligence."
];

const Taglines = () => {
  return (
    <section className="taglines-section section-padding section-shell section-shell-slate">
      <div className="container">
        <motion.div
          className="taglines-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="taglines-icon-wrap">
            <Sparkles size={24} strokeWidth={1.5} />
          </div>
          <div className="taglines-track">
            {taglines.map((line, i) => (
              <motion.span
                key={i}
                className="tagline-pill"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {line}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Taglines;
