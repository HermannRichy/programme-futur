import type { Metadata } from "next";
import Abouts from "@/components/sections/Abouts";
import BackToTop from "@/components/sections/BackToTop";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PartnerSection from "@/components/sections/PartnerSection";
import Teams from "@/components/sections/Teams";
import Title from "@/components/sections/Title";
import TopHeader from "@/components/sections/TopHeader";

export const metadata: Metadata = {
    title: "À Propos",
    description:
        "Découvrez la vision, la mission et les objectifs du Programme FUTUR : transformer l'éducation au Bénin en offrant aux collégiens un accès gratuit aux compétences numériques.",
    openGraph: { title: "À Propos — Programme FUTUR", url: "/a-propos" },
    alternates: { canonical: "/a-propos" },
};

export default function AproposPage() {
    return (
        <>
            <TopHeader />
            <BackToTop />
            <Header />
            <Title>A PROPOS</Title>
            <Abouts />
            <Teams />
            <PartnerSection />
            <Footer />
        </>
    );
}