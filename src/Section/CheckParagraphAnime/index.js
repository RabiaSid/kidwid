import React, { useState, useEffect } from 'react';
import { BannerImage1, BannerImage2, BannerImage3, BannerImage4 } from '@/assets';
import { motion, AnimatePresence } from 'framer-motion';

const CheckParagraphAnime = () => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed diam metus, congue at ex vel, fermentum tincidunt justo.',
    'Vestibulum consectetur quam eget neque faucibus, a aliquet odio iaculis.',
    'Fusce eget tellus nec risus rutrum rhoncus at vel magna.'
  ];
  const images = [
    BannerImage1,
    BannerImage2,
    BannerImage3,
    BannerImage4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 3000); // Change paragraph every 3 seconds

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, overflow: 'scroll' }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentParagraph}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p>{paragraphs[currentParagraph]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ flex: 1 }}>
        <motion.img
          key={currentParagraph}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={images[currentParagraph]}
          alt="Image"
        />
      </div>
    </div>
  );
};


export default CheckParagraphAnime;
