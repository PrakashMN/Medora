import { ArrowLeft, Target, Lightbulb, Rocket, HeartHandshake, Code, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './CareerPage.css';

const openRoles = [
  {
    title: "Full-Stack Developer",
    type: "Full-time · Remote",
    desc: "Build and maintain the MEDORA platform across the stack. Work on React frontends, Node.js backends, and AI integration layers."
  },
  {
    title: "AI/ML Engineer",
    type: "Full-time · Remote",
    desc: "Develop and deploy multimodal AI models for medical triage, diagnostics, and report generation. Experience with LLMs and computer vision preferred."
  },
  {
    title: "Product Designer",
    type: "Full-time · Remote",
    desc: "Own the end-to-end design of healthcare interfaces. Create intuitive, accessible, and beautiful experiences for patients and doctors."
  },
  {
    title: "Healthcare Operations Lead",
    type: "Full-time · Remote",
    desc: "Bridge the gap between technology and clinical practice. Manage pilot deployments, gather feedback, and ensure regulatory alignment."
  }
];

const values = [
  { icon: <Target size={24} strokeWidth={1.5} />, title: "Mission-Driven", text: "Every line of code we write is aimed at solving real healthcare problems." },
  { icon: <Rocket size={24} strokeWidth={1.5} />, title: "Speed & Execution", text: "We move fast, iterate constantly, and ship what matters." },
  { icon: <Lightbulb size={24} strokeWidth={1.5} />, title: "Deep Curiosity", text: "We explore新兴 technologies and push the boundaries of what's possible." },
  { icon: <HeartHandshake size={24} strokeWidth={1.5} />, title: "Ownership & Empathy", text: "Everyone owns their domain and cares deeply about the people we serve." }
];

const CareerPage = ({ onBack }) => {
  return (
    <div className="career-page">
      <nav className="career-nav">
        <div className="container career-nav-container">
          <button className="career-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
        </div>
      </nav>

      <section className="career-hero">
        <div className="container">
          <motion.div
            className="career-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="career-hero-title">Join Us in Building the Future of Healthcare</h1>
            <p className="career-hero-sub">
              We're a small, ambitious team building AI-powered healthcare infrastructure for the
              next decade. If you want to work on hard problems that matter, you'll fit right in.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="career-section-title">Why Work With Us</h2>
            <p className="career-body-text center max-w-680">
              We're not just building a product&mdash;we're building a healthcare intelligence
              system from the ground up. Here's what to expect when you join ayeeni healthtech.
            </p>
          </motion.div>
          <div className="career-values-grid">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="career-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="career-value-icon">{v.icon}</span>
                <h3 className="career-value-title">{v.title}</h3>
                <p className="career-value-text">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <motion.div
            className="text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="career-section-title">Open Roles</h2>
            <p className="career-body-text center max-w-680">
              We're looking for passionate people to help us scale. If you don't see a role that
              fits, reach out anyway&mdash;we're always open to talking to great people.
            </p>
          </motion.div>
          <div className="career-roles-grid">
            {openRoles.map((role, i) => (
              <motion.div
                key={i}
                className="career-role-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="career-role-title">{role.title}</h3>
                <div className="career-role-type">{role.type}</div>
                <p className="career-role-desc">{role.desc}</p>
                <a href="#contact" className="career-role-apply">Apply Now →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="career-section-title">How We Hire</h2>
            <p className="career-body-text center max-w-680">
              Our hiring process is straightforward and respectful of your time. We focus on
              understanding how you think, not quizzing you on trivia.
            </p>
          </motion.div>
          <div className="career-process-steps">
            <div className="career-process-step">
              <span className="career-process-num">01</span>
              <h3 className="career-process-title">Apply</h3>
              <p className="career-process-desc">Send us your resume and a brief note on why you're interested.</p>
            </div>
            <div className="career-process-step">
              <span className="career-process-num">02</span>
              <h3 className="career-process-title">Chat</h3>
              <p className="career-process-desc">A 30-minute conversation about your experience and interests.</p>
            </div>
            <div className="career-process-step">
              <span className="career-process-num">03</span>
              <h3 className="career-process-title">Deep Dive</h3>
              <p className="career-process-desc">A practical session focused on how you approach problems.</p>
            </div>
            <div className="career-process-step">
              <span className="career-process-num">04</span>
              <h3 className="career-process-title">Join</h3>
              <p className="career-process-desc">Meet the team, align on expectations, and get started.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="career-section-title">Don't See a Role?</h2>
            <p className="career-body-text center max-w-680">
              We're always interested in connecting with talented people. Send us your resume and
              tell us what you'd like to work on.
            </p>
            <div className="career-cta-actions" style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="career-footer-cta">
        <div className="container">
          <p>Questions? <a href="#contact">Reach out to us</a></p>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
