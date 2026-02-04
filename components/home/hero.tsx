"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative overflow-hidden bg-linear-to-br from-background via-background to-muted pt-12 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Welcome to Manuvance
              <span className="text-secondary"> Talent Solutions</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed capitalize">
              Providing end-to-end hiring solutions for organizations across India. We specialize in connecting
              the right talent with the right opportunity, ensuring quality, efficiency, and long-term value
              for our clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Get Started
              </Link>
            </div>

            <motion.div className="flex gap-8" variants={itemVariants}>
              <div>
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-foreground/60">
                  Companies Placed
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-foreground/60">
                  Successful Placements
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-foreground/60">
                  Industries Covered
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 hidden md:block"
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-secondary/20 to-accent/20 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(0, 168, 204, 0.1)",
                  "0 0 100px rgba(0, 212, 255, 0.2)",
                  "0 0 60px rgba(0, 168, 204, 0.1)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="absolute inset-4 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-6xl"
              >
                👥
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
