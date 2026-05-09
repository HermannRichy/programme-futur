import Link from 'next/link';
import {
    Brush,
    SquareCode,
    Camera,
    Computer,
    PenTool,
    Plane,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const formations = [
    {
        number: 1,
        icon: SquareCode,
        title: 'DÉVELOPPEMENT WEB',
        desc: 'Développez vos compétences web avec notre formation sur le Programme FUTUR.',
    },
    {
        number: 2,
        icon: Plane,
        title: 'PILOTAGE DE DRONE',
        desc: 'Apprenez à piloter un drone avec notre formation sur le Programme FUTUR.',
    },
    {
        number: 3,
        icon: PenTool,
        title: 'DESIGN GRAPHIQUE',
        desc: 'Maîtrisez le design graphique avec notre formation sur le Programme FUTUR.',
    },
    {
        number: 4,
        icon: Camera,
        title: 'PHOTOGRAPHIE',
        desc: "Capturez l'instant parfait avec notre formation en photographie sur le Programme FUTUR.",
    },
    {
        number: 5,
        icon: Brush,
        title: 'SÉRIGRAPHIE',
        desc: 'Découvrez les techniques avancées de sérigraphie dans notre formation sur le Programme FUTUR.',
    },
    {
        number: 6,
        icon: Computer,
        title: "INITIATION À L'INFORMATIQUE",
        desc: 'Découverte des fondamentaux et concepts de base pour les débutants en technologie numérique.',
    },
];

export default function Formations() {
    return (
        <section
            id="formations"
            className="py-16 px-4 bg-gradient-to-r from-[rgba(101,179,217,0.2)] to-transparent"
        >
            <div className="text-center text-[#24324d] mb-10">
                <h2 className="font-bold text-2xl md:text-3xl">
                    NOS FORMATIONS
                </h2>
                <div className="flex justify-center items-center mt-3">
                    <div className="border border-[#24324d] w-20 h-0" />
                    <div className="w-3 h-3 rounded-full bg-[#febf24] mx-1" />
                    <div className="border border-[#24324d] w-20 h-0" />
                </div>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formations.map(({ number, icon: Icon, title, desc }) => (
                    <Card
                        key={number}
                        className="text-center shadow-lg hover:shadow-xl transition-shadow border-0"
                    >
                        <CardContent className="pt-6 pb-5 px-5">
                            <div className="relative inline-block mb-4">
                                <div className="w-16 h-16 rounded-full border-dashed border-2 border-[#24324d] flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-[#24324d]" />
                                </div>
                                <Badge className="absolute -top-1 -left-1 w-6 h-6 p-0 flex items-center justify-center rounded-full bg-[#65b3d9] text-white text-xs font-bold">
                                    {number}
                                </Badge>
                            </div>
                            <h3 className="font-bold text-sm text-[#24324d] mb-2">
                                {title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {desc}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="text-center mt-10">
                <Button
                    asChild
                    className="bg-[#24324d] hover:bg-[#1a2438] text-white rounded-xl px-10 h-12 font-semibold"
                >
                    <Link href="/formations">En savoir plus</Link>
                </Button>
            </div>
        </section>
    );
}
