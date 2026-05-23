import { ArrowLeft, Stethoscope, User, Building2, Share2, BarChart3, Activity, HeartPulse, BrainCircuit, FileText, Mic, CalendarCheck, Timer } from 'lucide-react';
import { motion } from 'framer-motion';
import './SolutionsPage.css';

const patientActions = [
  "Understand symptoms through AI-driven guidance",
  "Receive personalized health insights",
  "Book consultations with relevant specialists",
  "Access and manage medical records",
  "View reports, prescriptions, and history",
  "Order medicines and book lab tests"
];

const patientBenefits = [
  "Faster access to the right care",
  "Better understanding of health conditions",
  "No need to carry physical records",
  "Continuous and connected care experience"
];

const doctorActions = [
  "Access complete patient history instantly",
  "Generate structured reports from conversations",
  "Write and manage digital prescriptions",
  "Track patient progress and follow-ups",
  "Review reports and insights in one dashboard"
];

const doctorBenefits = [
  "Reduced documentation time",
  "Improved clinical decision-making",
  "Better patient context and continuity",
  "Increased efficiency in daily workflow"
];

const hospitalActions = [
  "Implement a unified EHR system",
  "Connect patients, doctors, labs, and pharmacies",
  "Automate workflows and administrative tasks",
  "Monitor operations through real-time dashboards",
  "Manage appointments, billing, and records centrally"
];

const hospitalBenefits = [
  "Streamlined operations and reduced inefficiencies",
  "Improved patient flow and service delivery",
  "Centralized and secure data management",
  "Increased revenue through optimized workflows"
];

const crossPlatformPoints = [
  "Shared data across all modules",
  "Real-time synchronization",
  "Continuous care journey for patients",
  "Better collaboration across healthcare providers"
];

const impactMetrics = [
  "Up to 30% increase in operational efficiency",
  "Reduced administrative workload",
  "Faster patient processing and throughput",
  "Higher revenue generation through improved capacity utilization"
];

const useCases = [
  {
    icon: <Activity size={28} strokeWidth={1.5} />,
    title: "High-Volume Clinics",
    desc: "Handle more patients efficiently without increasing workload"
  },
  {
    icon: <HeartPulse size={28} strokeWidth={1.5} />,
    title: "Chronic Care Management",
    desc: "Maintain complete patient history for long-term treatment continuity"
  },
  {
    icon: <Mic size={28} strokeWidth={1.5} />,
    title: "Teleconsultation & Follow-Ups",
    desc: "Enable accurate remote care with full access to patient data"
  }
];

