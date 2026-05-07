import Image from "next/image";
import Link from "next/link";
import { IconBrandFacebook, IconBrandWhatsapp, IconBrandLinkedin, IconBrandInstagram, IconCircleCaretDownFilled } from '@tabler/icons-react';
export default function TopHeader () {
    return <section className="p-1 flex items-center justify-around bg-[#24324d] text-white" id="topHeader">
        <div className="hidden md:visible md:flex w-1/12 items-center justify-between">
            <Link href="https://www.facebook.com/profile.php?id=100093613764861" target="_blank">
                <IconBrandFacebook className="m-1"/>
            </Link>
            <Link href="https://wa.me/22943135418" target="_blank">
                <IconBrandWhatsapp className="m-1"/>
            </Link>
            <Link href="https://www.instagram.com/programme_futur" target="_blank">
                <IconBrandInstagram className="m-1"/>
            </Link>
            <Link href="#" target="_blank">
                <IconBrandLinkedin className="m-1"/>
            </Link>
        </div>
        <div className="text-[11px] text-center md:text-[16px] text-[#65b3d9] font-semibold">
            <p>INNOVATION - TRANSFORMATION - AVENIR</p>
        </div>
        <div className="hidden md:flex items-center justify-center">
            <Image alt="flag" src="/images/flag-fr.png" className="w-8 h-8" width={32} height={32}/>
            <IconCircleCaretDownFilled className="m-1"/>
        </div>
    </section>
}