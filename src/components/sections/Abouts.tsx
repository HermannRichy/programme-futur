import Image from "next/image";

const sections = [
    {
        id: "vision",
        title: "LA VISION",
        text: "Sur le Programme Futur, nous avons pour vision de transformer l'éducation au Bénin en fournissant aux élèves des collèges une base solide en numérisme et en technologie. Nous croyons que chaque jeune mérite l'accès à une éducation de qualité qui les prépare à réussir dans l'économie mondiale de demain.",
        imageRight: true,
    },
    {
        id: "mission",
        title: "LA MISSION",
        text: "Notre mission est de doter gratuitement les élèves des collèges du Bénin des compétences essentielles en technologie, telles que le pilotage de drone, la création de sites Web, l'intelligence artificielle, le graphisme, la sérigraphie et l'initiation à l'informatique pendant les vacances. Nous nous engageons à offrir un enseignement de qualité qui inspire la créativité, encourage l'innovation et prépare les élèves à relever les défis du monde moderne.",
        imageRight: false,
    },
    {
        id: "objectifs",
        title: "LES OBJECTIFS",
        text: "Fournir un accès équitable à l'éducation technologique, préparer les élèves à réussir dans le monde numérique, encourager l'innovation et la créativité, soutenir la transition vers le monde du travail. Ensemble, nous travaillons à bâtir un avenir meilleur pour les jeunes du Bénin, en leur offrant les compétences et les ressources dont ils ont besoin pour réussir dans le monde moderne. Rejoignez-nous dans notre mission de transformation de l'éducation et de préparation des élèves à un avenir prometteur.",
        imageRight: true,
    },
];

export default function Abouts() {
    return (
        <section>
            {sections.map(({ id, title, text, imageRight }) => (
                <div key={id} id={id} className="lg:flex lg:min-h-137.5">
                    {!imageRight && (
                        <article className="md:bg-[#65b3d9] md:flex md:justify-center lg:w-1/2">
                            <Image
                                alt={title}
                                src="/images/about.jpg"
                                width={800}
                                height={600}
                                className="w-full h-48 md:h-60 lg:h-full lg:w-full object-cover"
                            />
                        </article>
                    )}
                    <article className="bg-[#65b3d9] flex items-center justify-center lg:w-1/2 p-8 lg:p-12">
                        <div className="max-w-lg">
                            <h2 className="font-bold text-2xl md:text-3xl mb-6">{title}</h2>
                            <p className="text-white text-justify leading-relaxed">{text}</p>
                        </div>
                    </article>
                    {imageRight && (
                        <article className="md:bg-[#65b3d9] md:flex md:justify-center lg:w-1/2">
                            <Image
                                alt={title}
                                src="/images/about.jpg"
                                width={800}
                                height={600}
                                className="w-full h-48 md:h-60 lg:h-full lg:w-full object-cover"
                            />
                        </article>
                    )}
                </div>
            ))}
        </section>
    );
}
