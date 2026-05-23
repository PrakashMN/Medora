import { ArrowLeft, Users, Target, Lightbulb, Rocket, HeartHandshake, GraduationCap, BrainCircuit, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import './TeamPage.css';

const teamMembers = [
  {
    name: "Urooj Akhtar Khan",
    role: "Founder & CEO",
    avatar: "UA",
    desc: "Leads AI vision, product strategy, and system architecture at ayeeni healthtech. With a background in computer science and deep interest in healthcare innovation, he focuses on building multimodal AI systems that solve real-world problems.",
    highlights: [
      "Drives product direction and ecosystem design",
      "Experience in AI systems and robotics",
      "National-level hackathon winner",
      "Leading execution within structured innovation programs"
    ]
  },
  {
    name: "Sneha Manded",
    role: "Co-Founder & COO",
    avatar: "SM",
    desc: "Leads operations, strategy, and business development at ayeeni healthtech.",
    highlights: []
  },
  {
    name: "Shadab Khan",
    role: "AI/ML Engineer",
    avatar: "SK",
    desc: "Responsible for building and scaling the core AI systems powering ayeeni healthtech. Works on backend architecture, model integration, and real-time system performance.",
    highlights: [
      "AI/ML model development and deployment",
      "Scalable backend system design",
      "Multimodal model integration"
    ]
  }
];

const advisors = [
  {
    name: "Deepak K T",
    role: "Technical Advisor",
    avatar: "DK",
    desc: "Provides guidance on advanced system architecture, scalability, and AI implementation. Brings strong expertise in engineering systems and emerging technologies.",
    highlights: [
      "System design and architecture guidance",
      "Technical strategy and scalability",
      "Advanced AI system consultation"
    ]
  },
  {
    name: "Dr. Shafeeullah Khan",
    role: "Medical Advisor",
    avatar: "SK",
    desc: "Healthcare Domain Expert. Supports clinical validation, healthcare workflows, and regulatory alignment to ensure MEDORA is built for real-world medical environments.",
    highlights: []
  }
];

const strengths = [
  { icon: <BrainCircuit size={24} strokeWidth={1.5} />, text: "Deeptech focus (AI + healthcare integration)" },
  { icon: <Rocket size={24} strokeWidth={1.5} />, text: "Strong execution capability" },
  { icon: <Code size={24} strokeWidth={1.5} />, text: "End-to-end system development experience" },
  { icon: <Target size={24} strokeWidth={1.5} />, text: "Real-world deployment mindset" },
  { icon: <Users size={24} strokeWidth={1.5} />, text: "Collaborative and fast-moving team" }
];

const culturePoints = [
  "We build fast and iterate continuously",
  "We prioritize real-world usability over theoretical perfection",
  "We work closely as a team, aligned by a shared mission",
  "We focus on solving meaningful problems"
];

const TeamPage = ({ onBack }) => {
  return (
    <div className="team-page">
      <nav className="team-nav">
        <div className="container team-nav-container">
          <button className="team-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
        </div>
      </nav>

      <section className="team-hero">
        <div className="container">
          <motion.div
            className="team-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="team-hero-title">The Team Building the Future of Healthcare</h1>
            <p className="team-hero-sub">
              A deeptech-driven team combining AI, healthcare, and system engineering to solve
              one of the world&rsquo;s most complex problems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div
            className="team-overview-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="team-section-title">Built for Execution, Not Just Ideas</h2>
            <p className="team-body-text">
              ayeeni healthtech is led by a multidisciplinary team with hands-on experience in
              building real-world systems. We combine expertise in artificial intelligence, product
              development, and healthcare workflows to create scalable, impactful solutions.
            </p>
            <p className="team-body-text">
              Our strength lies in execution&mdash;turning complex ideas into working systems
              deployed in real environments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <motion.h2
            className="team-section-title text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Core Team
          </motion.h2>
          <div className="team-members-grid">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="team-member-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="team-member-avatar">{member.avatar}</div>
                <h3 className="team-member-name">{member.name}</h3>
                <div className="team-member-role">{member.role}</div>
                <p className="team-member-desc">{member.desc}</p>
                {member.highlights.length > 0 && (
                  <ul className="team-member-highlights">
                    {member.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.h2
            className="team-section-title text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Advisors &amp; Experts
          </motion.h2>
          <div className="team-advisors-grid">
            {advisors.map((advisor, i) => (
              <motion.div
                key={i}
                className="team-member-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="team-member-avatar"><GraduationCap size={28} strokeWidth={1.5} /></div>
                <h3 className="team-member-name">{advisor.name}</h3>
                <div className="team-member-role">{advisor.role}</div>
                <p className="team-member-desc">{advisor.desc}</p>
                {advisor.highlights.length > 0 && (
                  <ul className="team-member-highlights">
                    {advisor.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <h2 className="team-section-title">Extended Team</h2>
            <div className="team-extended-card">
              <div className="team-extended-icon"><GraduationCap size={36} strokeWidth={1.5} /></div>
              <h3 className="team-member-name">Interns &amp; Research Team</h3>
              <p className="team-body-text center">
                A growing team of engineers and researchers contributing to the development and
                improvement of MEDORA.
              </p>
              <ul className="team-extended-list">
                <li>Data annotation and preparation</li>
                <li>Model experimentation and validation</li>
                <li>Feature development and testing</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <h2 className="team-section-title">What Sets Us Apart</h2>
            <p className="team-body-text center max-w-680">
              We are not just building a product&mdash;we are building a healthcare intelligence
              system from the ground up.
            </p>
          </motion.div>
          <div className="team-strengths-grid">
            {strengths.map((s, i) => (
              <motion.div key={i} className="team-strength-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <span className="team-strength-icon">{s.icon}</span>
                <span className="team-strength-text">{s.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <div className="team-two-col">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
              <h2 className="team-section-title">How We Work</h2>
              <p className="team-body-text">We operate with a strong focus on ownership, speed, and impact.</p>
              <ul className="team-culture-list">
                {culturePoints.map((point, i) => (<li key={i}>{point}</li>))}
              </ul>
            </motion.div>
            <motion.div className="team-icon-box" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Lightbulb size={80} strokeWidth={1} className="team-icon-main" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div className="team-join-cta" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
            <h2 className="team-cta-title">Be Part of the Journey</h2>
            <p className="team-cta-sub">
              We are always looking for passionate individuals who want to build impactful
              technology in healthcare.
            </p>
            <div className="team-cta-actions">
              <a href="#!" className="btn btn-primary">Join the Team</a>
              <a href="#!" className="btn btn-outline">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="team-footer-cta">
        <div className="container">
          <p>Want to collaborate or learn more? <a href="#contact">Get in Touch</a></p>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
