"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, MessageSquare, User } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";

const articles = [
    {
        id: 1,
        title: "Finding Strength in Times of Uncertainty",
        excerpt:
            "Life often throws challenges our way that test our faith. Discover how to remain anchored when the storms of life arise...",
        author: "Pastor James Mitchell",
        date: "Dec 28, 2024",
        category: "Faith",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
        comments: 12,
    },
    {
        id: 2,
        title: "The Power of Community Worship",
        excerpt:
            "There is something unique that happens when we gather together in one spirit. Explore why community is vital for spiritual growth...",
        author: "Sarah Johnson",
        date: "Dec 24, 2024",
        category: "Community",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        comments: 8,
    },
    {
        id: 3,
        title: "Building a Legacy for the Next Generation",
        excerpt:
            "How are we investing in the youth of today? A deep dive into our mission of anchoring generations in the Word of God...",
        author: "Michael Chen",
        date: "Dec 15, 2024",
        category: "Missions",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
        comments: 15,
    },
];

export function BlogSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="blog" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase block mb-4">
                            Insights & Articles
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                            From Our <span className="text-primary">Journal</span>
                        </h2>
                        <div className="w-24 h-1 bg-primary rounded-full mt-6" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <Button
                            variant="outline"
                            size="lg"
                            className="group border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 rounded-xl"
                        >
                            View All Articles
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                </div>

                {/* Blog grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex flex-col group h-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                                        {article.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold mb-4 uppercase">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <MessageSquare className="w-3.5 h-3.5 text-primary" />
                                        <span>{article.comments} Comments</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">
                                    {article.title}
                                </h3>

                                <p className="text-slate-600 mb-8 line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                                            <User className="w-4 h-4 text-slate-500" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-700">
                                            {article.author}
                                        </span>
                                    </div>
                                    <button className="text-primary font-bold text-sm flex items-center gap-1 transition-all group-hover:gap-2">
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
