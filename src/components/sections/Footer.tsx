"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import {
    IconBrandFacebook,
    IconBrandWhatsapp,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconMail,
    IconPhone,
    IconMapPin,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/formations", label: "Formations" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/contact", label: "Contact" },
    { href: "/inscription", label: "Inscription" },
];

const socials = [
    {
        href: "https://www.facebook.com/profile.php?id=100093613764861",
        icon: IconBrandFacebook,
        label: "Facebook",
    },
    {
        href: "https://wa.me/22943135418",
        icon: IconBrandWhatsapp,
        label: "WhatsApp",
    },
    {
        href: "https://www.instagram.com/programme_futur",
        icon: IconBrandInstagram,
        label: "Instagram",
    },
    { href: "#", icon: IconBrandLinkedin, label: "LinkedIn" },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer className="bg-[#1a2740] text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png"
                            width={48}
                            height={48}
                            className="w-12 h-12 object-contain"
                            alt="Logo"
                        />
                        <div className="leading-tight">
                            <p className="font-bold text-base text-white">
                                Programme
                            </p>
                            <p className="font-bold text-base text-[#65b3d9]">
                                FUTUR
                            </p>
                        </div>
                    </Link>
                    <p className="text-sm text-white/60 leading-relaxed">
                        Transformer l&apos;éducation au Bénin en offrant aux
                        élèves une formation complète en numérique et en
                        technologie.
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                        {socials.map(({ href, icon: Icon, label }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#65b3d9] flex items-center justify-center transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
                        Liens utiles
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-[#65b3d9] opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
                        Contact
                    </h3>
                    <ul className="flex flex-col gap-4 text-sm text-white/60">
                        <li className="flex items-start gap-3">
                            <IconMapPin className="w-4 h-4 mt-0.5 text-[#65b3d9] shrink-0" />
                            <span>
                                Godomey 14, Bénin — Immeuble du supermarché Ô
                                Bénin
                            </span>
                        </li>
                        <li>
                            <Link
                                href="mailto:programmefutur@gmail.com"
                                className="flex items-center gap-3 hover:text-white transition-colors"
                            >
                                <IconMail className="w-4 h-4 text-[#65b3d9] shrink-0" />
                                programmefutur@gmail.com
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="tel:+22943135418"
                                className="flex items-center gap-3 hover:text-white transition-colors"
                            >
                                <IconPhone className="w-4 h-4 text-[#65b3d9] shrink-0" />
                                +229 43 13 54 18
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 text-white">
                        Newsletter
                    </h3>
                    <p className="text-sm text-white/60 mb-4 leading-relaxed">
                        Recevez nos actualités directement dans votre boîte
                        mail.
                    </p>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setEmail("");
                        }}
                        className="flex gap-2"
                    >
                        <Input
                            type="email"
                            placeholder="Votre e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-white/10 border-white/15 text-white placeholder:text-white/40 rounded-lg focus-visible:ring-[#65b3d9] h-9 text-sm"
                        />
                        <Button
                            type="submit"
                            size="icon"
                            className="bg-[#65b3d9] hover:bg-[#4a9bc2] rounded-lg h-9 w-9 shrink-0"
                        >
                            <Send className="w-4 h-4 rotate-45" />
                        </Button>
                    </form>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 md:px-10 h-12 flex items-center justify-between text-xs text-white/40">
                    <span>
                        © {new Date().getFullYear()} Programme FUTUR. Tous
                        droits réservés.
                    </span>
                    <span className="hidden sm:block">
                        Bénin, Afrique de l&apos;Ouest
                    </span>
                </div>
            </div>
        </footer>
    );
}
