'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send } from 'lucide-react';

export function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission
        alert('Message envoyé ! (Simulation)');
    };

    return (
        <section id="contact" className="py-24 bg-card relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-xl overflow-hidden border">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Contact Info Side */}
                        <div className="bg-primary/5 p-10 flex flex-col justify-between space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-foreground">Contactez-nous</h3>
                                <p className="text-muted-foreground mb-8">
                                    Une urgence ? Un devis ? N&apos;attendez plus, nous intervenons rapidement.
                                </p>

                                <div className="space-y-6">
                                    <a href="tel:0612345678" className="flex items-center p-4 bg-background rounded-xl shadow-sm border hover:border-primary transition-colors group">
                                        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">Par Téléphone</p>
                                            <p className="text-primary font-bold text-lg">06 12 34 56 78</p>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/33612345678" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-background rounded-xl shadow-sm border hover:border-green-500 transition-colors group">
                                        <div className="bg-green-100 p-3 rounded-full mr-4 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                            <MessageCircle size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">Sur WhatsApp</p>
                                            <p className="text-green-600 font-bold">Discutez en direct</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="text-sm text-muted-foreground">
                                <p>Zone d&apos;intervention : Paris et Île-de-France.</p>
                                <p>Disponible 24h/24 et 7j/7.</p>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="p-10">
                            <h3 className="text-2xl font-bold mb-6 text-foreground">Envoyer un message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">Nom</label>
                                        <Input id="name" placeholder="Votre nom" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Téléphone</label>
                                        <Input id="phone" type="tel" placeholder="06..." required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                    <Input id="email" type="email" placeholder="votre@email.com" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <Textarea id="message" placeholder="Décrivez votre problème..." className="min-h-[120px]" required />
                                </div>
                                <Button type="submit" className="w-full h-12 text-lg">
                                    <Send className="mr-2 h-4 w-4" />
                                    Envoyer ma demande
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
