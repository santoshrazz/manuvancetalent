"use client";

import React from "react";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    type: "employer",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon.",
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        type: "employer",
      });
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7065589214",
      description: "Mon-Fri, 9am-6pm IST",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@manuvance.com",
      description: "We reply within 24 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "C-403, Shani Bazar Rd, Block B, Nathu Pura, Burari",
      description: "New Delhi, Delhi - 110084",
    },
    {
      icon: Clock,
      title: "Hours",
      value: "9:00 AM - 6:00 PM",
      description: "Indian Standard Time",
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
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded-xl bg-muted border border-border text-center hover:border-secondary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-secondary" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-secondary font-semibold text-sm mb-1">
                    {info.value}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form */}
          <motion.div
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    I am a:
                  </label>
                  <div className="flex gap-4">
                    {[
                      { value: "employer", label: "Employer" },
                      { value: "jobseeker", label: "Job Seeker" },
                    ].map((option) => (
                      <motion.label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={option.value}
                          checked={formData.type === option.value}
                          onChange={handleChange}
                          className="w-4 h-4 accent-secondary"
                        />
                        <span className="text-foreground">{option.label}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Rajesh Kumar"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rajesh.kumar@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9999999999"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                  />
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                  />
                </motion.div>

                {/* Subject */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  For Employers
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Looking for top talent? Our recruitment specialists can help
                  you find the perfect candidates for your team. Contact us to
                  discuss your hiring needs.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>✓ Expert talent matching</li>
                  <li>✓ Fast placement process</li>
                  <li>✓ Comprehensive HR solutions</li>
                  <li>✓ 24/7 dedicated support</li>
                </ul>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  For Job Seekers
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  Ready to advance your career? Our team connects you with top
                  companies looking for talent like you. Submit your resume and
                  let's find your next opportunity.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>✓ Access to exclusive opportunities</li>
                  <li>✓ Career guidance and support</li>
                  <li>✓ Professional development resources</li>
                  <li>✓ Direct connection with employers</li>
                </ul>
              </div>

              <motion.div
                className="p-6 rounded-xl bg-secondary/10 border border-secondary/30"
                whileHover={{ borderColor: "#00a8cc" }}
              >
                <h4 className="font-semibold text-foreground mb-2">
                  Quick Response
                </h4>
                <p className="text-sm text-foreground/70">
                  We typically respond to inquiries within 24 business hours.
                  For urgent matters, please call us directly.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Location
            </h2>
            <p className="text-lg text-foreground/70">
              Visit us at our headquarters in India
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden border border-border h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766383.57766797!2d60.983946918825104!3d19.727006835911194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bc00ffb35f76b7%3A0x9624f0414c40b17a!2sManuvance%20talent%20solutions!5e0!3m2!1sen!2sin!4v1769943063315!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}
