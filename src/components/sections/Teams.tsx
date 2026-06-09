'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const members = [
    {
        src: '/teams/yoan-m-dansou.jpg',
        name: 'Yoan Melson DANSOU',
        role: 'Promoteur',
    },
    {
        src: '/teams/ibidon-dossoumou.jpeg',
        name: 'Ibidon DOSSOUMOU',
        role: 'Directeur de la communication',
    },
    {
        src: '/teams/gauthier-ore.JPG',
        name: 'ORE Gauthier',
        role: 'Coordinateur Général',
    },
    {
        src: '/teams/william-zomahoun1.jpeg',
        name: 'William ZOMAHOUN',
        role: 'Coordinateur de site & Formateur',
    },
    {
        src: '/teams/esaie-agounfon.jpg',
        name: 'Esaïe AGOUNFON',
        role: 'Responsable des Opérations',
    },
    {
        src: '/teams/hermann-hounnouvi.jpeg',
        name: 'Hermann HOUNNOUVI',
        role: 'Responsable Développement Web',
    },
    {
        src: '/teams/loic-assogba1.jpg',
        name: 'Loïc ASSOGBA',
        role: 'Développeur Web & CM',
    },
    {
        src: '/teams/onesim-graca.jpeg',
        name: 'Onésim GRAÇA',
        role: 'Développeur Web',
    },
    {
        src: '/teams/pacome-assogba1.jpeg',
        name: 'Pacôme ASSOGBA',
        role: 'Formateur en Photographie et Pilotage de drone',
    },
    {
        src: '/teams/gilles-ahouangonon.jpeg',
        name: 'Gilles AHOUGANON',
        role: 'Formateur en Photographie',
    },
    {
        src: '/teams/yannick-atchehoun2.jpeg',
        name: 'Yannick ATCHEHOUN',
        role: 'Formateur en Photographie',
    },
    {
        src: '/teams/francois-sakiti.jpeg',
        name: 'François SAKITI',
        role: 'Formateur en Initiation à l’informatique',
    },
];

export default function Teams() {
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

            <div className="max-w-5xl mx-auto p-2">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 16 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    className="pb-10"
                >
                    {members.map((member) => (
                        <SwiperSlide key={member.name}>
                            <div className="text-center p-4">
                                <Image
                                    src={member.src}
                                    alt={member.name}
                                    width={160}
                                    height={160}
                                    className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-[#65b3d9]"
                                />
                                <h3 className="font-bold text-[#24324d] mt-3">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-[#65b3d9] font-semibold mt-1">
                                    {member.role}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
