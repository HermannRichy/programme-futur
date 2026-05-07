import type { Metadata } from "next";
import About from "@/components/sections/About";

export const metadata: Metadata = {
    title: "Accueil",
    description:
        "Bienvenue sur le Programme FUTUR — le seul programme qui fusionne études et formations numériques gratuites pour les élèves du Bénin : web, IA, drone, cybersécurité et plus.",
    openGraph: { title: "Accueil — Programme FUTUR", url: "/" },
    alternates: { canonical: "/" },
};
import BackToTop from "@/components/sections/BackToTop";
import Emplacements from "@/components/sections/Emplacements";
import Footer from "@/components/sections/Footer";
import Formations from "@/components/sections/Formations";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Realisations from "@/components/sections/Realisations";
import TopHeader from "@/components/sections/TopHeader";

export default function Home() {
    return (
        <>
            <TopHeader />
            <BackToTop />
            <Header />
            <Hero />
            <About />
            <Formations />
            <Emplacements />
            <Realisations />
            <Partners />
            <Footer />
        </>
    );
}
