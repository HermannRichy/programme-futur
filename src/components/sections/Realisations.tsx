
import { ChevronRight } from "lucide-react"
import Link from "next/link";

const editions = [
    { year: "2021", image: "/2020.jpg" },
    { year: "2022", image: "/2022.jpg" },
    { year: "2023", image: "/20236.jpg" },
    { year: null, image: "/coming-soon.jpg", label: "Prochaine édition..." },
]

export default function Realisations() {
    return (
        <section className="py-16 px-4">
            <div className="text-center text-[#24324d] mb-10">
                <h2 className="font-bold text-2xl md:text-3xl">NOS RÉALISATIONS</h2>
                <div className="flex justify-center items-center mt-3">
                    <div className="border border-[#24324d] w-20 h-0" />
                    <div className="w-3 h-3 rounded-full bg-[#febf24] mx-1" />
                    <div className="border border-[#24324d] w-20 h-0" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {editions.map(({ year, image, label }) => (
                    <article
                        key={year ?? "next"}
                        className="relative flex rounded-xl overflow-hidden h-96 lg:h-80 bg-cover bg-center text-white"
                        style={{ backgroundImage: `url('${image}')` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="relative mt-auto mb-8 mx-4 flex items-end justify-between w-full">
                            <div>
                                <h3 className="font-semibold text-lg">Programme FUTUR</h3>
                                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-xl bg-[#24324d] mt-1">
                                    {label ?? `Édition ${year}`}
                                </span>
                            </div>
                            <Link href="/realisations" aria-label="Voir les réalisations">
                                <ChevronRight className="bg-[#65b3d9] hover:bg-[#4a9bc2] transition-colors rounded-full w-8 h-8 p-1 shrink-0" />
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
