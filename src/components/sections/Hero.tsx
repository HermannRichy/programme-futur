import Link from "next/link";

export default function Hero() {
    return <section className="h-137.5 bg-[url('/images/hero.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="text-center text-white">
            <p>Soyez les bienvenus sur</p><br/>
            <h2 className="font-bold text-2xl">Programme FUTUR</h2>
            <div className="flex justify-center items-center">
                <div className="border border-white w-20 h-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#febf24]"></div>
                <div className="border border-white w-20 h-0"></div>
            </div>
            <br/>
            <p className="px-4">Le Programme FUTUR est le seul programme qui fusionne études et formations pour les élèves</p><br/>
            <Link className="h-12 px-10 py-3 font-semibold rounded-xl bg-[#65b3d9] shadow-white" href="/inscription">Inscription</Link>
        </div>
    </section>
}