import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, HeartPulse, ShieldCheck, Users, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './WishlistPage.css';

const BASE_WISHLIST_COUNT = 25748;

const WishlistPage = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const joinedCount = useMemo(
    () => BASE_WISHLIST_COUNT + (isSubmitted ? 1 : 0),
    [isSubmitted],
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="wishlist-page gradient-bg">
      <div className="wishlist-medical-bg" aria-hidden="true">
        <div className="wishlist-grid"></div>
        <div className="wishlist-glow wishlist-glow-left"></div>
        <div className="wishlist-glow wishlist-glow-right"></div>
      </div>

      <div className="container wishlist-shell">
        <button type="button" className="wishlist-back" onClick={onBack}>
          <ArrowLeft size={18} />
          Back to Home
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              className="wishlist-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.section
                className="wishlist-copy glass-effect rounded-theme"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span className="section-badge wishlist-badge">
                  <span className="wishlist-badge-dot" aria-hidden="true"></span>
                  Early Access
                </span>
                <h1 className="wishlist-title">Join Medora&apos;s wishlist before the next release.</h1>
                <p className="wishlist-subtitle">
                  Share your details to reserve early access to a calmer, connected healthcare
                  experience powered by AI.
                </p>

                <div className="wishlist-stats">
                  <div className="wishlist-stat">
                    <Users size={18} />
                    <span>{joinedCount.toLocaleString()} people have joined</span>
                  </div>
                  <div className="wishlist-stat">
                    <ShieldCheck size={18} />
                    <span>Private early access updates</span>
                  </div>
                </div>

                <div className="wishlist-benefits">
                  <div className="wishlist-benefit">
                    <HeartPulse size={20} />
                    <div>
                      <h3>Priority onboarding</h3>
                      <p>Get first access when Medora opens the next wave of invites.</p>
                    </div>
                  </div>
                  <div className="wishlist-benefit">
                    <CheckCircle2 size={20} />
                    <div>
                      <h3>Launch updates</h3>
                      <p>Receive product updates, milestone drops, and guided next steps.</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              <motion.section
                className="wishlist-card"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                <div className="wishlist-card-header">
                  <p className="wishlist-kicker">Join the wishlist</p>
                  <h2>Save your spot</h2>
                  <p>Enter your basic details and we&apos;ll keep you in the loop.</p>
                </div>

                <form className="wishlist-form" onSubmit={handleSubmit}>
                  <label className="wishlist-field">
                    <span>Full name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="wishlist-field">
                    <span>Email address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <label className="wishlist-field">
                    <span>Phone number</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </label>

                  <button type="submit" className="btn btn-primary wishlist-submit">
                    Join Wishlist
                  </button>
                </form>
              </motion.section>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              className="wishlist-success-page"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="wishlist-success-icon-wrap"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1], type: 'spring', stiffness: 200 }}
              >
                <PartyPopper size={48} strokeWidth={1.5} />
              </motion.div>

              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="wishlist-confetti-dot"
                  style={{
                    left: `${20 + i * 13}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  initial={{ opacity: 0, scale: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [-20, -60, -100],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + i * 0.08,
                    ease: 'easeOut',
                  }}
                />
              ))}

              <motion.h1
                className="wishlist-success-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                You&rsquo;re on the list.
              </motion.h1>

              <motion.p
                className="wishlist-success-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                Thanks, {formData.name}. We&rsquo;ll reach out at {formData.email} soon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <button type="button" className="btn btn-primary" onClick={onBack}>
                  Back to Home
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default WishlistPage;
