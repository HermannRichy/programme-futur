import Image from "next/image";
import Link from "next/link";
import {
    IconBrandFacebook,
    IconBrandWhatsapp,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconCircleCaretDownFilled,
} from "@tabler/icons-react";

export default function TopHeader() {
    return (
        <section
            className="px-4 py-2 flex items-center justify-between bg-[#24324d] text-white"
            id="topHeader"
        >
            <div className="hidden md:flex items-center gap-1">
                <Link
                    href="https://www.facebook.com/profile.php?id=100093613764861"
                    target="_blank"
                    aria-label="Facebook"
                    className="hover:text-[#65b3d9] transition-colors"
                >
                    <IconBrandFacebook className="w-5 h-5" />
                </Link>
                <Link
                    href="https://wa.me/22943135418"
                    target="_blank"
                    aria-label="WhatsApp"
                    className="hover:text-[#65b3d9] transition-colors"
                >
                    <IconBrandWhatsapp className="w-5 h-5" />
                </Link>
                <Link
                    href="https://www.instagram.com/programme_futur"
                    target="_blank"
                    aria-label="Instagram"
                    className="hover:text-[#65b3d9] transition-colors"
                >
                    <IconBrandInstagram className="w-5 h-5" />
                </Link>
                <Link
                    href="#"
                    target="_blank"
                    aria-label="LinkedIn"
                    className="hover:text-[#65b3d9] transition-colors"
                >
                    <IconBrandLinkedin className="w-5 h-5" />
                </Link>
            </div>

            <p className="text-xs md:text-sm text-[#65b3d9] font-semibold tracking-wider">
                INNOVATION — TRANSFORMATION — AVENIR
            </p>

            <div className="hidden md:flex items-center gap-1">
                <Image
                    alt="Drapeau français"
                    src="/images/flag-fr.png"
                    className="w-6 h-6 rounded"
                    width={24}
                    height={24}
                />
                <IconCircleCaretDownFilled className="w-4 h-4" />
            </div>
        </section>
    );
}
