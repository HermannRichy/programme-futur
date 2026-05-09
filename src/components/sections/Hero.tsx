import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="min-h-137.5 bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-2xl mx-auto">
                <p className="text-sm uppercase tracking-widest mb-3 opacity-80">
                    Soyez les bienvenus sur
                </p>
                <h1 className="font-bold text-3xl md:text-4xl mb-4">Programme FUTUR</h1>
                <div className="flex justify-center items-center mb-6">
                    <div className="border border-white w-20 h-0" />
                    <div className="w-3 h-3 rounded-full bg-[#febf24] mx-1" />
                    <div className="border border-white w-20 h-0" />
                </div>
                <p className="mb-8 text-sm md:text-base leading-relaxed opacity-90 max-w-md mx-auto">
                    Le Programme FUTUR est le seul programme qui fusionne études et formations pour les élèves.
                </p>
                <Button
                    asChild
                    className="bg-[#65b3d9] hover:bg-[#4a9bc2] text-white rounded-xl px-10 h-12 text-base font-semibold shadow-lg"
                >
                    <Link href="/inscription">Inscription</Link>
                </Button>
            </div>
        </section>
    );
}
