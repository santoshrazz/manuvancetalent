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
                    Opportunities for Job Seekers
                  </span>
                </div>

                <h1 className="text-5xl font-bold text-foreground mb-4">
                  Find the Right Job, Faster
                </h1>

                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  We help job seekers find genuine private and corporate job opportunities
                  across India. Our team ensures proper communication, interview updates, and
                  guidance throughout the hiring process.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-all"
                  >
                    Apply Now
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
                How We Help Job Seekers
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: CheckCircle,
                    title: "Corporate & Private Jobs",
                    desc: "We provide access to verified corporate and private sector job openings only.",
                  },
                  {
                    icon: Users,
                    title: "Freshers & Experienced",
                    desc: "Opportunities available for both freshers and experienced candidates.",
                  },
                  {
                    icon: Zap,
                    title: "Pan India Opportunities",
                    desc: "Job openings across multiple cities and locations in India.",
                  },
                  {
                    icon: ArrowRight,
                    title: "Interview Coordination",
                    desc: "Timely interview scheduling, updates, and follow-ups.",
                  },
                ]
                  .map((item, idx) => {
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
                🎯
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
                Key Benefits for Job Seekers
              </h3>
              <ul className="space-y-3">
                {[
                  "No charges for job seekers",
                  "Genuine and verified job opportunities",
                  "Transparent hiring process",
                  "Strong follow-up till joining",
                  "Professional communication",
                  "Career guidance and support",
                ]
                  .map((benefit, idx) => (
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
                What You Can Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Private & corporate sector jobs only",
                  "Clear interview communication",
                  "Resume shortlisting support",
                  "Interview updates & feedback",
                  "Professional recruitment process",
                  "Ethical & transparent hiring",
                ]
                  .map((expertise, idx) => (
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
              Our Job Assistance Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Profile Review",
                desc: "We understand your profile, skills, and job preferences.",
              },
              {
                step: "2",
                title: "Job Matching",
                desc: "We match your profile with relevant job opportunities.",
              },
              {
                step: "3",
                title: "Interview Coordination",
                desc: "Interview scheduling and proper communication.",
              },
              {
                step: "4",
                title: "Follow-up Till Joining",
                desc: "Continuous follow-up until successful joining.",
              },
            ]
              .map((item, idx) => (
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
            Start Your Job Search With Confidence
          </motion.h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let us help you find the right opportunity with transparency and professional
            support.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all"
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
