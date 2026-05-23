import { motion } from 'framer-motion';
import './Traction.css';

const metrics = [
  {
    value: "96–98%",
    label: "Diagnostic accuracy",
    sub: "Validated by physicians"
  },
  {
    value: "Pilot",
    label: "Deployments in hospitals",
    sub: "Real-world clinical settings"
  },
  {
    value: "Live",
    label: "Clinical workflow integration",
    sub: "Active in production environments"
  }
];

const Traction = () => {
  return (
    <section className="traction-section section-padding section-shell section-shell-slate" id="traction">
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Built. Tested. Validated.</h2>
          <p className="traction-subtitle">
            ayeeni healthtech is actively being tested in real clinical environments with strong early results.
          </p>
        </motion.div>

        <motion.div
          className="traction-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="traction-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="traction-value">{m.value}</div>
              <div className="traction-label">{m.label}</div>
              <div className="traction-sub">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Traction;
