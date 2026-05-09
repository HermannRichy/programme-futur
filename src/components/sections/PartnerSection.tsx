import Image from "next/image";

export default function PartnerSection() {
    return (
        <section className="px-4 py-16 bg-[url('/partok2.png')] bg-cover bg-center">
            <div className="text-center text-[#24324d] mb-10">
                <h2 className="font-bold text-2xl md:text-3xl">NOS PARTENAIRES</h2>
                <div className="flex justify-center items-center mt-3">
                    <div className="border border-[#24324d] w-20 h-0" />
                    <div className="w-3 h-3 rounded-full bg-[#febf24] mx-1" />
                    <div className="border border-[#24324d] w-20 h-0" />
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <div className="relative w-full aspect-video border border-cyan-950 overflow-hidden rounded-lg">
                    <Image
                        src="/partok1.png"
                        alt="Nos partenaires"
                        fill
                        className="object-cover"
                    />
                </div>
                <p className="text-center font-semibold mt-6 text-[#24324d] max-w-2xl mx-auto">
                    Nous sommes tous plus que ravis de travailler et de contribuer à ce projet qui enseigne
                    le numérique dès le bas âge.
                </p>
            </div>
        </section>
    );
}
