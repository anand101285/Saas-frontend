import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react';
import LandingPageAccessingApplyCyber from './components/LandingPageAccessingApplyCyber';
import LandingPageAttackingTypes from './components/LandingPageAttackingTypes';
import LandingPageHeader from './components/LandingPageHeader';
import LandingPageHowItWorks from './components/LandingPageHowItWorks';
import LandingPagePhishedDataUsage from './components/LandingPagePhishedDataUsage';
import LandingPageStats from './components/LandingPageStats';
import LandingPageTargetAudience from './components/LandingPageTargetAudience';
import LandingPageActionsAgainstPhishing from './components/LandingPageActionsAgainstPhishing';

/**
 * @returns {React.FC} - User Profile Card Component
 */
const LandingSaas: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  }) as any;

  return (
    <div className="">
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          transformOrigin: '0% 50%',
          backgroundColor: '#f3c920',
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          zIndex: 1000
        }}
      />

      <LandingPageHeader />
      <LandingPageStats />
      <LandingPageHowItWorks />
      <LandingPageAttackingTypes />
      <LandingPageTargetAudience />
      <LandingPageActionsAgainstPhishing />
      <LandingPagePhishedDataUsage />
      <LandingPageAccessingApplyCyber />
    </div>
  );
};

export default LandingSaas;
