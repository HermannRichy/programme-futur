"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const partners = [
    { src: "/images/logo-part/models-academy.jpg", name: "Models Academy" },
    { src: "/images/logo-part/dds.jpg", name: "DDS" },
    { src: "/images/logo-part/E-ENTREPRISE.png", name: "E-ENTREPRISE" },
    { src: "/images/logo-part/digital-innovation.jpg", name: "Digital Innovation" },
];

export default function Partners() {
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

            <div className="max-w-4xl mx-auto">
                <Swiper
                    modules={[Autoplay]}
                    loop
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        0:    { slidesPerView: 2, spaceBetween: 16 },
                        640:  { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 24 },
                    }}
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.name}>
                            <div className="flex justify-center py-4">
                                <Image
                                    src={partner.src}
                                    alt={partner.name}
                                    width={160}
                                    height={160}
                                    className="w-32 h-32 rounded-full object-cover border border-gray-200"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
