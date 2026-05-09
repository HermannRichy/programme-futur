import type { Metadata } from "next";
import BackToTop from "@/components/sections/BackToTop";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import InscriptionForm from "@/components/sections/InscriptionForm";
import Title from "@/components/sections/Title";
import TopHeader from "@/components/sections/TopHeader";

export const metadata: Metadata = {
    title: "Inscription",
    description:
        "Inscrivez-vous gratuitement au Programme FUTUR. Remplissez le formulaire pour choisir votre filière (web, IA, drone, cybersécurité…) et votre site de formation au Bénin.",
    openGraph: { title: "Inscription — Programme FUTUR", url: "/inscription" },
    alternates: { canonical: "/inscription" },
};

export default function InscriptionPage() {
    return (
        <>
            <BackToTop />
            <Title>INSCRIPTION AU PROGRAMME FUTUR 2026</Title>

            <main className="max-w-2xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#24324d]">
                            Formulaire d&apos;inscription
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1.5">
                            Veuillez remplir ce formulaire avec soin. Les champs
                            marqués <span className="text-red-500">*</span> sont
                            obligatoires.
                        </p>
                    </div>
                    <InscriptionForm />
                </div>
            </main>
        </>
    );
}
