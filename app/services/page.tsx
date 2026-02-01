"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const serviceDetails = [
  {
    id: "recruitment",
    title: "Recruitment Solutions",
    subtitle: "Find Your Perfect Team",
    description:
      "Our expert recruitment services connect you with top-tier talent across industries. We handle the entire process from sourcing to placement.",
    icon: Briefcase,
    features: [
      "Executive Search & Selection",
      "Technical Talent Acquisition",
      "Sales & Marketing Recruitment",
      "Entry-Level & Fresher Placement",
      "Industry-Specific Expertise",
      "Confidential Searches",
    ],
    benefits: [
      "Access to vetted candidate pool",
      "Reduced hiring time and costs",
      "Expert consultation at every stage",
      "Flexible engagement models",
      "Guaranteed candidate quality",
    ],
    color: "from-primary/20 to-secondary/20",
    accentColor: "primary",
  },
  {
    id: "payroll",
    title: "Payroll Services",
    subtitle: "Streamline Your HR Operations",
    description:
      "Comprehensive payroll management solutions that ensure accuracy, compliance, and efficiency in your HR operations.",
    icon: BarChart3,
    features: [
      "Salary Processing & Management",
      "Tax Compliance & Filing",
      "Statutory Deductions",
      "Payroll Analytics & Reporting",
      "Multi-location Support",
      "Employee Self-Service Portal",
    ],
    benefits: [
      " 100% accurate payroll processing",
      "Complete compliance with regulations",
      "Reduced administrative burden",
      "Data security and privacy",
      "Scalable solutions for growth",
    ],
    color: "from-secondary/20 to-accent/20",
    accentColor: "secondary",
  },
  {
    id: "staffing",
    title: "Contractual Staffing",
    subtitle: "Flexible Workforce Solutions",
    description:
      "Build flexible and scalable teams with our contractual and temporary staffing services. Perfect for seasonal peaks and project-based work.",
    icon: Users,
    features: [
      "Temporary Staff Placement",
      "Contract-to-Permanent Options",
      "Seasonal Staffing",
      "Project-Based Resources",
      "Multi-Skilled Workers",
      "Quick Turnaround",
    ],
    benefits: [
      "Flexible workforce scaling",
      "Reduced labor costs",
      "No long-term commitments",
      "Rapid resource deployment",
      "Risk-free trial periods",
    ],
    color: "from-accent/20 to-primary/20",
    accentColor: "accent",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-12 pb-20 bg-linear-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Our <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive staffing and recruitment solutions tailored to your
              business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className={`group rounded-2xl bg-linear-to-br ${service.color} p-8 border border-border hover:border-secondary/50 transition-all cursor-pointer`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="mb-6 w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-foreground/70 mb-6">{service.subtitle}</p>

                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center text-secondary font-semibold text-sm group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Service Details */}
      {serviceDetails.map((service) => {
        const Icon = service.icon;
        return (
          <section
            key={service.id}
            id={service.id}
            className="py-20 bg-background border-t border-border overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-secondary font-semibold uppercase text-sm">
                      Service Details
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>

                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-foreground/70 text-sm flex items-start gap-2"
                          >
                            <span className="text-secondary mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-secondary" />
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li
                            key={idx}
                            className="text-foreground/70 text-sm flex items-start gap-2"
                          >
                            <span className="text-secondary mt-1">✓</span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                  className="relative h-96"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${service.color} rounded-2xl`}
                    animate={{
                      boxShadow: [
                        "0 0 60px rgba(0, 168, 204, 0.1)",
                        "0 0 100px rgba(0, 212, 255, 0.2)",
                        "0 0 60px rgba(0, 168, 204, 0.1)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <div className="absolute inset-4 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, 20, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-6xl"
                    >
                      {service.id === "recruitment" && "🎯"}
                      {service.id === "payroll" && "💼"}
                      {service.id === "staffing" && "👥"}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

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
            Ready to Get Started?
          </motion.h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discover how our services can transform your
            business.
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
