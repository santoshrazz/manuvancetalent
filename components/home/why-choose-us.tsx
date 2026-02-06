"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    icon: Target,
    title: "Expert Matching",
    description:
      "Advanced algorithms and expert recruiters ensure perfect job-candidate matching.",
  },
  {
    icon: Zap,
    title: "Quick Placement",
    description:
      "Fast-track your hiring process with our efficient recruitment pipeline.",
  },
  {
    icon: Users,
    title: "Quality Assured",
    description:
      "Rigorous screening and vetting processes guarantee top-tier talent.",
  },
  {
    icon: CheckCircle,
    title: "Full Support",
    description:
      "24/7 support for both employers and candidates throughout the process.",
  },
];

export function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="text-secondary">Manuvance Talent </span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              With over 3+ years of industry experience, we've perfected the art
              of connecting exceptional talent with innovative companies.
            </p>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    variants={itemVariants}
                  >
                    <motion.div
                      className="shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/20">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-foreground/70 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-96 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-secondary/30 to-accent/20 rounded-2xl"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(0, 168, 204, 0.15)",
                  "0 0 80px rgba(0, 212, 255, 0.25)",
                  "0 0 40px rgba(0, 168, 204, 0.15)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-4 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center"
              animate={{ rotate: [0, 1.5, 0, -1.5, 0], scale: [1, 1.015, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={"Hiring_Image2.jpg"}
                alt="Hiring Illustration"
                fill
                className="rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
