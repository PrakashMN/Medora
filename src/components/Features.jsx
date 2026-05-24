import { Stethoscope, FileText, Mic, FolderOpen, Building2, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import './Features.css';

const features = [
  {
    icon: <Stethoscope size={28} strokeWidth={1.5} />,
    title: "AI Symptom Intelligence",
    desc: "Get health insights through structured, adaptive questioning."
  },
  {
    icon: <FileText size={28} strokeWidth={1.5} />,
    title: "Medical Data Understanding",
    desc: "Interpret prescriptions, lab reports, and imaging instantly."
  },
  {
    icon: <Mic size={28} strokeWidth={1.5} />,
    title: "Clinical Documentation Automation",
    desc: "Convert doctor–patient conversations into structured reports."
  },
  {
    icon: <FolderOpen size={28} strokeWidth={1.5} />,
    title: "Unified Health Records (EHR)",
    desc: "Access complete patient history across all interactions."
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "Healthcare Marketplace",
    desc: "Book doctors, labs, and services in one place."
  },
  {
    icon: <LayoutDashboard size={28} strokeWidth={1.5} />,
    title: "Smart Patient Dashboard",
    desc: "Track appointments, reports, medications, and health insights."
  }
];

const Features = () => {
  return (
    <section className="features-section pt-24 pb-24 section-shell-cool">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Everything You Need. In One Platform.</h2>
        </motion.div>

        <motion.div
          className="features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="feature-card group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
