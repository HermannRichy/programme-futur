import Slider from 'react-slick';
import 'slick-carousel/slick/slick';

('use client');
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const members = [
    {
        src: '/teams/member-1.JPG',
        name: 'ORE Gauthier',
        role: 'COORDINATEUR GÉNÉRAL',
    },
    {
        src: '/teams/member-2.jpg',
        name: 'Yoan Melson DANSOU',
        role: 'PROMOTEUR',
    },
    {
        src: '/teams/member-3.JPG',
        name: 'Junior KOUKPAKI',
        role: 'RD GRAPHISME',
    },
    {
        src: '/teams/member-4.JPG',
        name: 'Géraud CODJIA',
        role: 'RD SÉRIGRAPHIE',
    },
    {
        src: '/teams/member-5.JPG',
        name: 'Hermann HOUNNOUVI',
        role: 'RD DÉVELOPPEMENT WEB',
    },
    {
        src: '/teams/member-6.JPG',
        name: 'François SAKITI',
        role: 'RD INITIATION INFORMATIQUE',
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

            <div className="max-w-5xl mx-auto">
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
