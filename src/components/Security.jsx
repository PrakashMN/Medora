import { Lock, KeyRound, ShieldCheck, FileSearch } from 'lucide-react';
import { motion } from 'framer-motion';
import './Security.css';

const points = [
  {
    icon: <Lock size={24} strokeWidth={1.5} />,
    text: "End-to-end encryption"
  },
  {
    icon: <KeyRound size={24} strokeWidth={1.5} />,
    text: "Role-based access control"
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.5} />,
    text: "Compliance-ready architecture (HIPAA / DPDP)"
  },
  {
    icon: <FileSearch size={24} strokeWidth={1.5} />,
    text: "Secure and auditable systems"
  }
];

const Security = () => {
  return (
    <section className="security-section section-padding section-shell section-shell-cool" id="security">
      <div className="container">
        <div className="security-layout">
          <motion.div
            className="security-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="security-headline">Built with Privacy and Trust at the Core</h2>
            <p className="security-body">
              We follow strict data protection and security standards to ensure patient data is always safe.
            </p>
          </motion.div>

          <motion.div
            className="security-points"
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
                className="security-point"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
                }}
              >
                <span className="security-point-icon">{point.icon}</span>
                <span className="security-point-text">{point.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Security;
