'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, Users, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Telecalling & Sales Professionals',
    description:
      'We provide trained telecallers and sales professionals to drive customer engagement, lead conversion, and revenue growth.',
    icon: Briefcase,
    color: 'from-primary/20 to-secondary/20',
  },
  {
    title: 'Graphic Designers',
    description:
      'Hire creative graphic designers skilled in branding, social media creatives, marketing assets, and visual storytelling.',
    icon: BarChart3,
    color: 'from-secondary/20 to-accent/20',
  },
  {
    title: 'Website Designers',
    description:
      'Get experienced website designers proficient in modern UI/UX, responsive layouts, and conversion-focused designs.',
    icon: Users,
    color: 'from-accent/20 to-primary/20',
  },
  {
    title: 'IT & Non-IT Professionals',
    description:
      'We source qualified IT and non-IT professionals across multiple domains to meet diverse business requirements.',
    icon: Users,
    color: 'from-primary/20 to-secondary/20',
  },
  {
    title: 'Freshers & Experienced Candidates',
    description:
      'From entry-level freshers to experienced professionals, we help you build balanced and scalable teams.',
    icon: Users,
    color: 'from-secondary/20 to-accent/20',
  },
  {
    title: 'Corporate & Private Sector Roles',
    description:
      'Specialized hiring solutions for corporate offices and private sector companies across operations, sales, and support roles.',
    icon: Users,
    color: 'from-accent/20 to-primary/20',
  },
];


export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Core <span className="text-secondary">Hiring Domains</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We support startups, growing businesses, and corporate organizations with
            reliable bulk and quality hiring solutions.
          </p>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-2">
            From CV screening to interviews and final onboarding, we manage the entire
            recruitment cycle with precision and accountability.
          </p>

        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-linear-to-br ${service.color} p-8 border border-border hover:border-secondary/50 transition-all cursor-pointer`}
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-secondary/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="mb-6 w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* <motion.div
                    className="flex items-center text-secondary font-semibold text-sm group-hover:gap-2 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        {/* CTA */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Employer CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all transform hover:scale-105"
          >
            Hire Manpower / Recruitment Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>

          {/* Job Seeker CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/10 transition-all transform hover:scale-105"
          >
            Apply for Jobs
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
