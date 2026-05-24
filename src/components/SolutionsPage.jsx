import { ArrowLeft, Bot, Database, Smartphone, BrainCircuit, FileText, Mic, FolderOpen, Building2, BarChart3, MessageSquareText, Pill, Activity, HeartPulse, Stethoscope, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './SolutionsPage.css';

const productStack = [
  {
    icon: <MessageSquareText size={28} strokeWidth={1.5} />,
    title: "ayeeni TriageBot",
    tagline: "Healthcare access as simple as a message",
    desc: "The WhatsApp Bot acts as the first point of contact, allowing patients to describe symptoms in natural language. It intelligently analyzes inputs, suggests relevant departments, and connects users to the right care instantly.",
    highlights: [
      "AI-based symptom analysis",
      "Department & doctor recommendations",
      "Lab tests & medicine access",
      "Instant, conversational interaction"
    ]
  },
  {
    icon: <Database size={28} strokeWidth={1.5} />,
    title: "ayeeni EHR Core",
    tagline: "The backbone of healthcare intelligence",
    desc: "The EHR system connects patients, doctors, staff, labs, and pharmacies into one unified platform, ensuring real-time synchronization and complete patient visibility.",
    highlights: [
      "Patient, doctor, staff dashboards",
      "Unified medical records",
      "Workflow automation",
      "Real-time data synchronization"
    ]
  },
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: "ayeeni Patient App",
    tagline: "Your complete healthcare companion",
    desc: "The ayeeni Patient App empowers patients with a personalized dashboard to manage their entire health journey—from appointments to reports, medicines, and preventive care.",
    highlights: [
      "Appointment & consultation management",
      "Report access & lab bookings",
      "Medicine ordering & tracking",
      "Health insights & reminders"
    ]
  }
];

const capabilities = [
  {
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    title: "AI Symptom Intelligence",
    desc: "ayeeni healthtech uses a structured, clinically inspired questioning approach to understand patient symptoms in depth. By mimicking real clinical reasoning, the system identifies potential conditions early and guides users toward the right care pathway.",
    enables: [
      "Faster preliminary understanding of health conditions",
      "Reduced unnecessary consultations",
      "Early detection and better triage"
    ]
  },
  {
    icon: <FileText size={28} strokeWidth={1.5} />,
    title: "Medical Data Understanding",
    desc: "Our system processes and structures complex medical data—including prescriptions, lab reports, and diagnostic imaging—into clear, usable insights.",
    enables: [
      "Eliminates manual interpretation effort",
      "Converts unstructured data into actionable information",
      "Improves accuracy and reduces errors in understanding reports"
    ]
  },
  {
    icon: <Mic size={28} strokeWidth={1.5} />,
    title: "Clinical Documentation Automation",
    desc: "ayeeni healthtech captures doctor–patient conversations and converts them into structured clinical reports in real time, significantly reducing administrative workload.",
    enables: [
      "Faster and more accurate documentation",
      "Reduced doctor burnout",
      "Standardized, audit-ready clinical records"
    ]
  },
  {
    icon: <FolderOpen size={28} strokeWidth={1.5} />,
    title: "Unified Health Records (EHR Backbone)",
    desc: "All patient data—symptoms, consultations, prescriptions, reports, and follow-ups—is stored and connected in a single unified system.",
    enables: [
      "Complete patient history at one place",
      "Seamless continuity of care across visits",
      "Better clinical decision-making"
    ]
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "Integrated Healthcare Marketplace",
    desc: "ayeeni healthtech connects patients directly to doctors, labs, pharmacies, and healthcare services within one platform.",
    enables: [
      "Faster access to healthcare services",
      "Increased service utilization for providers",
      "End-to-end patient journey within a single ecosystem"
    ]
  },
  {
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    title: "Operational Intelligence & Efficiency",
    desc: "By automating workflows, reducing manual tasks, and optimizing patient flow, ayeeni healthtech significantly improves operational efficiency across clinics and hospitals.",
    enables: [
      "Up to 30% increase in operational efficiency",
      "Reduced administrative workload for healthcare providers",
      "Faster patient handling and improved throughput",
      "Higher revenue generation through increased patient capacity and optimized workflows"
    ]
  }
];

const connectSteps = [
  "Patient enters via app or WhatsApp",
  "AI analyzes symptoms and medical data",
  "System recommends doctors and tests",
  "Consultation and treatment recorded in EHR",
  "Labs, pharmacy, and follow-ups integrated"
];

const useCases = [
  {
    icon: <Activity size={28} strokeWidth={1.5} />,
    title: "High-Volume OPD Doctors",
    desc: "Access patient history instantly and manage consultations efficiently without increasing workload."
  },
  {
    icon: <HeartPulse size={28} strokeWidth={1.5} />,
    title: "Chronic Disease Management",
    desc: "Track patient history over time, ensuring consistent and accurate treatment."
  },
  {
    icon: <Mic size={28} strokeWidth={1.5} />,
    title: "Teleconsultations",
    desc: "Enable seamless follow-ups with complete access to previous prescriptions and reports."
  }
];

