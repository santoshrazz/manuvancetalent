'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Briefcase, DollarSign, ArrowRight, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const jobs = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc',
    location: 'San Francisco, CA',
    salary: '$120,000 - $160,000',
    type: 'Full-time',
    category: 'Technology',
    description:
      'Join our growing tech team and work on cutting-edge web applications using modern tech stack.',
    posted: '2 days ago',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    company: 'Global Solutions LLC',
    location: 'New York, NY',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    category: 'Marketing',
    description:
      'Lead marketing initiatives and drive brand growth for a Fortune 500 company.',
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'Analytics Pro',
    location: 'Remote',
    salary: '$80,000 - $110,000',
    type: 'Full-time',
    category: 'Analytics',
    description:
      'Analyze complex datasets and provide actionable insights to drive business decisions.',
    posted: '3 days ago',
  },
  {
    id: 4,
    title: 'UX/UI Designer',
    company: 'Creative Studio',
    location: 'Los Angeles, CA',
    salary: '$85,000 - $115,000',
    type: 'Full-time',
    category: 'Design',
    description:
      'Design beautiful and intuitive user interfaces for mobile and web applications.',
    posted: '5 days ago',
  },
  {
    id: 5,
    title: 'Sales Executive',
    company: 'Enterprise Solutions',
    location: 'Chicago, IL',
    salary: '$70,000 - $100,000',
    type: 'Full-time',
    category: 'Sales',
    description:
      'Drive sales growth and build relationships with key enterprise clients.',
    posted: '1 week ago',
  },
  {
    id: 6,
    title: 'Project Manager',
    company: 'Construction Corp',
    location: 'Seattle, WA',
    salary: '$95,000 - $125,000',
    type: 'Full-time',
    category: 'Management',
    description:
      'Oversee project timelines and lead cross-functional teams to successful project completion.',
    posted: '4 days ago',
  },
];

const categories = ['All', 'Technology', 'Marketing', 'Analytics', 'Design', 'Sales', 'Management'];

export default function JobsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

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
              Find Your Dream <span className="text-secondary">Job</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Browse our latest job opportunities from top companies across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by job title, company, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary text-foreground placeholder-muted-foreground"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <Filter className="w-5 h-5 text-muted-foreground mt-1" />
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-secondary text-white'
                      : 'bg-muted text-foreground hover:border-secondary/50 border border-transparent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-sm text-muted-foreground">
              Found <span className="font-semibold text-foreground">{filteredJobs.length}</span> job{' '}
              {filteredJobs.length !== 1 ? 'openings' : 'opening'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredJobs.length > 0 ? (
            <motion.div
              className="grid gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredJobs.map((job, idx) => (
                <motion.div
                  key={job.id}
                  className="group rounded-xl bg-muted border border-border hover:border-secondary/50 p-6 transition-all hover:shadow-lg"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="grid md:grid-cols-4 gap-6 items-start">
                    {/* Left Content */}
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-secondary font-semibold mb-3">{job.company}</p>

                      <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <motion.div
                          className="flex items-center gap-2 text-sm text-foreground/70"
                          whileHover={{ x: 5 }}
                        >
                          <MapPin className="w-4 h-4 text-secondary" />
                          {job.location}
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2 text-sm text-foreground/70"
                          whileHover={{ x: 5 }}
                        >
                          <Briefcase className="w-4 h-4 text-secondary" />
                          {job.type}
                        </motion.div>
                      </div>
                    </div>

                    {/* Right Content */}
                    <div>
                      <motion.div
                        className="flex items-center gap-2 text-sm font-semibold text-primary"
                        whileHover={{ x: 5 }}
                      >
                        <DollarSign className="w-4 h-4" />
                        <span className="whitespace-nowrap">{job.salary}</span>
                      </motion.div>
                      <p className="text-xs text-muted-foreground mt-2">{job.posted}</p>
                    </div>

                    {/* CTA */}
                    <div className="md:text-right">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-secondary/90 transition-all"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No Jobs Found</h3>
              <p className="text-foreground/70 mb-8">
                Try adjusting your search or filters to find more opportunities.
              </p>
              <motion.button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Apply?
          </motion.h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Submit your application today or contact us for more information about available positions.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
