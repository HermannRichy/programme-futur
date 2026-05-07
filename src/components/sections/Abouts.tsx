import Image from "next/image";
export default function Abouts() {
    return <section>
        <div id="about" className="lg:flex lg:h-137.5">
            <article className="bg-[#65b3d9] flex items-center justify-center lg:w-1/2">
                <div className="m-auto p-2 lg:w-4/5">
                    <h2 className="font-bold text-2xl md:text-center lg:text-left">LA VISION</h2><br/><br/>
                    <p className="text-white text-justify">
                        Sur le Programme Futur, nous avons pour vision de transformer l&apos;éducation au Bénin en fournissant aux élèves des collèges une base 
                        solide en numérisme et en technologie. Nous croyons que chaque jeune mérite l&apos;accès à une éducation de qualité qui les prépare 
                        à réussir dans l&apos;économie mondiale de demain.
                    </p>
                </div>
            </article>
            <article className="md:bg-[#65b3d9] md:flex md:justify-center lg:w-1/2">
                <Image 
                    alt="images about"
                    src="/public/images/about.jpg"
                    className="w-full h-48 md:h-60 md:w-3/5 lg:h-full lg:w-full"/>
            </article>
        </div>
        <div id="about" className="lg:flex lg:h-137.5">
            <article className="md:bg-[#65b3d9] md:flex md:justify-center lg:w-1/2">
                <Image 
                    alt="images about"
                    src="/public/images/about.jpg"
                    className="w-full h-48 md:h-60 md:w-3/5 lg:h-full lg:w-full"/>
            </article>
            <article className="bg-[#65b3d9] flex items-center justify-center lg:w-1/2">
                <div className="m-auto p-2 lg:w-4/5">
                    <h2 className="font-bold text-2xl md:text-center lg:text-left">LA MISSION</h2><br/><br/>
                    <p className="text-white text-justify">
                        Notre mission est de doter gratuitement les élèves des collèges du Bénin des compétences essentielles en technologie, telles que le 
                        pilotage de drone, la création de sites Web, l&apos;intelligence artificielle, le graphisme, la sérigraphie et l&apos;initiation à 
                        l&apos;informatique pendant les vacances. Nous nous engageons à offrir un enseignement de qualité qui inspire la créativité, encourage 
                        l&apos;innovation et prépare les élèves à relever les défis du monde moderne.
                    </p>
                </div>
            </article>
        </div>
        <div id="about" className="lg:flex lg:h-137.5">
            <article className="bg-[#65b3d9] flex items-center justify-center lg:w-1/2">
                <div className="m-auto p-2 lg:w-4/5">
                    <h2 className="font-bold text-2xl md:text-center lg:text-left">LES OBJECTIFS</h2><br/><br/>
                    <p className="text-white text-justify">
                        Fournir un accès équitable à l&apos;éducation technologique, préparer les élèves à réussir dans le monde numérique, encourager 
                        l&apos;innovation et la créativité, soutenir la transition vers le monde du travail. Ensemble, nous travaillons à bâtir un avenir 
                        meilleur pour les jeunes du Bénin, en leur offrant les compétences et les ressources dont ils ont besoin pour réussir dans le 
                        monde moderne. 
                        Rejoignez-nous dans notre mission de transformation de l&apos;éducation et de préparation des élèves à un avenir prometteur.
                    </p>
                </div>
            </article>
            <article className="md:bg-[#65b3d9] md:flex md:justify-center lg:w-1/2">
                <Image 
                    alt="images about"
                    src="/public/images/about.jpg"
                    className="w-full h-48 md:h-60 md:w-3/5 lg:h-full lg:w-full"/>
            </article>
        </div>
    </section>
}