import Link from "next/link";
import {
    IconBrandFacebook,
    IconBrandWhatsapp,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconMail,
    IconPhone,
} from "@tabler/icons-react";

const socials = [
    { href: "https://www.facebook.com/profile.php?id=100093613764861", icon: IconBrandFacebook, label: "Facebook" },
    { href: "https://wa.me/22943135418", icon: IconBrandWhatsapp, label: "WhatsApp" },
    { href: "https://www.instagram.com/programme_futur", icon: IconBrandInstagram, label: "Instagram" },
    { href: "#", icon: IconBrandLinkedin, label: "LinkedIn" },
];

export default function TopHeader() {
    return (
        <div className="bg-[#1a2740] text-white text-xs" id="topHeader">
            <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between gap-4">

                <div className="hidden md:flex items-center gap-3">
                    {socials.map(({ href, icon: Icon, label }) => (
                        <Link
                            key={label}
                            href={href}
                            target="_blank"
                            aria-label={label}
                            className="text-white/60 hover:text-[#65b3d9] transition-colors"
                        >
                            <Icon className="w-4 h-4" />
                        </Link>
                    ))}
                </div>

                <p className="text-[#65b3d9] font-semibold tracking-widest uppercase text-[10px] md:text-xs">
                    Innovation — Transformation — Avenir
                </p>

                <div className="hidden md:flex items-center gap-4 text-white/60">
                    <Link
                        href="mailto:programmefutur@gmail.com"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                        <IconMail className="w-3.5 h-3.5" />
                        <span>programmefutur@gmail.com</span>
                    </Link>
                    <Link
                        href="tel:+22943135418"
                        className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                        <IconPhone className="w-3.5 h-3.5" />
                        <span>+229 43 13 54 18</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}
