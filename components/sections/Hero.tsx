'use client';

import { getButtonClasses } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
                style={{ backgroundImage: 'url("/header-bg.png")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/20 to-slate-900 z-0" />

            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium mb-4 backdrop-blur-sm">
                        Disponibilité 24/7 • Intervention en 30 min
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        Plombier Professionnel <br />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-sky-400">
                            Expert & Rapide
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Votre expert de confiance pour toutes réparations, installations et urgences plomberie.
                        Service de qualité garanti et devis gratuit.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link
                            href="tel:0762818313"
                            className={getButtonClasses('primary', 'lg', 'w-full sm:w-auto text-lg px-8 h-14')}
                        >
                            <Phone className="mr-2 h-5 w-5" />
                            Appeler maintenant
                        </Link>
                        <Link
                            href="#contact"
                            className={getButtonClasses('outline', 'lg', 'w-full sm:w-auto text-lg px-8 h-14 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40')}
                        >
                            Devis Gratuit
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Shapes/Blobs for background visual interest */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
