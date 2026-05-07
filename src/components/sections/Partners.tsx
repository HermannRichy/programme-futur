"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const partners = [
    { src: "/images/logo-part/models-academy.jpg", name: "Models Academy" },
    { src: "/images/logo-part/dds.jpg", name: "DDS" },
    { src: "/images/logo-part/E-ENTREPRISE.png", name: "E-ENTREPRISE" },
    { src: "/images/logo-part/digital-innovation.jpg", name: "Digital Innovation" },
];

export default function Partners() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: "center", dragFree: true });

    return (
        <section className="py-16 px-4">
            <div className="text-center text-[#24324d] mb-10">
                <h2 className="font-bold text-2xl md:text-3xl">NOS PARTENAIRES</h2>
                <div className="flex justify-center items-center mt-3">
                    <div className="border border-[#24324d] w-20 h-0" />
                    <div className="w-3 h-3 rounded-full bg-[#febf24] mx-1" />
                    <div className="border border-[#24324d] w-20 h-0" />
                </div>
            </div>

            <div className="overflow-hidden max-w-4xl mx-auto" ref={emblaRef}>
                <div className="flex items-center">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex-[0_0_50%] sm:flex-[0_0_33%] lg:flex-[0_0_25%] flex justify-center px-4"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.name}
                                width={160}
                                height={160}
                                className="w-32 h-32 rounded-full object-cover border border-gray-200"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
