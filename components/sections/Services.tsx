'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { servicesData } from '@/data/services';
import { motion } from 'framer-motion';

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
        transition: { duration: 0.5 },
    },
};

export function Services() {
    return (
        <section id="services" className="py-20 bg-secondary/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Nos Services
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Des solutions complètes pour tous vos besoins en plomberie résidentielle et commerciale.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {servicesData.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <Card className="h-full border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 group overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300 z-10" />
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20 p-2 rounded-lg bg-background/90 text-primary shadow-sm">
                                        <service.icon size={24} />
                                    </div>
                                </div>
                                <CardHeader className="pt-4">
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
