"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const members = [
    { src: "/images/teams/member-1.JPG", name: "ORE Gauthier", role: "COORDINATEUR GÉNÉRAL" },
    { src: "/images/teams/member-2.jpg", name: "Yoan Melson DANSOU", role: "PROMOTEUR" },
    { src: "/images/teams/member-3.JPG", name: "Junior KOUKPAKI", role: "RD GRAPHISME" },
    { src: "/images/teams/member-4.JPG", name: "Géraud CODJIA", role: "RD SÉRIGRAPHIE" },
    { src: "/images/teams/member-5.JPG", name: "Hermann HOUNNOUVI", role: "RD DÉVELOPPEMENT WEB" },
    { src: "/images/teams/member-6.JPG", name: "François SAKITI", role: "RD INITIATION INFORMATIQUE" },
];

export default function Teams() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className="py-16 px-4">
            <div className="text-center text-[#24324d] mb-10">
                <h2 className="font-bold text-2xl md:text-3xl">NOTRE ÉQUIPE</h2>
                <div className="flex justify-center items-center mt-3">
                    <div className="border border-[#24324d] w-20 h-0" />
                    <div className="w-3 h-3 rounded-full bg-[#febf24] mx-1" />
                    <div className="border border-[#24324d] w-20 h-0" />
                </div>
            </div>

            <div className="relative max-w-5xl mx-auto px-10">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {members.map((member) => (
                            <div
                                key={member.name}
                                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
                            >
                                <div className="text-center p-4">
                                    <Image
                                        src={member.src}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-[#65b3d9]"
                                    />
                                    <h3 className="font-bold text-[#24324d] mt-3">{member.name}</h3>
                                    <p className="text-sm text-[#65b3d9] font-semibold">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => emblaApi?.scrollPrev()}
                    disabled={!canScrollPrev}
                    aria-label="Précédent"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#24324d] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#1a2438] transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => emblaApi?.scrollNext()}
                    disabled={!canScrollNext}
                    aria-label="Suivant"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#24324d] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#1a2438] transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
