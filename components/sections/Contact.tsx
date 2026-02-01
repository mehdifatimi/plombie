'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { servicesData } from '@/data/services';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Send } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `📩 Nouvelle demande de service

👤 Nom : ${formData.name}
📞 Téléphone : ${formData.phone}
🛠️ Service : ${formData.service}
📧 Email : ${formData.email || 'Non renseigné'}

📝 Message :
${formData.message}`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/33762818313?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
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
                                    <a href="tel:0762818313" className="flex items-center p-4 bg-background rounded-xl shadow-sm border hover:border-primary transition-colors group">
                                        <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">Par Téléphone</p>
                                            <p className="text-primary font-bold text-lg">07 62 81 83 13</p>
                                        </div>
                                    </a>

                                    <a href="https://wa.me/33762818313" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-background rounded-xl shadow-sm border hover:border-green-500 transition-colors group">
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
                                        <Input
                                            id="name"
                                            placeholder="Votre nom"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-foreground">Téléphone</label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="06..."
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-medium text-foreground">Service concerné</label>
                                    <select
                                        id="service"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Sélectionnez un service</option>
                                        {servicesData.map((service, index) => (
                                            <option key={index} value={service.title}>{service.title}</option>
                                        ))}
                                        <option value="autre">Autre demande</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="votre@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Décrivez votre problème..."
                                        className="min-h-[120px]"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
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
