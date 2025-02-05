import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const MovingDots = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const numRows = 20;
  const numCols = 30;
  const dotSpacing = 20;
  const dotSize = 4;
  const interactionRadius = 100; // 2cm in pixels (adjust as needed)

  const dots = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const x = useMotionValue(j * dotSpacing);
      const y = useMotionValue(i * dotSpacing);

      const offsetX = useTransform([mouseX, x, mouseY, y], ([mx, dotX, my, dotY]) => {
        const dx = mx - dotX;
        const dy = my - dotY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= interactionRadius) {
          const force = Math.max(0, interactionRadius - distance) / interactionRadius * 10; // Adjust force
          return force * dx * 0.05; // Adjust influence
        } else {
          return 0; // No movement outside the radius
        }
      });

      const offsetY = useTransform([mouseY, y, mouseX, x], ([my, dotY, mx, dotX]) => {
        const dy = my - dotY;
        const dx = mx - dotX;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= interactionRadius) {
          const force = Math.max(0, interactionRadius - distance) / interactionRadius * 10; // Adjust force
          return force * dy * 0.05; // Adjust influence
        } else {
          return 0; // No movement outside the radius
        }
      });

      dots.push(
        <motion.div
          key={`${i}-${j}`}
          style={{
            x,
            y,
            width: dotSize,
            height: dotSize,
            borderRadius: '50%',
            backgroundColor: '#ccc',
            position: 'absolute',
          }}
          animate={{ x: x.get() + offsetX.get(), y: y.get() + offsetY.get() }}
          transition={{ type: 'tween' }} // You can add a duration here if needed
        />
      );
    }
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {dots}
    </div>
  );
};

export default MovingDots;