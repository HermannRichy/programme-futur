import {  Send, Facebook, Instagram, Linkedin, Copyright, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return <footer className="bg-[#24324d] text-white text-center md:text-left">
        <aside className="p-5 md:flex gap-5 md:p-10 lg:p-16">
            <article className="mb-4 md:w-1/3 text-center flex justify-center md:justify-start">
                <div>
                    <Image src="/logo.png"
                    width={80} height={80} className="w-20 h-20 m-auto" alt="Programme FUTUR"/>
                    <h1 className="font-bold">Programme <br/> FUTUR</h1>
                </div>
            </article>
            <article className="mb-4 md:w-1/3">
                <h2 className="font-bold">LIENS UTILES</h2><br/>
                <ul className="font-thin text-sm">
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/about">A Propos</Link></li>
                    <li><Link href="/formations">Formations</Link></li>
                    <li><Link href="/realisations">Réalisations</Link></li>
                    <li><Link href="/contacts">Contacts</Link></li>
                    <li><Link href="/inscription">Inscription</Link></li>
                </ul>
            </article>
            <article className="mb-4 md:w-1/3 ">
                <h2 className="font-bold">NEWSLETTER</h2><br/>
                <form>
                    <div className="flex items-center">
                        <input 
                            type="email" placeholder="Entrez votre adresse e-mail" required
                            className="w-3/4 mx-auto md:w-full h-10 rounded-3xl pl-4 text-[#24324d]"
                        />
                        <button type="submit" className="w-10 h-10 p-1 rounded-full bg-[#65b3d9] -left-14 md:-left-11 relative">
                            <Send className="rotate-45 h-8 w-8 text-[#24324d]" />
                        </button>
                    </div>
                </form><br/>
                <p className="font-thin text-sm">Restez connecter au Programme <br/> FUTUR où que vous soyez.</p><br/>
                <div className="flex items-center justify-between w-2/5 m-auto md:m-0">
                    <Link href="https://www.facebook.com/profile.php?id=100093613764861" target="_blank">
                        <Facebook className="m-1 w-7 h-7"/>
                    </Link>
                    {/* <Link href="https://wa.me/22943135418" target="_blank">
                        <Whatsapp className="m-1 w-7 h-7"/>
                    </Link> */}
                    <Link href="https://www.instagram.com/programme_futur" target="_blank">
                        <Instagram className="m-1 w-7 h-7"/>
                    </Link>
                    <Link href="#" target="_blank">
                        <Linkedin className="m-1 w-7 h-7"/>
                    </Link>
                </div>
            </article>
        </aside>
        <aside className="flex justify-center items-center py-4 text-sm border-t border-white">
            <Copyright  className="mr-1"/>
            <span>2024 Programme FUTUR</span>
        </aside>
    </footer>
}
