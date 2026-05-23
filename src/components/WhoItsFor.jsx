import { User, Stethoscope, Hospital } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhoItsFor.css';

const audiences = [
  {
    icon: <User size={32} strokeWidth={1.5} />,
    title: "For Patients",
    desc: "Understand your health, access the right care, and manage everything in one place."
  },
  {
    icon: <Stethoscope size={32} strokeWidth={1.5} />,
    title: "For Doctors",
    desc: "Reduce documentation burden and gain structured patient insights."
  },
  {
    icon: <Hospital size={32} strokeWidth={1.5} />,
    title: "For Hospitals",
    desc: "Streamline workflows, unify data, and improve operational efficiency."
  }
];

const WhoItsFor = () => {
  return (
    <section className="who-section section-padding section-shell section-shell-slate" id="who-its-for">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Built for the Entire Healthcare Ecosystem</h2>
        </motion.div>

        <motion.div
          className="who-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {audiences.map((item, i) => (
            <motion.div
              key={i}
              className="who-card"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <div className="who-icon">{item.icon}</div>
              <h3 className="who-card-title">{item.title}</h3>
              <p className="who-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoItsFor;
