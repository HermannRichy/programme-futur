import { MapPin } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const sites = [
    { city: "COTONOU 1", detail: "Houéyiho, Hôtel de la Cité" },
    { city: "COTONOU 2", detail: "AKPAKPA, EYA CENTRE" },
    { city: "GODOMEY", detail: "Derrière le CEG" },
    { city: "DASSA", detail: "Dans l'école catholique" },
];

export default function Emplacements() {
    return (
        <section className="bg-[#65b3d9] md:flex">
            <aside className="p-8 md:p-12 md:w-1/2">
                <h2 className="font-bold text-2xl md:text-3xl mb-8">NOS SITES DE FORMATION</h2>
                <ul className="space-y-4">
                    {sites.map(({ city, detail }) => (
                        <li key={city}>
                            <Card className="bg-white/20 border-white/30 backdrop-blur-sm">
                                <CardContent className="flex items-center gap-4 p-4">
                                    <MapPin className="w-5 h-5 text-white shrink-0" />
                                    <p className="text-sm md:text-base">
                                        <span className="font-bold text-[#24324d]">{city} : </span>
                                        <span className="text-white">{detail}</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </li>
                    ))}
                </ul>
            </aside>
            <aside className="md:w-1/2">
                <Image
                    src="/map.jpg"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    alt="Carte des sites de formation"
                />
            </aside>
        </section>
    );
}
