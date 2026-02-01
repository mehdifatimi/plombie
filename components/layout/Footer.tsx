import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, Wrench } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="relative h-16 w-48">
                                <Image
                                    src="/logo.png"
                                    alt="PlombierPro Logo"
                                    fill
                                    className="object-contain" // Keep aspect ratio
                                />
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Votre expert en plomberie pour tous vos besoins d'installation, réparation et entretien. Disponible 24/7 pour les urgences.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">Débouchage</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Recherche de fuites</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Chauffe-eau</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Rénovation salle de bain</Link></li>
                            <li><Link href="#blog" className="hover:text-primary transition-colors">Actualités & Conseils</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li className="flex items-start space-x-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <span>07 62 81 83 13</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <span>contact@plombierpro.fr</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary shrink-0" />
                                <span>12 Rue du Plombier, 75000 Paris</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Horaires</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li className="flex justify-between">
                                <span>Lundi - Vendredi</span>
                                <span className="text-white">8h - 20h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Samedi</span>
                                <span className="text-white">9h - 18h</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Dimanche</span>
                                <span className="text-primary font-medium">Urgences 24/7</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} PlombierPro. Tous droits réservés.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
