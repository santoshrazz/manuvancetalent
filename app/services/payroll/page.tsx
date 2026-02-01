'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart3, ArrowRight, CheckCircle, Lock } from 'lucide-react';

export default function PayrollPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-linear-to-br from-background via-background to-muted">
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
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="text-secondary font-semibold uppercase text-sm">
                    Payroll Solutions
                  </span>
                </div>

                <h1 className="text-5xl font-bold text-foreground mb-4">
                  Streamline Your Payroll
                </h1>

                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Comprehensive payroll management solutions that ensure accuracy, compliance, and efficiency. Let us handle your payroll so you can focus on growth.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all"
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
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-accent/20 rounded-2xl" />
              <div className="absolute inset-4 bg-linear-to-br from-secondary/5 to-accent/5 rounded-xl flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl"
                >
                  💼
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                📊
              </div>
            </motion.div>

            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Our Payroll Services?
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: 'Accuracy Guaranteed',
                    desc: '100% accurate salary calculations and tax compliance.',
                  },
                  {
                    icon: Lock,
                    title: 'Secure & Compliant',
                    desc: 'Data security and full compliance with all regulations.',
                  },
                  {
                    icon: BarChart3,
                    title: 'Real-time Reporting',
                    desc: 'Detailed analytics and reports at your fingertips.',
                  },
                  {
                    icon: ArrowRight,
                    title: '24/7 Support',
                    desc: 'Dedicated support team available anytime you need help.',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      className="flex gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="shrink-0">
                        <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-foreground/70 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Payroll Features</h3>
              <ul className="space-y-3">
                {[
                  'Salary Processing & Management',
                  'Tax Compliance & Filing',
                  'Statutory Deductions',
                  'Bonus & Incentive Management',
                  'Leave Management System',
                  'Multi-location Support',
                ].map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Additional Benefits</h3>
              <ul className="space-y-3">
                {[
                  'Employee Self-Service Portal',
                  'Payroll Analytics & Reporting',
                  'Direct Bank Transfer Setup',
                  'Document Management',
                  'Compliance Assistance',
                  'Expert Consultation',
                ].map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Simplify Your Payroll Management
          </motion.h2>
          <p className="text-lg text-white/90 mb-8">
            Let our experts handle your payroll while you focus on what matters most.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-secondary rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
