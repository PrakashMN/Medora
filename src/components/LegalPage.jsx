import { ArrowLeft, Shield, FileText, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import './LegalPage.css';

const LegalPage = ({ onBack }) => {
  return (
    <div className="legal-page">
      <nav className="legal-nav">
        <div className="container legal-nav-container">
          <button className="legal-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
        </div>
      </nav>

      <section className="legal-hero">
        <div className="container">
          <motion.div
            className="legal-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="legal-hero-title">Legal &amp; Privacy</h1>
            <p className="legal-hero-sub">
              Information about how we handle your data, our terms of service, and security practices.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate" id="privacy">
        <div className="container">
          <motion.div
            className="legal-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="legal-section-icon"><Shield size={28} strokeWidth={1.5} /></span>
            <h2 className="legal-section-title">Privacy Policy</h2>
          </motion.div>
          <div className="legal-content">
            <p className="legal-updated">Last updated: May 2026</p>
            <p>
              At ayeeni healthtech, we take your privacy seriously. This policy describes how we collect,
              use, and protect your personal information when you use our platform and services.
            </p>
            <h3>Information We Collect</h3>
            <p>
              We collect information you provide directly, such as your name, email address, phone number,
              and organization details when you sign up, request a demo, or contact us. We also collect
              usage data to improve our services.
            </p>
            <h3>How We Use Your Information</h3>
            <p>
              Your information is used to provide and improve our services, communicate with you about
              product updates, respond to your inquiries, and ensure the security of our platform.
            </p>
            <h3>Data Protection</h3>
            <p>
              We implement industry-standard security measures to protect your data. This includes
              encryption in transit and at rest, access controls, and regular security audits.
            </p>
            <h3>Contact</h3>
            <p>
              If you have questions about this policy, reach out to us at{' '}
              <a href="mailto:admin@ayeeni.dev">admin@ayeeni.dev</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-cool" id="terms">
        <div className="container">
          <motion.div
            className="legal-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="legal-section-icon"><FileText size={28} strokeWidth={1.5} /></span>
            <h2 className="legal-section-title">Terms of Service</h2>
          </motion.div>
          <div className="legal-content">
            <p className="legal-updated">Last updated: May 2026</p>
            <p>
              By using ayeeni healthtech&rsquo;s platform and services, you agree to the following terms
              and conditions. Please read them carefully.
            </p>
            <h3>Use of Service</h3>
            <p>
              Our platform is intended for healthcare professionals and organizations. You agree to use
              the service in compliance with all applicable laws and regulations.
            </p>
            <h3>Account Responsibility</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for
              all activities that occur under your account.
            </p>
            <h3>Limitation of Liability</h3>
            <p>
              ayeeni healthtech provides the platform on an &ldquo;as is&rdquo; basis. We make no
              warranties regarding the uninterrupted or error-free operation of the service.
            </p>
            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Users will be notified of material
              changes via email or through the platform.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-shell section-shell-slate" id="security">
        <div className="container">
          <motion.div
            className="legal-section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="legal-section-icon"><Lock size={28} strokeWidth={1.5} /></span>
            <h2 className="legal-section-title">Security</h2>
          </motion.div>
          <div className="legal-content">
            <p className="legal-updated">Last updated: May 2026</p>
            <p>
              Security is a core pillar of ayeeni healthtech. We employ multiple layers of protection
              to safeguard your data and ensure platform integrity.
            </p>
            <h3>Encryption</h3>
            <p>
              All data transmitted between your device and our servers is encrypted using TLS 1.3.
              Data at rest is encrypted using AES-256.
            </p>
            <h3>Access Control</h3>
            <p>
              We enforce strict access controls and role-based permissions. Only authorized personnel
              have access to sensitive data, and all access is logged and audited.
            </p>
            <h3>Compliance</h3>
            <p>
              We follow industry best practices and guidelines for healthcare data protection. Our
              security practices are regularly reviewed and updated.
            </p>
            <h3>Reporting Vulnerabilities</h3>
            <p>
              If you discover a security vulnerability, please report it to{' '}
              <a href="mailto:admin@ayeeni.dev">admin@ayeeni.dev</a>. We take all reports seriously
              and will respond promptly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="legal-section-title">Questions?</h2>
            <p className="legal-content center max-w-680" style={{ textAlign: 'center' }}>
              If you have any questions about our policies or security practices, we&rsquo;re here to help.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a href="#contact" className="btn btn-primary">Contact Us</a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="legal-footer-cta">
        <div className="container">
          <p>Reach out to <a href="mailto:admin@ayeeni.dev">admin@ayeeni.dev</a> for any legal or security concerns.</p>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
