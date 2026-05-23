import { motion } from 'framer-motion';
import './TeamPreview.css';

const TeamPreview = () => {
  return (
    <section className="team-section section-padding section-shell section-shell-cool" id="team">
      <div className="container">
        <motion.div
          className="team-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="team-headline">Built by a Deeptech-Driven Team</h2>
          <p className="team-body">
            A multidisciplinary team combining AI, healthcare, and system engineering expertise
            to solve one of the world's most complex problems.
          </p>
          <a href="#team" className="btn btn-outline team-btn">Meet the Team</a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
