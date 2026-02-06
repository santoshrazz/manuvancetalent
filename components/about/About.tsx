"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Lightbulb,
  Heart,
  Award,
  ArrowRight,
  Linkedin,
  Mail,
} from "lucide-react";
import { link } from "fs";
import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Chandni Shakya",
      role: "Founder",
      bio: "With 3+ years in recruitment and talent management, Chandni founded Manuvance Talent Solutions to transform how companies find talent.",
      expertise: ["Recruitment Strategy", "Business Development", "Leadership"],
      icon: "👩‍💼",
      linkedIn:
        "https://www.linkedin.com/in/chandnishakyaenterprises?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "hello@manuvancetalent.in",
      image: "/Chandani.jpeg",
    },
    {
      name: "Abhishek Rathore",
      role: "Co-Founder",
      bio: "Abhishek Rathore brings over 2 years of experience in recruitment operations, and delivering high-quality hiring outcomes aligned with business goals.",
      expertise: [
        "Talent-Acquisition",
        "Candidate-Screening",
        "Interview-Process",
      ],
      icon: "👨‍💼",
      linkedIn:
        "https://www.linkedin.com/in/abhishek-rathore-230736362?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "hello@manuvancetalent.in",
      image: "/AbhishekImage.png",
    },
  ];
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
              With over 3+ years of experience, we've established ourselves as a
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
                Manuvance Talent Solutions is a Delhi-based recruitment agency
                offering reliable, scalable, and affordable hiring solutions to
                companies across India
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                We work closely with our clients to understand their manpower
                requirements and deliver quantity hiring with quality assurance.
                Our recruitment approach is designed to save time, reduce hiring
                costs, and ensure the right cultural and skill fit for
                organizations
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We have experience working with corporate clients and understand
                the importance of timely closures, compliance, and professional
                coordination.
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

      {/* Business Credentials */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl border border-border bg-muted/40 p-10 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Business Credentials & Compliance
            </h2>

            <div className="space-y-3 text-foreground/80 text-lg">
              <p>✔ MSME / Udyam Registered Enterprise</p>
              <p>
                ✔ Udyam Registration Date: <strong>09 January 2025</strong>
              </p>
              <p>
                ✔ GST Registration:{" "}
                <span className="italic">
                  Not applicable as per current regulations
                </span>
              </p>
            </div>
          </motion.div>
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

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl overflow-hidden bg-muted border border-border hover:border-secondary/50 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8">
                  {/* Avatar */}
                  <motion.div
                    className="text-7xl mb-6 text-center flex justify-center overflow-hidden rounded-full"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Image
                      src={member.image}
                      alt={`${member.name} Picture`}
                      width={200}
                      height={100}
                      className="rounded-full object-cover"
                    />
                  </motion.div>

                  {/* Name and Role */}
                  <h3 className="text-2xl font-bold text-foreground mb-1 text-center">
                    {member.name}
                  </h3>
                  <p className="text-secondary font-semibold text-center mb-4">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>

                  {/* Expertise */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground/60 uppercase mb-3 text-center">
                      Expertise
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3 border-t border-border pt-6">
                    <motion.button
                      className="p-2 rounded-lg hover:bg-secondary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 text-secondary" />
                      </Link>
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg hover:bg-secondary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="w-5 h-5 text-secondary" />
                      </Link>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
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
              Our Team Culture
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We believe in building a workplace where innovation,
              collaboration, and personal growth thrive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Collaboration",
                description:
                  "We work together to achieve common goals and support each other.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, every day.",
              },
              {
                title: "Innovation",
                description:
                  "We embrace new ideas and continuously improve our services.",
              },
              {
                title: "Integrity",
                description:
                  "We conduct business with honesty and maintain the highest ethics.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-xl bg-background border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2 }}
                >
                  {idx === 0 && "🤝"}
                  {idx === 1 && "⭐"}
                  {idx === 2 && "💡"}
                  {idx === 3 && "🛡️"}
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground/70 text-sm">
                  {value.description}
                </p>
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
              "Industry-leading expertise with 3+ years of experience",
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
