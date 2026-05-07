import Link from "next/dist/client/link";
import Image from "next/image";
export default function About() {
      return  <section id="about" className="lg:flex lg:h-137.5">
        <article className="md:bg-[#65b3d9] md:flex md:justify-center lg:w-1/2">
            <Image 
                alt="images about"
               src="/about.jpg"
               width={500}
               height={400}
               className="w-full h-64 md:h-80 md:w-3/5 lg:h-full lg:w-full"/>
        </article>
        <article className="bg-[#65b3d9] flex items-center justify-center lg:w-1/2">
            <div className="m-auto p-5 lg:w-4/5">
                <h2 className="font-bold text-2xl md:text-center lg:text-left">QUI SOMMES NOUS ?</h2><br/><br/>
                <p className="text-white text-justify">
                    Le Programme FUTUR est une approche éducative avant-gardiste qui vise à ouvrir aux élèves une formation complète en informatique, 
                    allantau-delà des simples compétences basiques pour englober un large éventail de domaines pertinents. En reconnaissant que 
                    l’informatique ne selimite pas à la programmation, FUTUR se concentre également sur lacompréhension du monde en ligne, de la sécurité 
                    numérique, de la création de contenu et de lacollaboration en réseau.
                </p><br/><br/>
                <Link 
                className="h-12 px-10 py-3 font-semibold rounded-xl bg-[#24324d] text-white  md:mx-auto lg:text-left" href="/inscription">En savoir plus</Link>
            </div>
        </article>
    </section>
}
