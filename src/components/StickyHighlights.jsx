// StickyHighlights.jsx

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StickyHighlights = ({ backgroundColor = 'bg-accent' }) => {
  const containerRef = useRef(null);

  const  highlights = [
    '15+ ans d’expérience',
    'Construction clé en main',
    'Matériaux de qualité',
    'Respect des délais et du budget',
    'Entreprise à taille humaine',
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const segment = 1 / highlights.length;

  return (
    <main ref={containerRef} className={`relative w-full font-fraunces min-h-[500vh] ${backgroundColor} text-accent2`}>
      <section className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {highlights.map((text, index) => {
          const inStart = index * segment;
          const inEnd = inStart + 0.15;
          const outStart = (index + 1) * segment - 0.15;
          const outEnd = (index + 1) * segment;

          const opacity = useTransform(
            scrollYProgress,
            [inStart, inEnd, outStart, outEnd],
            [0, 1, 1, 0]
          );
          const y = useTransform(
            scrollYProgress,
            [inStart, inEnd, outStart, outEnd],
            [50, 0, 0, -50]
          );

          return (
            <motion.div
              key={text}
              className="absolute text-center text-5xl font-bold px-4"
              style={{ opacity, y }}
            >
              {text}
            </motion.div>
          );
        })}
      </section>
    </main>
  );
};

export default StickyHighlights;
