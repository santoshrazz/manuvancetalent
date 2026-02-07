'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Review {
    id?: string;
    name: string;
    company: string;
    rating: number;
    comment: string;
}

const initialReviews: Review[] = [
    {
        id: '1',
        name: 'Amit Sharma',
        company: 'TechNova Solutions Pvt Ltd',
        rating: 5,
        comment:
            'Elite Talent Solutions helped us find the perfect candidates in record time. Their professionalism and expertise are unmatched.',
    },
    {
        id: '2',
        name: 'Priya Verma',
        company: 'Global FinServe India',
        rating: 5,
        comment:
            'Outstanding service! They understood our specific hiring needs and delivered qualified candidates quickly.',
    },
    {
        id: '3',
        name: 'Rahul Mehta',
        company: 'Creative Minds Studio',
        rating: 4,
        comment:
            'Great experience with their recruitment team. Very responsive and professional throughout the entire process.',
    },
    {
        id: '4',
        name: 'Neha Iyer',
        company: 'Enterprise Tech Solutions',
        rating: 5,
        comment:
            'Best staffing agency we have worked with. Their attention to detail and candidate quality is exceptional.',
    },
];


export function Reviews() {
    const [reviews, setReviews] = useState<Review[]>(initialReviews);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        rating: 5,
        comment: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'rating' ? parseInt(value) : value,
        }));
    };

    const handleSubmitReview = async (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.comment) {
            alert('Please fill in all required fields');
            return;
        }

        const newReview: Review = {
            name: formData.name,
            company: formData.company || 'Valued Client',
            rating: formData.rating,
            comment: formData.comment,
        };

        const response = await fetch("/api/ratings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview),
        });
        if (response.ok) {
            setFormData({ name: '', company: '', rating: 5, comment: '' });
            setShowForm(false);
        };
    };

    const averageRating =
        reviews.length > 0
            ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
            : 0;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const },
        },
    };

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0f3b6b] mb-4">
                        Client Reviews & Ratings
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear what our clients have to say about our services and expertise in staffing
                        solutions
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={24}
                                    className="fill-[#00a8cc] text-[#00a8cc]"
                                />
                            ))}
                        </div>
                        <div>
                            <p className="text-3xl font-bold text-[#0f3b6b]">{averageRating}</p>
                            <p className="text-gray-600 text-sm">Based on {reviews.length} reviews</p>
                        </div>
                    </div>
                </motion.div>

                {/* Reviews Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                >
                    {reviews.slice(0, 4).map((review) => (
                        <motion.div
                            key={review.id}
                            variants={itemVariants}
                            className="bg-gradient-to-br from-[#f8f9fa] to-[#e8f0f7] p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div>
                                    <h3 className="font-bold text-[#0f3b6b] text-lg">{review.name}</h3>
                                    <p className="text-sm text-gray-600">{review.company}</p>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={`${i < review.rating
                                                ? 'fill-[#00a8cc] text-[#00a8cc]'
                                                : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 mb-3 text-sm leading-relaxed">{review.comment}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Submit Review CTA */}
                {!showForm ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-[#0f3b6b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0a2a50] transition-colors duration-300 inline-block"
                        >
                            Share Your Review
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto bg-gradient-to-br from-[#f8f9fa] to-[#e8f0f7] p-8 rounded-lg border border-[#00a8cc]/20"
                    >
                        <h3 className="text-2xl font-bold text-[#0f3b6b] mb-6">Submit Your Review</h3>
                        <form onSubmit={handleSubmitReview} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#0f3b6b] mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a8cc] focus:border-transparent outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0f3b6b] mb-2">
                                        Company/Organization
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder="Your company"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a8cc] focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#0f3b6b] mb-2">
                                    Rating *
                                </label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() =>
                                                setFormData((prev) => ({ ...prev, rating: star }))
                                            }
                                            className="focus:outline-none transition-transform duration-200 hover:scale-110"
                                        >
                                            <Star
                                                size={32}
                                                className={`${star <= formData.rating
                                                    ? 'fill-[#00a8cc] text-[#00a8cc]'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#0f3b6b] mb-2">
                                    Your Review *
                                </label>
                                <textarea
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleInputChange}
                                    placeholder="Share your experience with our services..."
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a8cc] focus:border-transparent outline-none transition-all resize-none"
                                    required
                                />
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button
                                    type="submit"
                                    className="flex-1 bg-[#0f3b6b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#0a2a50] transition-colors duration-300"
                                >
                                    Submit Review
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="flex-1 bg-gray-300 text-[#0f3b6b] px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}

                {/* View All Reviews Link */}
                {reviews.length > 4 && !showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mt-8"
                    >
                        <button className="text-[#00a8cc] font-semibold hover:text-[#0f3b6b] transition-colors duration-300">
                            View all {reviews.length} reviews →
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
