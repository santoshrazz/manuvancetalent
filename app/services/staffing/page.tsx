"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, ArrowRight, CheckCircle, Zap } from "lucide-react";

export default function StaffingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-linear-to-br from-background via-background to-muted overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-secondary font-semibold uppercase text-sm">
                    Staffing Solutions
                  </span>
                </div>

                <h1 className="text-5xl font-bold text-foreground mb-4">
                  Flexible Workforce Solutions
                </h1>

                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Build flexible and scalable teams with our contractual and
                  temporary staffing services. Perfect for seasonal peaks and
                  project-based work.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-all"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative h-96"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-primary/20 rounded-2xl" />
              <div className="absolute inset-4 bg-linear-to-br from-accent/5 to-primary/5 rounded-xl flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl"
                >
                  👥
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Staffing Solutions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Temporary Staffing",
                    desc: "Quick placement of temporary staff for immediate needs.",
                  },
                  {
                    icon: CheckCircle,
                    title: "Contract-to-Permanent",
                    desc: "Try before you hire with our flexible conversion options.",
                  },
                  {
                    icon: Users,
                    title: "Seasonal Staffing",
                    desc: "Scale your team up or down based on seasonal demands.",
                  },
                  {
                    icon: ArrowRight,
                    title: "Project-Based Resources",
                    desc: "Specialized teams for specific projects and initiatives.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 text-sm">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                🤝
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {[
                  "Flexible Workforce Scaling",
                  "Reduced Labor Costs",
                  "No Long-term Commitments",
                  "Quick Staff Deployment",
                  "Risk-Free Trial Periods",
                  "Professional Screening",
                ].map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Our Expertise
              </h3>
              <ul className="space-y-3">
                {[
                  "Administrative & Office Support",
                  "Technical & IT Professionals",
                  "Manufacturing & Logistics",
                  "Healthcare & Medical Staff",
                  "Sales & Customer Service",
                  "Skilled Trades & Craftspeople",
                ].map((expertise, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground/80">{expertise}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How Our Staffing Process Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Request",
                desc: "Submit your staffing requirements and specifications.",
              },
              {
                step: "2",
                title: "Screening",
                desc: "We screen and match qualified candidates.",
              },
              {
                step: "3",
                title: "Deployment",
                desc: "Quick onboarding and deployment of staff.",
              },
              {
                step: "4",
                title: "Support",
                desc: "Ongoing support and management throughout.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent"
                  whileHover={{ scale: 1.1 }}
                >
                  {item.step}
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Build Your Ideal Team Today
          </motion.h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact us to discuss your staffing needs and get started.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
