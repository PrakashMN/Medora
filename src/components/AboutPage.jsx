import { ArrowLeft, Target, Eye, Lightbulb, BrainCircuit, Activity, Shield, Rocket, HeartHandshake, Users, Lock, Sparkles, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutPage.css';

const differentiators = [
  "Multimodal AI (text, speech, imaging)",
  "Unified healthcare ecosystem",
  "Continuous learning through real-world data",
  "Deep integration into clinical workflows",
  "Designed for scalability and real-world adoption"
];

const impactAreas = [
  { icon: <Activity size={24} strokeWidth={1.5} />, text: "Improved access to healthcare" },
  { icon: <Users size={24} strokeWidth={1.5} />, text: "Reduced administrative burden on doctors" },
  { icon: <HeartHandshake size={24} strokeWidth={1.5} />, text: "Better patient outcomes through early insights" },
  { icon: <Rocket size={24} strokeWidth={1.5} />, text: "Reduced inefficiencies and costs" }
];

const values = [
  { icon: <HeartHandshake size={24} strokeWidth={1.5} />, title: "Patient-Centricity", desc: "Every decision we make is focused on improving patient outcomes" },
  { icon: <Shield size={24} strokeWidth={1.5} />, title: "Trust & Privacy", desc: "We prioritize data security and ethical AI practices" },
  { icon: <Lightbulb size={24} strokeWidth={1.5} />, title: "Innovation with Purpose", desc: "We build technology that solves real problems" },
  { icon: <Rocket size={24} strokeWidth={1.5} />, title: "Execution & Impact", desc: "We focus on real-world deployment, not just ideas" }
];

const AboutPage = ({ onBack }) => {
  return (
    <div className="about-page">
      <nav className="about-nav">
        <div className="container about-nav-container">
          <button className="about-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="about-hero-title">Reimagining Healthcare Through Intelligence</h1>
            <p className="about-hero-sub">
              We are building the intelligence layer that connects patients, doctors, and medical
              data into one continuous, intelligent healthcare system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <div className="about-story-layout">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-section-title">Why ayeeni healthtech Exists</h2>
              <p className="about-body-text">
                Healthcare today is fragmented, reactive, and difficult to navigate. Patients
                struggle to understand their symptoms, access the right care, and maintain their
                medical history. Doctors are burdened with documentation, and critical health data
                remains scattered across disconnected systems.
              </p>
              <p className="about-body-text about-emphasis">
                We started ayeeni healthtech with a simple belief:<br />
                Healthcare should be connected, intelligent, and accessible to everyone.
              </p>
              <p className="about-body-text">
                What began as an effort to simplify patient access has evolved into building a
                unified healthcare intelligence system&mdash;one that understands, learns, and
                improves with every interaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem We Are Solving */}
      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <div className="about-two-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-section-title">A System That Doesn&rsquo;t Work Together</h2>
              <p className="about-body-text">
                Despite advances in medical infrastructure, healthcare systems remain disconnected.
              </p>
              <ul className="about-list">
                <li>Patients lack reliable health knowledge and guidance</li>
                <li>Medical records are scattered and difficult to access</li>
                <li>Doctors spend significant time on manual processes</li>
                <li>Care continuity is often lost between visits</li>
              </ul>
              <p className="about-body-text about-result">
                The result is delayed diagnosis, inefficiencies, and poor patient experiences.
              </p>
            </motion.div>
            <motion.div
              className="about-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Target size={80} strokeWidth={1} className="about-icon-main" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <div className="about-two-col reverse">
            <motion.div
              className="about-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles size={80} strokeWidth={1} className="about-icon-main" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-section-title">One Patient. One System. Continuous Care.</h2>
              <p className="about-body-text">
                ayeeni healthtech is a unified AI-powered healthcare ecosystem that connects every
                part of the care journey&mdash;from symptom understanding to diagnosis, treatment,
                and follow-up.
              </p>
              <p className="about-body-text">
                By integrating AI, clinical workflows, and digital infrastructure, we transform
                fragmented healthcare interactions into a seamless, data-driven experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <div className="about-two-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-section-title">The Intelligence Layer for Healthcare</h2>
              <p className="about-body-text">
                We envision a future where healthcare is no longer reactive, but proactive and intelligent.
              </p>
              <p className="about-body-text">A system where:</p>
              <ul className="about-list">
                <li>Every patient has a unified health identity</li>
                <li>Every doctor has complete patient context</li>
                <li>Every decision is supported by real-time insights</li>
              </ul>
              <p className="about-body-text">
                Our goal is to build a global healthcare intelligence network that makes care more
                predictive, personalized, and accessible.
              </p>
            </motion.div>
            <motion.div
              className="about-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Eye size={80} strokeWidth={1} className="about-icon-main" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <div className="about-two-col reverse">
            <motion.div
              className="about-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Target size={80} strokeWidth={1} className="about-icon-main" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-section-title">Making Healthcare Smarter, Faster, and Accessible</h2>
              <p className="about-body-text">
                Our mission is to reduce the gap between patients and quality healthcare by building
                technology that simplifies access, improves efficiency, and enhances clinical
                decision-making.
              </p>
              <p className="about-body-text">We aim to:</p>
              <ul className="about-list">
                <li>Empower patients with better health understanding</li>
                <li>Support doctors with intelligent tools</li>
                <li>Enable healthcare systems to operate more efficiently</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-section-title">Not Just Another Healthcare Platform</h2>
            <p className="about-body-text center max-w-680">
              ayeeni healthtech is built as a foundational system&mdash;not a feature.
            </p>
          </motion.div>
          <div className="about-diff-grid">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                className="about-diff-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="about-diff-dot" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-section-title">Building for Real-World Impact</h2>
            <p className="about-body-text center max-w-680">
              MEDORA is designed to create meaningful impact across healthcare systems, especially
              in underserved and semi-urban regions.
            </p>
          </motion.div>
          <div className="about-impact-grid">
            {impactAreas.map((area, i) => (
              <motion.div
                key={i}
                className="about-impact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="about-impact-icon">{area.icon}</span>
                <span className="about-impact-text">{area.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction & Progress */}
      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <div className="about-two-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="about-section-title">From Idea to Real-World Deployment</h2>
              <p className="about-body-text">
                ayeeni healthtech is actively being developed and validated in real clinical
                environments.
              </p>
              <ul className="about-list">
                <li>Pilot deployments with hospitals</li>
                <li>AI models validated by healthcare professionals</li>
                <li>Continuous product development and testing</li>
              </ul>
            </motion.div>
            <motion.div
              className="about-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RefreshCw size={80} strokeWidth={1} className="about-icon-main" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-section-title">What We Stand For</h2>
          </motion.div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="about-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="about-value-icon">{v.icon}</div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="about-final-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="about-cta-title">Join Us in Building the Future of Healthcare</h2>
            <p className="about-cta-sub">
              Be part of a mission to make healthcare more connected, intelligent, and accessible
              for everyone.
            </p>
            <div className="about-cta-actions">
              <a href="#join-wishlist" className="btn btn-primary">Get Started</a>
              <a href="#contact" className="btn btn-outline">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="about-footer-cta">
        <div className="container">
          <p>Have questions or want to collaborate? <a href="#contact">Reach Out</a></p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
