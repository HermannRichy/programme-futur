import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
    return (
        <section id="about" className="lg:flex lg:min-h-137.5">
            <article className="md:bg-[#65b3d9] md:flex md:justify-center lg:w-1/2">
                <Image
                    alt="À propos de Programme FUTUR"
                    src="/about.jpeg"
                    width={800}
                    height={600}
                    className="w-full h-64 md:h-80 lg:h-full lg:w-full object-cover"
                />
            </article>
            <article className="bg-[#65b3d9] flex items-center justify-center lg:w-1/2 p-8 lg:p-12">
                <div className="max-w-lg">
                    <h2 className="font-bold text-2xl md:text-3xl mb-6">
                        QUI SOMMES NOUS ?
                    </h2>
                    <p className="text-white text-justify leading-relaxed mb-8">
                        Le Programme FUTUR est une approche éducative
                        avant-gardiste qui vise à ouvrir aux élèves des
                        formations complètes dans le numérique et la
                        technologie, allant au-delà des simples compétences
                        basiques pour englober un large éventail de domaines
                        pertinents. En reconnaissant que seule les études
                        classiques ne suffisent plus aujourd'hui, le Programme
                        FUTUR s'engage à introduire les enfants au plus tôt dans
                        d'autres domaines de formation.
                    </p>
                    <Button
                        asChild
                        className="bg-[#24324d] hover:bg-[#1a2438] text-white rounded-xl px-8 h-12 font-semibold"
                    >
                        <Link href="/a-propos">En savoir plus</Link>
                    </Button>
                </div>
            </article>
        </section>
    );
}
