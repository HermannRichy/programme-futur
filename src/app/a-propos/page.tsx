import Abouts from "@/components/sections/Abouts";
import BackToTop from "@/components/sections/BackToTop";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import PartnerSection from "@/components/sections/PartnerSection";
import Teams from "@/components/sections/Teams";
import Title from "@/components/sections/Title";
import TopHeader from "@/components/sections/TopHeader";

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
