'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Briefcase, Users, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Recruitment Solutions',
    description: 'Source and place top talent across multiple industries with our expert recruitment services.',
    icon: Briefcase,
    color: 'from-primary/20 to-secondary/20',
  },
  {
    title: 'Payroll Services',
    description: 'Streamline your HR operations with our comprehensive payroll management solutions.',
    icon: BarChart3,
    color: 'from-secondary/20 to-accent/20',
  },
  {
    title: 'Staffing Solutions',
    description: 'Build flexible and scalable teams with our contractual and temporary staffing services.',
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
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive staffing and recruitment solutions tailored to meet your business needs
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

                  <motion.div
                    className="flex items-center text-secondary font-semibold text-sm group-hover:gap-2 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all transform hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
