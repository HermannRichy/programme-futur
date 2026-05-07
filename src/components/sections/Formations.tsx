import Link from "next/link";
import { Brush, SquareCode, Image, Computer, PenTool, Plane} from "lucide-react"

export default function Formations() {
    return <section id="formations" className="bg-linear-to-r from-[rgba(101,179,217,.5)] p-5">
        <div className="text-center text-[#24324d]">
            <h2 className="font-bold text-2xl">NOS FORMATIONS</h2>
            <div className="flex justify-center items-center">
                <div className="border border-[#24324d] w-20 h-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#febf24]"></div>
                <div className="border border-[#24324d] w-20 h-0"></div>
            </div>
        </div><br/><br/>
        <aside className="md:w-5/6 md:m-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <article className="text-center bg-white rounded-lg p-3 mb-5 md:mb-0 shadow-xl">
                <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full border-dashed border-2 border-[#24324d] flex items-center justify-center">
                        <SquareCode className="w-8 h-8"/>
                    </div>
                    <span className="absolute top-0 left-0 bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        1
                    </span>
                </div>
                <h3 className="font-semibold">DEVELOPPEMENT WEB</h3>
                <p>Développez vos compétences web avec notre formation sur le Programme FUTUR. Inscrivez-vous dès maintenant !</p>
            </article>
            <article className="text-center bg-white rounded-lg p-3 mb-5 md:mb-0 shadow-xl">
                <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full border-dashed border-2 border-[#24324d] flex items-center justify-center">
                        <Plane  className="w-8 h-8"/>
                    </div>
                    <span className="absolute top-0 left-0 bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        2
                    </span>
                </div>
                <h3 className="font-semibold">PILOTAGE DE DRONE</h3>
                <p>Apprenez à piloter un drone avec notre formation sur le Programme FUTUR. Inscrivez-vous dès maintenant !</p>
            </article>
            <article className="text-center bg-white rounded-lg p-3 mb-5 md:mb-0 shadow-xl">
                <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full border-dashed border-2 border-[#24324d] flex items-center justify-center">
                        <PenTool  className="w-8 h-8"/>
                    </div>
                    <span className="absolute top-0 left-0 bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        3
                    </span>
                </div>
                <h3 className="font-semibold">DESIGN GRAPHIQUE</h3>
                <p>Maîtrisez le design graphique avec notre formation sur le Programme FUTUR. Inscrivez-vous dès maintenant !</p>
            </article>
            <article className="text-center bg-white rounded-lg p-3 mb-5 md:mb-0 shadow-xl">
                <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full border-dashed border-2 border-[#24324d] flex items-center justify-center">
                        <Image className="w-8 h-8" />
                    </div>
                    <span className="absolute top-0 left-0 bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        4
                    </span>
                </div>
                <h3 className="font-semibold">PHOTOGRAPHIE</h3>
                <p>Capturez l&apos;instant parfait avec notre formation en photographie sur le Programme FUTUR. Rejoignez-nous pour développer vos talents dès aujourd&apos;hui!</p>
            </article>
            <article className="text-center bg-white rounded-lg p-3 mb-5 md:mb-0 shadow-xl">
                <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full border-dashed border-2 border-[#24324d] flex items-center justify-center">
                        <Brush className="w-8 h-8"/>
                    </div>
                    <span className="absolute top-0 left-0 bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        5
                    </span>
                </div>
                <h3 className="font-semibold">SERIGRAPHIE</h3>
                <p>Découvrez les techniques avancées de sérigraphie dans notre formation sur le Programme FUTUR. Réservez votre place dès aujourd&apos;hui et développez votre talent!</p>
            </article>
            <article className="text-center bg-white rounded-lg p-3 mb-5 md:mb-0 shadow-xl">
                <div className="relative inline-block">
                    <div className="w-16 h-16 rounded-full border-dashed border-2 border-[#24324d] flex items-center justify-center">
                        <Computer className="w-8 h-8"/> 
                    </div>
                    <span className="absolute top-0 left-0 bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        6
                    </span>
                </div>
                <h3 className="font-semibold">INITIATION A L&apos;INFORMATIQUE</h3>
                <p>Découverte des fondamentaux et concepts de base pour les débutants en technologie numérique.</p>
            </article>
        </aside>
        <div className="text-center mt-10">
            <Link className="h-12 mt-10 px-10 py-3 font-semibold rounded-xl bg-[#24324d] text-white  md:mx-auto lg:text-left" href="/formations">En savoir plus</Link>
        </div>
    </section>
}