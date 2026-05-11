import { MapPin } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Emplacements() {
    return (
        <section className="bg-[#65b3d9] md:flex max-w-7xl mx-auto ">
            <aside className="p-8 md:w-1/2">
                <h2 className="font-bold text-2xl md:text-3xl mb-8">NOS SITES DE FORMATION</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <EmplacementsList city="GODOMEY PK 14" detail=" Immeuble du Supermarché Ô Bénin" />
                    <EmplacementsList city="COTONOU 1" detail=" Menontin, rue du supermarché MontSinaï" />
                    <EmplacementsList city="BOHICON" detail=" École catholique saint François d'Assise" />
                    <EmplacementsList city="DASSA" detail=" Collège Catholique Saint Michel de Dassa " />
                    <EmplacementsList city="PARAKOU" detail=" Université ESAE" />
                    <EmplacementsList city="NATITINGOU" detail=" EPP Tchriminan" /> 
                    <EmplacementsList city="COTONOU 2" detail=" Haie-Vive" />
                    <EmplacementsList city="COTONOU 3 Sèmè-Kpodji" detail="Immeuble du centre de formation CIEFP-Benin " />
                </div>
            </aside>
            <aside className="md:w-1/2">
                <Image
                    src="/sat.png"
                    width={100}
                    height={100}
                    quality={100}
                    className="w-full h-full object-cover "
                    alt="Carte des sites de formation"
                />
            </aside>
        </section>
    );
}

export function EmplacementsList({ city, detail }: { city: string; detail: string}) {
    return (
                 <Card className="bg-white/20 border-white/30 backdrop-blur-sm">
                     <CardContent className="flex flex-col  gap-4 p-4 ">
                         <p className="text-sm md:text-base flex gap-2 "> 
                             <MapPin className="w-5 h-5 text-white shrink-0" />
                             <span className="font-bold text-[#24324d]">{city} </span> 
                        </p>
                         <span className="text-white">{detail}</span>
                    </CardContent>
                </Card>
    )
}