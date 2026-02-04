"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Chandni Shakya",
    role: "Founder & CEO",
    bio: "With 20+ years in recruitment and talent management, Chandani founded Manuvance Talent Solutions to transform how companies find talent.",
    expertise: ["Recruitment Strategy", "Business Development", "Leadership"],
    icon: "👩‍💼",
  },
  {
    name: "Abhishek Rathore",
    role: "VP of Operations",
    bio: "Michael brings over 15 years of operational excellence expertise, ensuring seamless service delivery and client satisfaction.",
    expertise: ["Operations", "Process Optimization", "Scaling"],
    icon: "👨‍💼",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Recruitment",
    bio: "Emily is a passionate recruiter dedicated to connecting exceptional talent with their ideal roles and companies.",
    expertise: ["Talent Acquisition", "Executive Search", "Client Relations"],
    icon: "👩‍💼",
  },
  {
    name: "David Kim",
    role: "Payroll Services Manager",
    bio: "David ensures accurate, compliant, and efficient payroll processing for all our corporate clients with attention to detail.",
    expertise: ["Payroll Management", "Compliance", "Tax Planning"],
    icon: "👨‍💼",
  },
  {
    name: "Jessica Williams",
    role: "Senior Recruiter",
    bio: "Jessica specializes in technical and executive recruitment, with a proven track record of successful placements.",
    expertise: [
      "Technical Recruitment",
      "Executive Search",
      "Industry Networks",
    ],
    icon: "👩‍💼",
  },
  {
    name: "James Thompson",
    role: "HR Consultant",
    bio: "James provides strategic HR consulting services, helping companies optimize their workforce and operations.",
    expertise: ["HR Strategy", "Organization Development", "Training"],
    icon: "👨‍💼",
  },
];

export default function TeamPage() {
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
              Meet Our <span className="text-secondary">Expert Team</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Experienced professionals dedicated to connecting exceptional
              talent with innovative opportunities.
            </p>
          </motion.div>
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
                    className="text-7xl mb-6 text-center"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {member.icon}
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
                      <Linkedin className="w-5 h-5 text-secondary" />
                    </motion.button>
                    <motion.button
                      className="p-2 rounded-lg hover:bg-secondary/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="w-5 h-5 text-secondary" />
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

      {/* Achievements */}
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
              Our Achievements
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "10K+", label: "Successful Placements" },
              { number: "500+", label: "Partner Companies" },
              { number: "50+", label: "Industries Served" },
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                className="text-center p-8 rounded-xl bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl font-bold text-primary mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {achievement.number}
                </motion.div>
                <p className="text-foreground/70 font-medium">
                  {achievement.label}
                </p>
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
            Work with Our Expert Team
          </motion.h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our experienced professionals help you find the perfect talent
            or opportunity.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
