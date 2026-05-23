import { ArrowLeft, Mail, Phone, Globe, Send, Building2, MapPin, HelpCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = ({ onBack }) => {
  return (
    <div className="contact-page">
      <nav className="contact-nav">
        <div className="container contact-nav-container">
          <button className="contact-back" onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            Back to Home
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="contact-hero-title">Let&rsquo;s Build the Future of Healthcare Together</h1>
            <p className="contact-hero-sub">
              Have questions, want a demo, or looking to partner with us? We&rsquo;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.h2
            className="contact-section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <div className="contact-options-grid">
            <div className="contact-option-card">
              <div className="contact-option-icon"><Mail size={28} strokeWidth={1.5} /></div>
              <h3>Email</h3>
              <a href="mailto:admin@ayeeni.dev">admin@ayeeni.dev</a>
              <p className="contact-option-label">For general inquiries, partnerships, and support</p>
            </div>
            <div className="contact-option-card">
              <div className="contact-option-icon"><Phone size={28} strokeWidth={1.5} /></div>
              <h3>Phone</h3>
              <a href="tel:+919632342375">+91 9632342375</a>
              <p className="contact-option-label">Available for direct communication and quick assistance</p>
            </div>
            <div className="contact-option-card">
              <div className="contact-option-icon"><Globe size={28} strokeWidth={1.5} /></div>
              <h3>Website</h3>
              <a href="https://www.ayeeni.dev" target="_blank" rel="noopener noreferrer">www.ayeeni.dev</a>
              <p className="contact-option-label">Explore our platform and learn more about our solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Demo Request */}
      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <div className="contact-forms-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-form-icon"><Send size={24} strokeWidth={1.5} /></div>
              <h2 className="contact-form-title">Send Us a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="contact-input" required />
                <input type="email" placeholder="Email Address" className="contact-input" required />
                <input type="tel" placeholder="Phone Number" className="contact-input" required />
                <input type="text" placeholder="Organization / Company (Optional)" className="contact-input" />
                <textarea placeholder="Message" className="contact-textarea" rows={4} required></textarea>
                <button type="submit" className="btn btn-primary contact-submit">Submit Inquiry</button>
                <p className="contact-helper">Our team will get back to you within 24–48 hours.</p>
              </form>
            </motion.div>

            {/* Demo Request */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="contact-form-icon"><Calendar size={24} strokeWidth={1.5} /></div>
              <h2 className="contact-form-title">Request a Demo</h2>
              <p className="contact-demo-text">
                See how MEDORA can transform your healthcare operations with a live walkthrough of our platform.
              </p>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Name" className="contact-input" required />
                <input type="email" placeholder="Email" className="contact-input" required />
                <input type="text" placeholder="Organization" className="contact-input" required />
                <select className="contact-input">
                  <option value="">Role (Doctor / Hospital / Other)</option>
                  <option value="doctor">Doctor</option>
                  <option value="hospital">Hospital</option>
                  <option value="other">Other</option>
                </select>
                <input type="text" placeholder="Preferred Date & Time" className="contact-input" />
                <button type="submit" className="btn btn-primary contact-submit">Book Demo</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-section-icon"><Building2 size={32} strokeWidth={1.5} /></div>
            <h2 className="contact-section-title">Partner With Us</h2>
            <p className="contact-body-text center max-w-680">
              We collaborate with hospitals, clinics, diagnostic centers, and healthcare organizations
              to build a connected healthcare ecosystem.
            </p>
            <p className="contact-body-text center max-w-680">
              If you&rsquo;re interested in working with us, reach out&mdash;we&rsquo;d love to explore
              opportunities together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding section-shell section-shell-cool">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-section-icon"><MapPin size={32} strokeWidth={1.5} /></div>
            <h2 className="contact-section-title">Our Presence</h2>
            <p className="contact-body-text center max-w-680">
              Based in India, working to build scalable healthcare solutions for both local and
              global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support */}
      <section className="section-padding section-shell section-shell-slate">
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-section-icon"><HelpCircle size={32} strokeWidth={1.5} /></div>
            <h2 className="contact-section-title">Need Help?</h2>
            <p className="contact-body-text center max-w-680">
              For technical support or platform-related queries, contact our support team and
              we&rsquo;ll assist you as quickly as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container">
          <motion.div
            className="contact-final-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-cta-title">Ready to Get Started?</h2>
            <p className="contact-cta-sub">
              Join MEDORA and experience a smarter, more connected healthcare system.
            </p>
            <div className="contact-cta-actions">
              <a href="#!" className="btn btn-primary">Get Started</a>
              <a href="#!" className="btn btn-outline">Request Demo</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="contact-footer-cta">
        <div className="container">
          <p>Prefer a quick conversation? Call us directly. <a href="tel:+919632342375">+91 9632342375</a></p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
