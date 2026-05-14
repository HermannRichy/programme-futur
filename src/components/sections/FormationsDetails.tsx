import Image from 'next/image';
import {
    ShieldCheck,
    SquareCode,
    Camera,
    Computer,
    Bot,
    Plane,
    TabletSmartphone,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';

const formations = [
    {
        title: 'Intelligence Artificielle',
        icon: TabletSmartphone,
        image: '/form/ia.jpg',
        description:
            'La formation en intelligence artificielle introduit les participants aux concepts fondamentaux de l’IA et à ses applications dans la vie quotidienne. Les apprenants découvriront comment fonctionnent les systèmes intelligents et comment utiliser certains outils d’IA.',
        skills: [
            'Machine Learning',
            'IA générative',
            'Automatisation',
            'Analyse de données',
            'Outils IA',
        ],
    },
    {
        title: 'Initiation à la Robotique',
        icon: Bot,
        image: '/form/robotique.jpg',
        description:
            'La formation en robotique introduit les apprenants aux concepts fondamentaux de la robotique et de l’automatisation. Les participants apprendront comment fonctionnent les robots et comment programmer des actions simples.',
        skills: [
            'Logique',
            'Capteurs',
            'Automatisation',
            'Programmation',
            'Arduino',
        ],
    },
    {
        title: 'Photographie',
        icon: Camera,
        image: '/form/photographie.jpeg',
        description:
            'Cette formation permet de découvrir l’art de la photographie et les techniques pour capturer des images de qualité. Les apprenants apprendront à maîtriser la lumière, le cadrage et les réglages essentiels d’un appareil photo.',
        skills: [
            'Cadrage',
            'Lumière',
            'Composition',
            'Retouche',
            'Storytelling visuel',
        ],
    },
    {
        title: 'Pilotage de Drone',
        icon: Plane,
        image: '/form/drone.jpg',
        description:
            'Cette formation permet d’apprendre les bases du pilotage de drone et les règles essentielles de sécurité aérienne. Les participants découvriront comment manipuler un drone, capturer des images aériennes et comprendre les principes fondamentaux du pilotage.',
        skills: [
            'Pilotage',
            'Sécurité aérienne',
            'Prise de vue',
            'Navigation',
            'Maintenance',
        ],
    },
    {
        title: 'Développement Web',
        icon: SquareCode,
        image: '/form/developpementweb.jpeg',
        description:
            'La formation en développement web du Programme FUTUR permet aux apprenants de découvrir et maîtriser les technologies essentielles pour créer des sites web modernes et interactifs. Les participants apprendront à concevoir des interfaces attractives, structurer correctement un site web et comprendre le fonctionnement des applications web modernes.',
        skills: [
            'HTML',
            'CSS',
            'Tailwind CSS',
            'JavaScript',
            'Responsive Design',
        ],
    },
    {
        title: 'Cybersécurité',
        icon: ShieldCheck,
        image: '/form/cybersecurite.jpg',
        description:
            'La formation en cybersécurité introduit les participants aux principes fondamentaux de la sécurité informatique. Ils découvriront les menaces numériques, les bonnes pratiques de sécurité et les bases de la protection des systèmes et des données.',
        skills: [
            'Sécurité réseau',
            'Protection des données',
            'Phishing',
            'Bonnes pratiques',
            'Cryptographie',
        ],
    },
    {
        title: "Initiation à l'informatique",
        icon: Computer,
        image: '/form/informatique.jpg',
        description:
            'Cette formation permet aux débutants de comprendre les bases de l’informatique et de l’utilisation des outils numériques. Les participants découvriront les composants d’un ordinateur, l’utilisation des logiciels et l’environnement numérique.',
        skills: [
            'Systèmes',
            'Bureautique',
            'Internet',
            'Gestion de fichiers',
            'Outils numériques',
        ],
    },
];

export default function FormationsPage() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto space-y-20">
                {formations.map((formation, index) => {
                    const Icon = formation.icon;

                    return (
                        <div
                            key={index}
                            className="grid lg:grid-cols-2 gap-10 items-center"
                        >
                            {/* IMAGE */}
                            <div className="w-full h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden">
                                <Image
                                    src={formation.image}
                                    alt={formation.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-[#24324d]/10">
                                        <Icon className="w-7 h-7 text-[#24324d]" />
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold text-[#24324d]">
                                        {formation.title}
                                    </h2>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {formation.description}
                                </p>

                                {/* SKILLS */}
                                <div className="flex flex-wrap gap-2">
                                    {formation.skills.map((skill, i) => (
                                        <Badge
                                            key={i}
                                            className="bg-[#65b3d9]/10 text-[#24324d]"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
