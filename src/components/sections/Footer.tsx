import { Send, Copyright } from "lucide-react";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/formations", label: "Formations" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/contacts", label: "Contacts" },
    { href: "/inscription", label: "Inscription" },
];

const socialLinks = [
    {
        href: "https://www.facebook.com/profile.php?id=100093613764861",
        icon: IconBrandFacebook,
        label: "Facebook",
    },
    {
        href: "https://www.instagram.com/programme_futur",
        icon: IconBrandInstagram,
        label: "Instagram",
    },
    { href: "#", icon: IconBrandLinkedin, label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer className="bg-[#24324d] text-white">
            <div className="md:flex gap-8 p-8 md:p-12 lg:p-16">
                <article className="mb-8 md:w-1/3 flex flex-col items-center md:items-start gap-2">
                    <Image
                        src="/logo.png"
                        width={64}
                        height={64}
                        className="w-16 h-16"
                        alt="Programme FUTUR"
                    />
                    <h1 className="font-bold text-lg">Programme FUTUR</h1>
                </article>

                <article className="mb-8 md:w-1/3">
                    <h2 className="font-bold text-sm uppercase tracking-wider mb-4">Liens utiles</h2>
                    <ul className="space-y-2 text-sm text-white/70">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className="hover:text-white transition-colors">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </article>

                <article className="mb-8 md:w-1/3">
                    <h2 className="font-bold text-sm uppercase tracking-wider mb-4">Newsletter</h2>
                    <form className="flex gap-2 mb-4">
                        <Input
                            type="email"
                            placeholder="Votre adresse e-mail"
                            required
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-full"
                        />
                        <Button
                            type="submit"
                            size="icon"
                            className="bg-[#65b3d9] hover:bg-[#4a9bc2] rounded-full shrink-0"
                        >
                            <Send className="w-4 h-4 rotate-45" />
                        </Button>
                    </form>
                    <p className="text-sm text-white/70 mb-6">
                        Restez connecté au Programme FUTUR où que vous soyez.
                    </p>
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                            >
                                <Icon className="w-4 h-4" />
                            </Link>
                        ))}
                    </div>
                </article>
            </div>

            <div className="flex items-center justify-center py-4 text-sm border-t border-white/20 gap-1">
                <Copyright className="w-4 h-4" />
                <span>2024 Programme FUTUR</span>
            </div>
        </footer>
    );
}