const benefits = [
  {
    icon: <User size={28} strokeWidth={1.5} />,
    title: "For Patients",
    points: ["Faster access to care", "Better understanding of health", "Unified medical records"]
  },
  {
    icon: <Stethoscope size={28} strokeWidth={1.5} />,
    title: "For Doctors",
    points: ["Reduced documentation burden", "Better patient context", "Improved decision-making"]
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "For Hospitals",
    points: ["Streamlined workflows", "Improved efficiency", "Centralized data management"]
  }
];

const SolutionsPage = ({ onBack }) => {
  return (
    <div className="solutions-page">
      <nav className="solutions-nav">
        <div className="container solutions-nav-container">
          <button className="solutions-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
          <div className="solutions-nav-links">
            <a href="#product-overview">Overview</a>
            <a href="#product-stack">Products</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#use-cases">Use Cases</a>
          </div>
        </div>
      </nav>

      <section className="solutions-hero" id="product-hero">
        <div className="container">
          <motion.div
            className="solutions-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="solutions-hero-title">One Platform. Complete Healthcare Intelligence.</h1>
            <p className="solutions-hero-sub">
              ayeeni healthtech is a unified AI-powered ecosystem that connects patients, doctors, and
              healthcare services&mdash;transforming how care is delivered, managed, and experienced.
            </p>
            <div className="solutions-hero-actions">
              <a href="#join-wishlist" className="btn btn-primary">Request Demo</a>
              <a href="#capabilities" className="btn btn-outline">Explore Features</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate" id="product-overview">
        <div className="container">
          <motion.div
            className="solutions-overview-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">A Unified Healthcare Ecosystem</h2>
            <p className="solutions-body-text">
              ayeeni healthtech brings together every layer of healthcare into one intelligent
              system&mdash;combining AI-driven insights, clinical workflows, and digital infrastructure.
              From patient interaction to doctor decision-making and hospital operations, everything
              is seamlessly connected.
            </p>
            <div className="solutions-keyline">
              <span className="solutions-keyline-dot" aria-hidden="true"></span>
              No more fragmented tools. One system that does it all.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool" id="product-stack">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">Built as an Integrated System</h2>
          </motion.div>
          <div className="stack-grid">
            {productStack.map((product, i) => (
              <motion.div
                key={i}
                className="stack-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="stack-icon">{product.icon}</div>
                <h3 className="stack-title">{product.title}</h3>
                <p className="stack-tagline">{product.tagline}</p>
                <p className="stack-desc">{product.desc}</p>
                <ul className="stack-list">
                  {product.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate" id="capabilities">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">Key Capabilities</h2>
          </motion.div>
          <div className="capabilities-grid">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                className="capability-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="capability-icon">{cap.icon}</div>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-desc">{cap.desc}</p>
                <p className="capability-enables-label">What it enables:</p>
                <ul className="capability-list">
                  {cap.enables.map((e, j) => (
                    <li key={j}>{e}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool" id="how-it-connects">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">A Seamless Healthcare Journey</h2>
          </motion.div>
          <div className="connect-flow">
            {connectSteps.map((step, i) => (
              <motion.div
                key={i}
                className="connect-step"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <span className="connect-step-num">{i + 1}</span>
                <span className="connect-step-text">{step}</span>
                {i < connectSteps.length - 1 && <span className="connect-arrow">&rarr;</span>}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="connect-closing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Every interaction is connected. Every decision is informed.
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate" id="use-cases">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">Designed for Real-World Healthcare</h2>
          </motion.div>
          <motion.div
            className="solutions-use-cases-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                className="solutions-use-case-card"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <div className="use-case-icon">{uc.icon}</div>
                <h3 className="use-case-title">{uc.title}</h3>
                <p className="use-case-desc">{uc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool" id="benefits">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">What MEDORA Delivers</h2>
          </motion.div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="benefit-group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="benefit-group-icon">{b.icon}</div>
                <h3 className="benefit-group-title">{b.title}</h3>
                <ul className="benefit-group-list">
                  {b.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate" id="solutions-why">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">More Than a Product&mdash;A Healthcare Infrastructure</h2>
            <p className="solutions-body-text center max-w-680">
              ayeeni healthtech is not built as a single solution&mdash;it is designed as a
              foundational intelligence layer that powers the entire healthcare ecosystem. By combining
              AI, workflows, and real-world data, it creates a system that continuously improves and
              scales with usage.
            </p>
            <div className="solutions-keyline" style={{ justifyContent: 'center' }}>
              <Sparkles size={18} strokeWidth={1.5} />
              MEDORA doesn&rsquo;t just digitize healthcare&mdash;it transforms how it operates,
              making systems faster, smarter, and more profitable.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div
            className="solutions-final-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-cta-title">Experience the Future of Healthcare</h2>
            <p className="solutions-cta-sub">
              See how ayeeni healthtech can transform your healthcare operations and patient experience.
            </p>
            <div style={{ textAlign: 'center' }}>
              <a href="#join-wishlist" className="btn btn-primary">Book a Demo</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="solutions-footer-cta">
        <div className="container">
          <p>Have questions? Let&rsquo;s talk. <a href="#contact">Contact Us</a></p>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
