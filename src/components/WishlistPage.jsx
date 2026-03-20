import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2, HeartPulse, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
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

        <div className="wishlist-layout">
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

            {isSubmitted && (
              <div className="wishlist-success" role="status" aria-live="polite">
                <CheckCircle2 size={20} />
                <div>
                  <strong>You&apos;re on the list.</strong>
                  <p>
                    Thanks, {formData.name}. We&apos;ll reach out at {formData.email} soon.
                  </p>
                </div>
              </div>
            )}
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default WishlistPage;
