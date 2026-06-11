import Image from 'next/image';

const sections = [
    {
        id: 'vision',
        title: 'LA VISION',
        text: "Sur le Programme Futur, nous avons pour vision de transformer l'éducation au Bénin en fournissant aux élèves des collèges une base solide en numérisme et en technologie. Nous croyons que chaque jeune mérite l'accès à une éducation de qualité qui les prépare à réussir dans l'économie mondiale de demain.",
        image: '/about.jpeg',
        imageRight: true,
    },
    {
        id: 'mission',
        title: 'LA MISSION',
        text: "Notre mission est de doter gratuitement les élèves des collèges du Bénin des compétences essentielles en technologie, telles que le pilotage de drone, la création de sites Web, l'intelligence artificielle, le graphisme, la sérigraphie et l'initiation à l'informatique pendant les vacances. Nous nous engageons à offrir un enseignement de qualité qui inspire la créativité, encourage l'innovation et prépare les élèves à relever les défis du monde moderne.",
        image: '/rea/rea-2025-8.jpeg',
        imageRight: false,
    },
    {
        id: 'objectifs',
        title: 'LES OBJECTIFS',
        text: "Fournir un accès équitable à l'éducation technologique, préparer les élèves à réussir dans le monde numérique, encourager l'innovation et la créativité, soutenir la transition vers le monde du travail. Ensemble, nous travaillons à bâtir un avenir meilleur pour les jeunes du Bénin, en leur offrant les compétences et les ressources dont ils ont besoin pour réussir dans le monde moderne. Rejoignez-nous dans notre mission de transformation de l'éducation et de préparation des élèves à un avenir prometteur.",
        image: '/about.jpeg',
        imageRight: true,
    },
];

export default function Abouts() {
    return (
        <section>
            {sections.map(({ id, title, text, image, imageRight }) => (
                <div
                    key={id}
                    id={id}
                    className="flex flex-col md:flex-row min-h-[550px]"
                >
                    {/* TEXTE */}
                    <article
                        className={`
                            bg-[#65b3d9]
                            flex items-center justify-center
                            w-full md:w-1/2
                            p-8 md:p-10 lg:p-14
                            order-1
                            ${imageRight ? 'md:order-1' : 'md:order-2'}
                        `}
                    >
                        <div className="max-w-xl">
                            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
                                {title}
                            </h2>

                            <p className="text-white text-justify leading-relaxed text-sm md:text-base">
                                {text}
                            </p>
                        </div>
                    </article>

                    {/* IMAGE */}
                    <article
                        className={`
                            w-full md:w-1/2
                            order-2
                            ${imageRight ? 'md:order-2' : 'md:order-1'}
                        `}
                    >
                        <Image
                            alt={title}
                            src={image}
                            width={1200}
                            height={800}
                            className="w-full h-64 md:h-full object-cover"
                        />
                    </article>
                </div>
            ))}
        </section>
    );
}
