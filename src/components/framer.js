// InfiniteScrollAnimation.js

import React from 'react';
import { motion } from 'framer-motion';

const InfiniteScrollAnimation = ({ children }) => {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <motion.div
        animate={{ x: '-100%' }}
        initial={{ x: '0%' }}
        transition={{
          x: {
            duration: 5, // Adjust the duration as needed
            ease: 'linear',
            repeat: Infinity,
          },
        }}
        style={{
          display: 'inline-block',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollAnimation;
