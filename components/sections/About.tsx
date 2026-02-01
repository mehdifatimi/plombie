'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';
import Image from 'next/image';

const features = [
    "Intervention rapide 24/7",
    "Devis gratuit et détaillé",
    "Garantie pièce et main d'œuvre",
    "Artisans qualifiés et certifiés",
    "Tarifs transparents sans surprise",
    "Respect des délais et des lieux"
];

const stats = [
    { icon: Clock, value: "15+", label: "Années d'expérience" },
    { icon: Users, value: "2000+", label: "Clients satisfaits" },
    { icon: Award, value: "100%", label: "Garantie" },
];

export function About() {
    return (
        <section id="about" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                                Votre Plombier de Confiance
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Depuis plus de 15 ans, nous mettons notre expertise au service des particuliers et professionnels.
                                Notre engagement : fournir un travail de qualité, durable et aux normes, le tout avec le sourire.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span className="text-foreground font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 grid grid-cols-3 gap-8 border-t">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start space-x-2 text-primary mb-2">
                                        <stat.icon className="h-6 w-6" />
                                        <span className="text-2xl font-bold">{stat.value}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070"
                            alt="Plombier professionnel au travail"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
