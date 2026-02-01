'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, ArrowRight, CheckCircle, Award } from 'lucide-react';

export default function RecruitmentPage() {
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
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-secondary font-semibold uppercase text-sm">
                    Recruitment Solutions
                  </span>
                </div>

                <h1 className="text-5xl font-bold text-foreground mb-4">
                  Find Your Perfect Team
                </h1>

                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Our expert recruitment services connect you with top-tier talent across industries. We handle the entire recruitment process from sourcing to final placement, ensuring you get the best candidates.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                  >
                    Start Recruiting
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
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 rounded-2xl" />
              <div className="absolute inset-4 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-6xl"
                >
                  🎯
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
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Recruitment Process
              </h2>

              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Requirements Analysis',
                    desc: 'We understand your specific needs and role requirements.',
                  },
                  {
                    step: '2',
                    title: 'Candidate Sourcing',
                    desc: 'We search and identify qualified candidates from our network.',
                  },
                  {
                    step: '3',
                    title: 'Screening & Interview',
                    desc: 'Rigorous screening and interview process to find the best fit.',
                  },
                  {
                    step: '4',
                    title: 'Placement & Support',
                    desc: 'We ensure smooth onboarding and ongoing support.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                📋
              </div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: 'Executive Search',
                desc: 'Specialized recruitment for senior management positions.',
              },
              {
                icon: CheckCircle,
                title: 'Technical Talent',
                desc: 'Experts in finding specialized technical professionals.',
              },
              {
                icon: Briefcase,
                title: 'Industry Specific',
                desc: 'Deep expertise across multiple industries and sectors.',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded-xl border border-border hover:border-secondary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Find Your Perfect Talent
          </motion.h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contact our recruitment specialists to discuss your hiring needs.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
