"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Lightbulb, Heart, ArrowRight, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-20 bg-linear-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About{" "}
              <span className="text-secondary">Manuvance Talent Solutions</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              With over 15 years of experience, we've established ourselves as a
              trusted partner in connecting exceptional talent with innovative
              companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Manuvance Talent Solutions was founded with a simple mission: to
                revolutionize the way companies find talent and professionals
                find opportunities. Starting as a small boutique recruitment
                firm, we've grown into a comprehensive staffing and HR solutions
                provider.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Our journey has been marked by consistent growth, client
                satisfaction, and a commitment to excellence. We've successfully
                placed thousands of professionals and served hundreds of
                companies across multiple industries.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, we continue to evolve, leveraging technology and
                expertise to deliver superior staffing solutions that drive
                business success.
              </p>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                📖
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To connect exceptional talent with innovative companies, creating meaningful career opportunities and driving business success through strategic staffing solutions.",
              },
              {
                icon: Lightbulb,
                title: "Our Vision",
                description:
                  "To be the most trusted and innovative staffing partner, known for our expertise, integrity, and commitment to transforming careers and organizations.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Integrity, Excellence, Innovation, and People-First approach. We believe in building long-term relationships based on trust and mutual success.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded-xl bg-background border border-border hover:border-secondary/50 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-7 h-7 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our experienced team brings decades of combined expertise in
              recruitment, HR, and business development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "With 20+ years in recruitment, Sarah founded Manuvance Talent Solutions to revolutionize staffing.",
                icon: "👩‍💼",
              },
              {
                name: "Michael Chen",
                role: "VP of Operations",
                bio: "Leading our operational excellence with expertise in process optimization and scaling.",
                icon: "👨‍💼",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Recruitment",
                bio: "Expert in identifying top talent and building strong employer-employee relationships.",
                icon: "👩‍💼",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden bg-muted border border-border hover:border-secondary/50 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">{member.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Companies Trust Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Industry-leading expertise with 15+ years of experience",
              "Personalized approach to understanding your unique needs",
              "Rigorous screening and vetting of all candidates",
              "Comprehensive payroll and HR solutions",
              "Dedicated account management and 24/7 support",
              "Proven track record with 10,000+ successful placements",
              "Multi-industry expertise across 50+ sectors",
              "Commitment to long-term partnership and growth",
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-lg bg-background border border-border"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Award className="w-6 h-6 text-secondary shrink-0 mt-1" />
                <p className="text-foreground/80">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Partner with Us Today
          </motion.h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies and professionals who've transformed
            their careers and businesses with Manuvance Talent Solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ></motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
