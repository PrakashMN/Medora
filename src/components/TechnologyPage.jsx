import { ArrowLeft, Brain, MessageSquareText, Mic, Image as ImageIcon, Combine, Stethoscope, RefreshCw, BarChart3, ShieldCheck, Lock, Lightbulb, Activity, FileText, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import './TechnologyPage.css';

const intelligenceTypes = [
  {
    icon: <FileText size={28} strokeWidth={1.5} />,
    title: "Text Intelligence (NLP)",
    processes: "Symptoms, Prescriptions, Clinical notes, Lab reports",
    capabilities: ["Medical entity extraction", "Context understanding", "Structured data generation"]
  },
  {
    icon: <Mic size={28} strokeWidth={1.5} />,
    title: "Speech Intelligence",
    processes: "Doctor-patient conversations, Clinical dictation",
    capabilities: ["Speech-to-text conversion", "Clinical summarization", "Structured report generation"]
  },
  {
    icon: <ImageIcon size={28} strokeWidth={1.5} />,
    title: "Medical Imaging Intelligence",
    processes: "X-rays, CT scans, Diagnostic images",
    capabilities: ["Image interpretation", "Pattern detection", "Report assistance"]
  }
];

const techPageStrengths = [
  "Multimodal intelligence (text + speech + images)",
  "Unified patient context",
  "Real-world workflow integration",
  "Proprietary data learning loop",
  "Context-aware clinical reasoning"
];

const TechnologyPage = ({ onBack }) => {
  return (
    <div className="tech-page">
      <nav className="tech-nav">
        <div className="container tech-nav-container">
          <button className="tech-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
        </div>
      </nav>

      <section className="tech-hero">
        <div className="container">
          <motion.div
            className="tech-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="tech-hero-title">The Intelligence Behind ayeeni healthtech</h1>
            <p className="tech-hero-sub">
              A multimodal AI system that understands symptoms, medical data, and clinical
              interactions&mdash;designed to support real-world healthcare decisions.
            </p>
            <div className="tech-hero-actions">
              <a href="#tech-overview" className="btn btn-primary">Explore the Platform</a>
              <a href="#join-wishlist" className="btn btn-outline">Request Demo</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate" id="tech-overview">
        <div className="container">
          <motion.div
            className="tech-overview-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="tech-page-section-title">Built as a Healthcare Intelligence Layer</h2>
            <p className="tech-body-text">
              ayeeni healthtech is powered by a multimodal AI architecture that processes and
              connects different types of healthcare data&mdash;text, speech, and medical
              images&mdash;into a unified understanding of the patient.
            </p>
            <p className="tech-body-text">
              Unlike traditional systems that operate in silos, ayeeni healthtech brings
              together all clinical inputs into one continuous reasoning pipeline.
            </p>
            <div className="tech-keyline">
              <Sparkles size={18} strokeWidth={1.5} />
              Not just data processing&mdash;clinical understanding.
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool" id="tech-intelligence">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="tech-page-section-title">Understanding Healthcare in Every Form</h2>
            <p className="tech-body-text center max-w-680">
              Healthcare data is complex and comes in multiple formats. ayeeni healthtech is
              designed to interpret all of them seamlessly.
            </p>
          </motion.div>
          <div className="tech-intelligence-grid">
            {intelligenceTypes.map((type, i) => (
              <motion.div
                key={i}
                className="tech-intel-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="tech-intel-icon">{type.icon}</div>
                <h3 className="tech-intel-title">{type.title}</h3>
                <p className="tech-intel-processes"><strong>Processes:</strong> {type.processes}</p>
                <h4 className="tech-intel-subtitle">Capabilities</h4>
                <ul className="tech-intel-list">
                  {type.capabilities.map((cap, j) => (
                    <li key={j}>{cap}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <div className="tech-two-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="tech-section-icon-wrap"><Combine size={32} strokeWidth={1.5} /></div>
              <h2 className="tech-page-section-title">Where Everything Comes Together</h2>
              <p className="tech-body-text">
                ayeeni healthtech combines outputs from text, speech, and image models into a
                unified patient context using advanced fusion techniques.
              </p>
              <p className="tech-body-text">
                This enables the system to move beyond isolated outputs and understand the full
                clinical picture.
              </p>
              <h4 className="tech-subheading">What this means:</h4>
              <ul className="tech-list">
                <li>Symptoms + reports + conversations are connected</li>
                <li>Insights are context-aware, not fragmented</li>
                <li>Decisions are based on complete patient understanding</li>
              </ul>
            </motion.div>
            <motion.div
              className="tech-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Brain size={80} strokeWidth={1} className="tech-icon-main" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool" id="tech-reasoning">
        <div className="container">
          <div className="tech-two-col reverse">
            <motion.div
              className="tech-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stethoscope size={80} strokeWidth={1} className="tech-icon-main" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="tech-page-section-title">Designed to Think Like a Clinician</h2>
              <p className="tech-body-text">
                At the core of ayeeni healthtech is a reasoning engine that connects patient data
                with medical knowledge to generate meaningful insights.
              </p>
              <h4 className="tech-subheading">It uses:</h4>
              <ul className="tech-list">
                <li>Knowledge graphs (symptoms ↔ conditions ↔ treatments)</li>
                <li>Probabilistic reasoning models</li>
                <li>Context-aware AI models</li>
              </ul>
              <h4 className="tech-subheading">Outputs:</h4>
              <ul className="tech-list">
                <li>Possible conditions (assistive, not diagnostic)</li>
                <li>Recommended specialists</li>
                <li>Suggested next steps</li>
              </ul>
              <div className="tech-keyline">
                <Sparkles size={18} strokeWidth={1.5} />
                From data to decisions&mdash;intelligently.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <div className="tech-two-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="tech-page-section-title">A System That Gets Smarter Over Time</h2>
              <p className="tech-body-text">
                ayeeni healthtech improves continuously through real-world usage and feedback.
              </p>
              <h4 className="tech-subheading">Learning Sources:</h4>
              <ul className="tech-list">
                <li>Patient interactions</li>
                <li>Doctor inputs and corrections</li>
                <li>Clinical outcomes</li>
                <li>Report interpretations</li>
              </ul>
              <h4 className="tech-subheading">How it improves:</h4>
              <ul className="tech-list">
                <li>Continuous model retraining</li>
                <li>Feedback-driven optimization</li>
                <li>Active learning on edge cases</li>
              </ul>
              <p className="tech-body-text tech-result">
                <strong>Result:</strong> A compounding intelligence system that becomes more accurate
                and personalized over time.
              </p>
            </motion.div>
            <motion.div
              className="tech-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <RefreshCw size={80} strokeWidth={1} className="tech-icon-main" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool" id="tech-performance">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="tech-page-section-title">Built for Accuracy. Designed for Trust.</h2>
            <p className="tech-body-text center max-w-680">
              We evaluate our models using a combination of technical, clinical, and real-world metrics.
            </p>
          </motion.div>
          <div className="tech-metrics-grid">
            <motion.div className="tech-metric-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="tech-metric-icon"><BarChart3 size={24} strokeWidth={1.5} /></div>
              <p className="tech-metric-text"><strong>NLP:</strong> F1 Score, Precision, Recall</p>
            </motion.div>
            <motion.div className="tech-metric-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <div className="tech-metric-icon"><Mic size={24} strokeWidth={1.5} /></div>
              <p className="tech-metric-text"><strong>Speech:</strong> Word Error Rate</p>
            </motion.div>
            <motion.div className="tech-metric-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
              <div className="tech-metric-icon"><Eye size={24} strokeWidth={1.5} /></div>
              <p className="tech-metric-text"><strong>Imaging:</strong> AUC, Sensitivity, Specificity</p>
            </motion.div>
            <motion.div className="tech-metric-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}>
              <div className="tech-metric-icon"><Activity size={24} strokeWidth={1.5} /></div>
              <p className="tech-metric-text"><strong>Suggestions:</strong> Top-K accuracy</p>
            </motion.div>
          </div>
          <motion.p
            className="tech-body-text center max-w-680"
            style={{ marginTop: '1.5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <strong>Real-World Validation:</strong> Physician-reviewed outputs. Continuous monitoring and feedback.
          </motion.p>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <div className="tech-two-col reverse">
            <motion.div
              className="tech-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ShieldCheck size={80} strokeWidth={1} className="tech-icon-main" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="tech-page-section-title">AI That Assists, Not Replaces</h2>
              <p className="tech-body-text">
                ayeeni healthtech is designed as a clinical decision support system, not a
                replacement for doctors.
              </p>
              <h4 className="tech-subheading">Safeguards:</h4>
              <ul className="tech-list">
                <li>Human-in-the-loop validation</li>
                <li>Confidence scoring on outputs</li>
                <li>Explainable insights</li>
                <li>Clear assistive positioning</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <div className="tech-two-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="tech-page-section-title">Privacy Built Into the System</h2>
              <p className="tech-body-text">
                We follow strict data protection practices to ensure patient information is secure.
              </p>
              <ul className="tech-list">
                <li>End-to-end encryption</li>
                <li>Role-based access control</li>
                <li>Data anonymization for training</li>
                <li>Compliance-ready architecture (HIPAA / GDPR / DPDP)</li>
              </ul>
            </motion.div>
            <motion.div
              className="tech-icon-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Lock size={80} strokeWidth={1} className="tech-icon-main" />
            </motion.div>
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
            <h2 className="tech-page-section-title">More Than Just Models</h2>
            <p className="tech-body-text center max-w-680">
              What makes ayeeni healthtech&rsquo;s AI truly powerful is not just individual models,
              but how they work together.
            </p>
          </motion.div>
          <div className="tech-strengths-grid">
            {techPageStrengths.map((s, i) => (
              <motion.div
                key={i}
                className="tech-strength-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="tech-strength-dot" />
                {s}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="tech-closing-line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            An AI system that evolves with healthcare&mdash;not one that operates outside it.
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div
            className="tech-final-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="tech-cta-title">See the Intelligence in Action</h2>
            <p className="tech-cta-sub">
              Experience how ayeeni healthtech&rsquo;s AI transforms healthcare into a connected,
              intelligent system.
            </p>
            <div className="tech-cta-actions">
              <a href="#join-wishlist" className="btn btn-primary">Request Demo</a>
              <a href="#contact" className="btn btn-outline">Get Started</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="tech-footer-cta">
        <div className="container">
          <p>Have technical questions? Let&rsquo;s talk. <a href="#contact">Contact Our Team</a></p>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
