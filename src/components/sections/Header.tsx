'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/a-propos', label: 'À Propos' },
    { href: '/formations', label: 'Formations' },
    { href: '/realisations', label: 'Galerie' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                'bg-white sticky top-0 z-50 transition-shadow duration-200',
                scrolled ? 'shadow-md' : 'shadow-sm'
            )}
        >
            <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2.5 shrink-0">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={40}
                        alt="Programme FUTUR"
                        className="w-10 h-10 object-contain"
                    />
                    <div className="hidden sm:block leading-tight">
                        <span className="font-bold text-[#24324d] text-sm block">
                            Programme
                        </span>
                        <span className="font-bold text-[#65b3d9] text-sm block -mt-0.5">
                            FUTUR
                        </span>
                    </div>
                </Link>

                <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
                    {navLinks.map(({ href, label }) => {
                        const active = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={cn(
                                        'px-3 py-2 rounded-lg transition-colors',
                                        active
                                            ? 'text-[#65b3d9] font-semibold bg-[#65b3d9]/10'
                                            : 'text-[#24324d] hover:text-[#65b3d9] hover:bg-[#65b3d9]/5'
                                    )}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <Button
                    asChild
                    className="hidden md:inline-flex bg-[#febf24] hover:bg-[#e5aa10] text-[#24324d] font-semibold rounded-xl px-6 shadow-none"
                >
                    <Link href="/inscription">Inscription</Link>
                </Button>

                <button
                    className="md:hidden p-2 text-[#24324d] rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>
            </nav>

            {open && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-5">
                    <ul className="flex flex-col gap-0.5 pt-2">
                        {navLinks.map(({ href, label }) => {
                            const active = pathname === href;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={cn(
                                            'block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                                            active
                                                ? 'bg-[#65b3d9]/10 text-[#65b3d9] font-semibold'
                                                : 'text-[#24324d] hover:bg-gray-50'
                                        )}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="pt-3">
                            <Button
                                asChild
                                className="w-full bg-[#febf24] hover:bg-[#e5aa10] text-[#24324d] font-semibold rounded-xl shadow-none"
                            >
                                <Link href="/inscription">Inscription</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
