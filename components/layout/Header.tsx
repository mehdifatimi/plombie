'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'À Propos', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 z-50">
                    <div className="relative h-20 w-64">
                        <Image
                            src="/logo.png"
                            alt="PlombierPro Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                {/* Desktop Nav - Centered */}
                <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-base font-medium transition-colors hover:text-primary",
                                scrolled ? "text-slate-900" : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button - Right */}
                <div className="hidden md:flex items-center">
                    <Button variant={scrolled ? "primary" : "secondary"} size="sm" className="gap-2 shadow-sm">
                        <Phone size={16} />
                        07 62 81 83 13
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} className={scrolled ? "text-foreground" : "text-foreground md:text-white"} />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 w-full bg-background border-b shadow-lg md:hidden pt-20 pb-6 px-4 flex flex-col space-y-4"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-foreground py-2 border-b border-muted/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full gap-2 mt-4" size="lg">
                                <Phone size={18} />
                                Appeler maintenant
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
