import { ChevronRight } from "lucide-react";

export default function Realisations() {
    return <section className="p-5 lg:p-10">
        <div className="text-center text-[#24324d]">
            <h2 className="font-bold text-2xl">NOS REALISATIONS</h2>
            <div className="flex justify-center items-center">
                <div className="border border-[#24324d] w-20 h-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#febf24]"></div>
                <div className="border border-[#24324d] w-20 h-0"></div>
            </div>
        </div><br/><br/>
        <aside className="md:w-5/6 md:m-auto md:grid md:grid-cols-2 gap-8 lg:w-full lg:flex lg:gap-5">
            <article className="flex rounded-xl justify-center items-end mb-5 bg-[url('/public/images/2020.jpg')] bg-cover bg-center h-125 text-white lg:w-1/4 lg:h-100">
                <div className="flex items-center justify-end w-5/6 mb-16">
                    <div className="w-3/4">
                        <h3 className="font-semibold text-xl">Programme FUTUR</h3>
                        <span className="px-5 py-1 font-semibold rounded-xl bg-[#24324d]">Edition 2021</span>
                    </div>
                    <div className="w-1/4">
                        <a className="" href="/realisations"><ChevronRight className="bg-[#65b3d9] rounded-full w-8 h-8 p-1"/></a>
                    </div>
                </div>
            </article>
            <article className="flex rounded-xl justify-center items-end mb-5 bg-[url('/public/images/realisation1.jpeg')] bg-cover bg-center h-125 text-white lg:w-1/4 lg:h-100">
                <div className="flex items-center justify-end w-5/6 mb-16">
                    <div className="w-3/4">
                        <h3 className="font-semibold text-xl">Programme FUTUR</h3>
                        <span className="px-5 py-1 font-semibold rounded-xl bg-[#24324d]">Edition 2022</span>
                    </div>
                    <div className="w-1/4">
                        <a className="" href="/realisations"><ChevronRight className="bg-[#65b3d9] rounded-full w-8 h-8 p-1"/></a>
                    </div>
                </div>
            </article>
            <article className="flex rounded-xl justify-center items-end mb-5 bg-[url('/public/images/20236.jpg')] bg-cover bg-center h-125 text-white lg:w-1/4 lg:h-100">
                <div className="flex items-center justify-end w-5/6 mb-16">
                    <div className="w-3/4">
                        <h3 className="font-semibold text-xl">Programme FUTUR</h3>
                        <span className="px-5 py-1 font-semibold rounded-xl bg-[#24324d]">Edition 2023</span>
                    </div>
                    <div className="w-1/4">
                        <a className="" href="/realisations"><ChevronRight className="bg-[#65b3d9] rounded-full w-8 h-8 p-1"/></a>
                    </div>
                </div>
            </article>
            <article className="flex rounded-xl justify-center items-end mb-5 bg-[url('/public/images/coming-soon.jpg')] bg-cover bg-center h-125 text-white lg:w-1/4 lg:h-100">
                <div className="flex items-center justify-end w-5/6 mb-16">
                    <div className="w-3/4">
                        <h3 className="font-semibold text-xl">Programme FUTUR</h3>
                        <span className="px-5 py-1 font-semibold rounded-xl bg-[#24324d]">Prochaine édition...</span>
                    </div>
                    <div className="w-1/4">
                        <a className="" href="/realisations"><ChevronRight className="bg-[#65b3d9] rounded-full w-8 h-8 p-1"/></a>
                    </div>
                </div>
            </article>
        </aside>
    </section>
}