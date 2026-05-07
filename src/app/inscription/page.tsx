import BackToTop from "@/components/sections/BackToTop";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import InscriptionForm from "@/components/sections/InscriptionForm";
import Title from "@/components/sections/Title";
import TopHeader from "@/components/sections/TopHeader";

export const metadata = {
    title: "Inscription — Programme FUTUR",
    description: "Inscrivez-vous au Programme FUTUR et accédez à nos formations en numérique et technologie.",
};

export default function InscriptionPage() {
    return (
        <>
            <TopHeader />
            <BackToTop />
            <Header />
            <Title>INSCRIPTION</Title>

            <main className="max-w-2xl mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-[#24324d]">Formulaire d&apos;inscription</h2>
                        <p className="text-muted-foreground text-sm mt-1.5">
                            Veuillez remplir ce formulaire avec soin. Les champs marqués <span className="text-red-500">*</span> sont obligatoires.
                        </p>
                    </div>
                    <InscriptionForm />
                </div>
            </main>

            <Footer />
        </>
    );
}
