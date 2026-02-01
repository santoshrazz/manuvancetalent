'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  {
    label: 'Successful Placements',
    value: 10000,
    suffix: '+',
  },
  {
    label: 'Partner Companies',
    value: 500,
    suffix: '+',
  },
  {
    label: 'Industries Served',
    value: 50,
    suffix: '+',
  },
  {
    label: 'Years of Experience',
    value: 15,
    suffix: '+',
  },
];

function AnimatedCounter({
  value,
  suffix,
  isVisible,
}: {
  value: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const increment = value / 50;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export function Statistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="py-20 bg-linear-to-r from-primary via-primary/95 to-secondary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Delivering exceptional results and building lasting partnerships
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-sm border border-primary-foreground/20 hover:border-primary-foreground/40 transition-colors"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div className="text-5xl md:text-6xl font-bold mb-3 text-accent">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isVisible={inView}
                />
              </motion.div>
              <p className="text-primary-foreground/90 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of companies and candidates who have benefited from our expertise in connecting talent with opportunity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
