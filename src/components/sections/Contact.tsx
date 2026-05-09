'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function ContactPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const phoneNumber = '22943135418';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `Bonjour, je vous contacte depuis le site Programme Futur.%0A%0A
Nom : ${form.name}%0A
Email : ${form.email}%0A
Message : ${form.message}`;

        const url = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(url, '_blank');
    };

    return (
        <main className="bg-white text-[#24324d] min-h-screen">
            {/* HERO */}
            <section className="py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Contactez-nous
                </h1>
                <p className="text-[#24324d]/60 max-w-2xl mx-auto">
                    Une question, une préoccupation ou un projet ? Notre équipe
                    est disponible pour vous répondre.
                </p>
            </section>

            {/* CONTENT */}
            <section className="max-w-7xl mx-auto px-6 pb-20 grid lg:px-24 lg:grid-cols-2 gap-14">
                {/* INFOS */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold">Nos coordonnées</h2>

                    <div className="space-y-5 text-[#24324d]/70">
                        <div className="flex items-start gap-4">
                            <IconMapPin className="text-[#65b3d9]" />
                            <p>
                                Godomey 14, Bénin
                                <br />
                                Immeuble du supermarché Ô Bénin
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <IconPhone className="text-[#65b3d9]" />
                            <Link href="tel:+22943135418">
                                +229 43 13 54 18
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <IconMail className="text-[#65b3d9]" />
                            <Link href="mailto:programmefutur@gmail.com">
                                programmefutur@gmail.com
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <IconBrandWhatsapp className="text-[#65b3d9]" />
                            <Link
                                href="https://wa.me/22943135418"
                                target="_blank"
                            >
                                Discuter sur WhatsApp
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FORMULAIRE */}
                <div className="bg-white/5 border border-[#24324d]/10 p-8 rounded-2xl backdrop-blur">
                    <h2 className="text-2xl font-semibold mb-6">
                        Envoyer un message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            placeholder="Votre nom"
                            required
                            className="w-full bg-white/10 border border-[#24324d]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#65b3d9]"
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />

                        <input
                            type="email"
                            placeholder="Votre email"
                            required
                            className="w-full bg-white/10 border border-[#24324d]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#65b3d9]"
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />

                        <textarea
                            placeholder="Votre message"
                            required
                            rows={5}
                            className="w-full bg-white/10 border border-[#24324d]/10 rounded-lg px-4 py-3 focus:outline-none focus:border-[#65b3d9]"
                            onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                            }
                        />

                        <button
                            type="submit"
                            className="w-full bg-[#65b3d9] hover:bg-[#4a9bc2] transition-colors rounded-lg py-3 font-medium"
                        >
                            Envoyer sur WhatsApp
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