const SolutionsPage = ({ onBack }) => {
  return (
    <div className="solutions-page">
      {/* Navbar */}
      <nav className="solutions-nav">
        <div className="container solutions-nav-container">
          <button className="solutions-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
          <div className="solutions-nav-links">
            <a href="#solutions-overview">Overview</a>
            <a href="#solutions-patients">Patients</a>
            <a href="#solutions-doctors">Doctors</a>
            <a href="#solutions-hospitals">Hospitals</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="solutions-hero" id="solutions-hero">
        <div className="container">
          <motion.div
            className="solutions-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="solutions-hero-title">Solutions Built for the Entire Healthcare Ecosystem</h1>
            <p className="solutions-hero-sub">
              ayeeni healthtech delivers intelligent, connected solutions for patients, doctors, and
              healthcare providers&mdash;transforming how care is accessed, delivered, and managed.
            </p>
            <div className="solutions-hero-actions">
              <a href="#solutions-overview" className="btn btn-primary">Request Demo</a>
              <a href="#solutions-patients" className="btn btn-outline">Explore Platform</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding section-shell section-shell-slate" id="solutions-overview">
        <div className="container">
          <motion.div
            className="solutions-overview-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">One Platform. Multiple Stakeholders. Unified Impact.</h2>
            <p className="solutions-body-text">
              Healthcare involves multiple participants&mdash;but most systems treat them separately.
              ayeeni healthtech brings everyone onto a single platform, enabling seamless interaction,
              better decision-making, and efficient workflows across the entire ecosystem.
            </p>
            <div className="solutions-keyline">
              <span className="solutions-keyline-dot" aria-hidden="true"></span>
              Every stakeholder connected. Every interaction optimized.
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Patients */}
      <section className="section-padding section-shell section-shell-cool" id="solutions-patients">
        <div className="container">
          <div className="solutions-stakeholder-layout">
            <motion.div
              className="solutions-stakeholder-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="solutions-stakeholder-icon patients-icon">
                <User size={32} strokeWidth={1.5} />
              </div>
              <h2 className="solutions-section-title">Smarter Healthcare, Made Simple</h2>
              <p className="solutions-body-text">
                ayeeni healthtech empowers patients with the tools and insights they need to
                understand their health, access the right care, and manage their entire medical
                journey in one place.
              </p>

              <h4 className="solutions-subheading">What Patients Can Do</h4>
              <ul className="solutions-list">
                {patientActions.map((item, i) => (
                  <li key={i} className="solutions-list-item">{item}</li>
                ))}
              </ul>

              <h4 className="solutions-subheading">Benefits</h4>
              <div className="solutions-benefits-grid">
                {patientBenefits.map((item, i) => (
                  <div key={i} className="solutions-benefit-card">
                    <span className="benefit-check">
                      <CalendarCheck size={16} strokeWidth={2} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="solutions-stakeholder-visual"
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="solutions-visual-box">
                <User size={64} strokeWidth={1} className="visual-main-icon" />
                <div className="visual-dots">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="visual-dot" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Doctors */}
      <section className="section-padding section-shell section-shell-slate" id="solutions-doctors">
        <div className="container">
          <div className="solutions-stakeholder-layout reverse">
            <motion.div
              className="solutions-stakeholder-visual"
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="solutions-visual-box">
                <Stethoscope size={64} strokeWidth={1} className="visual-main-icon" />
                <div className="visual-dots">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="visual-dot" />
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              className="solutions-stakeholder-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="solutions-stakeholder-icon doctors-icon">
                <Stethoscope size={32} strokeWidth={1.5} />
              </div>
              <h2 className="solutions-section-title">Focus on Patients, Not Paperwork</h2>
              <p className="solutions-body-text">
                ayeeni healthtech reduces the administrative burden on doctors by automating
                documentation and providing structured patient insights&mdash;allowing them to
                focus on delivering better care.
              </p>

              <h4 className="solutions-subheading">What Doctors Can Do</h4>
              <ul className="solutions-list">
                {doctorActions.map((item, i) => (
                  <li key={i} className="solutions-list-item">{item}</li>
                ))}
              </ul>

              <h4 className="solutions-subheading">Benefits</h4>
              <div className="solutions-benefits-grid">
                {doctorBenefits.map((item, i) => (
                  <div key={i} className="solutions-benefit-card">
                    <span className="benefit-check">
                      <CalendarCheck size={16} strokeWidth={2} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Hospitals & Clinics */}
      <section className="section-padding section-shell section-shell-cool" id="solutions-hospitals">
        <div className="container">
          <div className="solutions-stakeholder-layout">
            <motion.div
              className="solutions-stakeholder-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="solutions-stakeholder-icon hospitals-icon">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h2 className="solutions-section-title">Transform Operations with Intelligent Systems</h2>
              <p className="solutions-body-text">
                ayeeni healthtech acts as a digital infrastructure layer for hospitals, enabling
                seamless coordination across departments, improved data management, and optimized
                operational workflows.
              </p>

              <h4 className="solutions-subheading">What Hospitals Can Do</h4>
              <ul className="solutions-list">
                {hospitalActions.map((item, i) => (
                  <li key={i} className="solutions-list-item">{item}</li>
                ))}
              </ul>

              <h4 className="solutions-subheading">Benefits</h4>
              <div className="solutions-benefits-grid">
                {hospitalBenefits.map((item, i) => (
                  <div key={i} className="solutions-benefit-card">
                    <span className="benefit-check">
                      <CalendarCheck size={16} strokeWidth={2} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="solutions-stakeholder-visual"
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="solutions-visual-box">
                <Building2 size={64} strokeWidth={1} className="visual-main-icon" />
                <div className="visual-dots">
                  {[...Array(12)].map((_, i) => (
                    <span key={i} className="visual-dot" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross-Platform Advantage */}
      <section className="section-padding section-shell section-shell-slate" id="solutions-cross-platform">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">More Than Individual Solutions&mdash;A Connected Ecosystem</h2>
            <p className="solutions-body-text center max-w-680">
              What makes ayeeni healthtech unique is not just what it offers to each stakeholder,
              but how it connects them all. Every interaction&mdash;whether it&rsquo;s a symptom input,
              consultation, or report upload&mdash;is part of a unified system that continuously learns
              and improves.
            </p>
          </motion.div>
          <motion.div
            className="solutions-cross-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {crossPlatformPoints.map((point, i) => (
              <motion.div
                key={i}
                className="solutions-cross-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                }}
              >
                <span className="cross-card-icon">
                  <Share2 size={20} strokeWidth={1.5} />
                </span>
                {point}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operational Impact */}
      <section className="section-padding section-shell section-shell-cool" id="solutions-impact">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">Driving Efficiency Across the System</h2>
            <p className="solutions-body-text center max-w-680">
              By automating workflows, reducing manual tasks, and improving coordination,
              ayeeni healthtech delivers measurable operational improvements.
            </p>
          </motion.div>
          <div className="solutions-metrics-grid">
            {impactMetrics.map((metric, i) => (
              <motion.div
                key={i}
                className="solutions-metric-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="metric-icon">
                  <BarChart3 size={20} strokeWidth={1.5} />
                </span>
                {metric}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="section-padding section-shell section-shell-slate" id="solutions-use-cases">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">Designed for Real Healthcare Scenarios</h2>
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

      {/* Why Medora */}
      <section className="section-padding section-shell section-shell-cool" id="solutions-why">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-section-title">A Foundation for the Future of Healthcare</h2>
            <p className="solutions-body-text center max-w-680">
              ayeeni healthtech is not just a solution&mdash;it is a scalable infrastructure designed
              to evolve with healthcare needs. By combining AI, real-world workflows, and connected
              systems, it creates a platform that becomes more powerful with every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="solutions-final-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solutions-cta-title">Ready to Transform Healthcare Delivery?</h2>
            <p className="solutions-cta-sub">
              Join MEDORA and experience a smarter, faster, and more connected healthcare system.
            </p>
            <div className="solutions-hero-actions">
              <a href="#!" className="btn btn-primary">Book a Demo</a>
              <a href="#!" className="btn btn-outline">Get Started</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="solutions-footer-cta">
        <div className="container">
          <p>Looking to partner with us? <a href="#contact">Contact Us</a></p>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
