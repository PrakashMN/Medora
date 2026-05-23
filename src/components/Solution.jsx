import { motion } from 'framer-motion';
import './Solution.css';

const Solution = () => {
  return (
    <section className="solution-section section-padding section-shell section-shell-cool" id="solution">
      <div className="container">
        <div className="solution-layout">
          <motion.div
            className="solution-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="solution-headline">
              One System. <span className="text-primary">Complete Circle of Care.</span>
            </h2>
            <p className="solution-body">
              Ayeeni healthtech is an AI-powered healthcare ecosystem that connects patients, doctors, and
              medical data into one intelligent system. It transforms fragmented healthcare interactions
              into a seamless, data-driven experience.
            </p>
            <div className="solution-keyline">
              <span className="keyline-icon" aria-hidden="true"></span>
              From symptoms to diagnosis to treatment&mdash;everything connected.
            </div>
          </motion.div>

          <motion.div
            className="solution-visual"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="dashboard-mockup">
              <svg className="mockup-svg" viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="20" width="560" height="410" rx="24" fill="white" stroke="rgba(46, 49, 146, 0.08)" strokeWidth="2"/>
                <rect x="20" y="20" width="560" height="410" rx="24" fill="url(#glass-gradient)" />
                
                <circle cx="50" cy="45" r="6" fill="#EF4444" opacity="0.8"/>
                <circle cx="70" cy="45" r="6" fill="#F59E0B" opacity="0.8"/>
                <circle cx="90" cy="45" r="6" fill="#10B981" opacity="0.8"/>
                <line x1="20" y1="70" x2="580" y2="70" stroke="#F1F5F9" strokeWidth="2" />

                <rect x="40" y="90" width="140" height="320" rx="16" fill="#F8FAFC" />
                <rect x="55" y="110" width="110" height="12" rx="6" fill="var(--color-primary)" opacity="0.1" />
                <rect className="svg-pulse" x="55" y="140" width="85" height="10" rx="5" fill="#E2E8F0" />
                <rect x="55" y="165" width="95" height="10" rx="5" fill="#E2E8F0" />
                <rect x="55" y="190" width="70" height="10" rx="5" fill="#E2E8F0" />
                <rect className="svg-pulse" x="55" y="260" width="100" height="100" rx="12" fill="var(--color-accent)" opacity="0.05" />

                <rect className="svg-float-1" x="200" y="90" width="360" height="90" rx="16" fill="url(#primary-gradient)" />
                <circle cx="240" cy="135" r="24" fill="white" opacity="0.2" />
                <rect x="280" y="120" width="140" height="14" rx="7" fill="white" />
                <rect x="280" y="145" width="90" height="10" rx="5" fill="white" opacity="0.7" />
                
                <rect className="svg-float-2" x="200" y="200" width="220" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
                <path d="M 220 300 C 250 300, 260 250, 290 260 C 320 270, 330 220, 360 230 C 380 235, 390 280, 400 270" stroke="var(--color-primary)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                
                <rect className="svg-float-1" x="440" y="200" width="120" height="140" rx="16" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1"/>
                <circle cx="500" cy="250" r="30" fill="var(--color-accent)" opacity="0.1" />
                <circle cx="500" cy="250" r="22" stroke="var(--color-accent)" strokeWidth="6" strokeDasharray="80 140" fill="none" strokeLinecap="round" />
                <rect x="475" y="300" width="50" height="8" rx="4" fill="#CBD5E1" />

                <rect x="200" y="360" width="170" height="50" rx="12" fill="#F8FAFC" />
                <rect x="390" y="360" width="170" height="50" rx="12" fill="#F8FAFC" />

                <defs>
                  <linearGradient id="glass-gradient" x1="20" y1="20" x2="580" y2="430" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="primary-gradient" x1="200" y1="90" x2="560" y2="180" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="var(--color-primary)" />
                    <stop offset="100%" stopColor="var(--color-primary-dark)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="decoration-circle top-right"></div>
            <div className="decoration-circle bottom-left"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
