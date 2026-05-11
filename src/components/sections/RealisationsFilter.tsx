'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Year = 'all' | '2021' | '2022' | '2023' | '2024' | '2025';

interface RealisationItem {
    src: string;
    alt: string;
    year: '2021' | '2022' | '2023' | '2024' | '2025';
}

const items: RealisationItem[] = [
    {
        src: '/rea/rea-2025-1.jpeg',
        alt: 'Réalisation 2025 #1',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-2.jpeg',
        alt: 'Réalisation 2025 #2',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-3.jpeg',
        alt: 'Réalisation 2025 #3',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-4.jpeg',
        alt: 'Réalisation 2025 #4',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-5.jpeg',
        alt: 'Réalisation 2025 #5',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-6.jpeg',
        alt: 'Réalisation 2025 #6',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-7.jpeg',
        alt: 'Réalisation 2025 #7',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-8.jpeg',
        alt: 'Réalisation 2025 #8',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-9.jpeg',
        alt: 'Réalisation 2025 #9',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-10.jpeg',
        alt: 'Réalisation 2025 #10',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-11.jpeg',
        alt: 'Réalisation 2025 #11',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-12.jpeg',
        alt: 'Réalisation 2025 #12',
        year: '2025',
    },
    {
        src: '/rea/rea-2025-13.jpeg',
        alt: 'Réalisation 2025 #13',
        year: '2025',
    },
    {
        src: '/rea/rea-2024-1.jpeg',
        alt: 'Réalisation 2024 #1',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-2.jpeg',
        alt: 'Réalisation 2024 #2',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-3.jpeg',
        alt: 'Réalisation 2024 #3',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-4.jpeg',
        alt: 'Réalisation 2024 #4',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-5.jpeg',
        alt: 'Réalisation 2024 #5',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-6.jpeg',
        alt: 'Réalisation 2024 #6',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-7.jpeg',
        alt: 'Réalisation 2024 #7',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-8.jpeg',
        alt: 'Réalisation 2024 #8',
        year: '2024',
    },
    {
        src: '/rea/rea-2024-9.jpeg',
        alt: 'Réalisation 2024 #9',
        year: '2024',
    },
    {
        src: '/rea/rea-2023-1.jpg',
        alt: 'Réalisation 2023 #1',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-2.jpg',
        alt: 'Réalisation 2023 #2',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-3.jpg',
        alt: 'Réalisation 2023 #3',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-4.jpg',
        alt: 'Réalisation 2023 #4',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-5.jpg',
        alt: 'Réalisation 2023 #5',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-6.jpg',
        alt: 'Réalisation 2023 #6',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-7.jpg',
        alt: 'Réalisation 2023 #7',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-8.jpg',
        alt: 'Réalisation 2023 #8',
        year: '2023',
    },
    {
        src: '/rea/rea-2023-10.jpg',
        alt: 'Réalisation 2023 #10',
        year: '2023',
    },
    {
        src: '/rea/rea-2021-1.jpg',
        alt: 'Réalisation 2021 #1',
        year: '2021',
    },
    {
        src: '/rea/rea-2021-2.jpg',
        alt: 'Réalisation 2021 #2',
        year: '2021',
    },
    {
        src: '/rea/rea-2021-3.jpg',
        alt: 'Réalisation 2021 #3',
        year: '2021',
    },
    {
        src: '/rea/rea-2021-4.jpg',
        alt: 'Réalisation 2021 #4',
        year: '2021',
    },
];

const filters: { label: string; value: Year }[] = [
    { label: 'Tout', value: 'all' },
    { label: '2021', value: '2021' },
    { label: '2022', value: '2022' },
    { label: '2023', value: '2023' },
    { label: '2024', value: '2024' },
    { label: '2025', value: '2025' },
];

export default function RealisationsFilter() {
    const [active, setActive] = useState<Year>('all');

    const visible = items.filter(
        (item) => active === 'all' || item.year === active
    );

    return (
        <section className="py-10 px-4 bg-gray-100">
            <div className="flex justify-center gap-2 flex-wrap mb-8">
                {filters.map(({ label, value }) => (
                    <Button
                        key={value}
                        onClick={() => setActive(value)}
                        className={cn(
                            'rounded-full font-semibold px-5',
                            active === value
                                ? 'bg-[#24324d] text-white hover:bg-[#1a2438]'
                                : 'bg-transparent border border-[#24324d] text-[#24324d] hover:bg-[#24324d] hover:text-white'
                        )}
                    >
                        {label}
                    </Button>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                {visible.map((item) => (
                    <div key={item.src} className="overflow-hidden rounded-lg">
                        <img
                            className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                            src={item.src}
                            alt={item.alt}
                        />
                    </div>
                ))}
                {visible.length === 0 && (
                    <p className="col-span-full text-center text-muted-foreground py-12">
                        Aucune réalisation pour cette année.
                    </p>
                )}
            </div>
        </section>
    );
}
