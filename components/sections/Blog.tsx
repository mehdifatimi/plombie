'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import Link from 'next/link';

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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

export function Blog() {
    return (
        <section id="blog" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Actualités & Conseils
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl">
                            Retrouvez tous nos conseils d&apos;experts pour entretenir vos installations et économiser sur vos factures d&apos;eau.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex gap-2 group">
                        Voir tous les articles
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post) => (
                        <motion.div key={post.id} variants={itemVariants}>
                            <Card className="h-full flex flex-col border border-muted/20 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 group bg-card overflow-hidden">
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300 z-10" />
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <CardHeader className="pt-6">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-primary" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} className="text-primary" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        href={`#`}
                                        className="inline-flex items-center text-primary font-semibold text-sm hover:underline gap-1 group/link"
                                    >
                                        Lire l&apos;article
                                        <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 md:hidden">
                    <Button variant="outline" className="w-full gap-2">
                        Voir tous les articles
                        <ChevronRight size={18} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
