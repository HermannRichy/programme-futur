import { MapPin } from "lucide-react";
import Image from "next/image";

export default function Emplacements() {
    return <section className="bg-[#65b3d9] md:flex">
        <aside className="p-5 md:p-10 md:w-1/2">
            <h2 className="font-bold text-2xl">NOS SITES DE FORMATION</h2>
            <ul className="list-none text-xs md:text-sm lg:text-lg">
                <li className="mt-10 flex items-center">
                    <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white"/>
                    <h3 className="font-semibold mr-1">COTONOU 1 : </h3>
                    <p className="text-white"> Houéyiho, Hôtel de la Cité</p>
                </li>
                <li className="mt-10 flex items-center">
                    <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white"/>
                    <h3 className="font-semibold mr-1">COTONOU 2 : </h3>
                    <p className="text-white"> AKPKPA, EYA CENTRE</p>
                </li>
                <li className="mt-10 flex items-center">
                    <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white"/>
                    <h3 className="font-semibold mr-1">GODOMEY : </h3>
                    <p className="text-white"> Derrière le CEG </p>
                </li>
                <li className="mt-10 flex items-center">
                    <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white"/>
                    <h3 className="font-semibold mr-1">DASSA : </h3>
                    <p className="text-white"> Dans l’école catholique</p>
                </li>
            </ul>
        </aside>
        <aside className="md:w-1/2">
            <Image src="/map.jpg"
             width={1000} height={1000}
             className="w-full h-full" alt="Map" />
        </aside>
    </section>
}