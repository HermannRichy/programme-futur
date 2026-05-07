"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/formations", label: "Formations" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/contacts", label: "Contacts" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={40}
                        alt="Programme FUTUR"
                        className="w-10 h-10"
                    />
                    <span className="font-bold text-[#24324d] hidden sm:block">Programme FUTUR</span>
                </Link>

                <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-[#24324d]">
                    {navLinks.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="hover:text-[#65b3d9] transition-colors"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Button
                    asChild
                    className="hidden md:inline-flex bg-[#65b3d9] hover:bg-[#4a9bc2] text-white rounded-xl px-6"
                >
                    <Link href="/inscription">Inscription</Link>
                </Button>

                <button
                    className="md:hidden p-2 text-[#24324d] rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-white border-t px-4 pb-4">
                    <ul className="flex flex-col gap-1 pt-2">
                        {navLinks.map(({ href, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={cn(
                                        "block px-3 py-2 rounded-lg text-sm font-medium text-[#24324d]",
                                        "hover:bg-[#65b3d9]/10 hover:text-[#65b3d9] transition-colors"
                                    )}
                                    onClick={() => setOpen(false)}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Button
                                asChild
                                className="w-full bg-[#65b3d9] hover:bg-[#4a9bc2] text-white rounded-xl"
                            >
                                <Link href="/inscription" onClick={() => setOpen(false)}>
                                    Inscription
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
