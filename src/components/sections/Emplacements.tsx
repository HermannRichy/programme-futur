import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function Emplacements() {
    return (
        <section className="bg-[#65b3d9] md:flex max-w-7xl mx-auto ">
            <aside className="p-8 md:w-1/2">
                <h2 className="font-bold text-2xl md:text-3xl mb-8">
                    NOS SITES DE FORMATION
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <EmplacementsList
                        city="GODOMEY PK 14"
                        detail=" Immeuble du Supermarché Ô Bénin"
                        rentrée="08 - 15 & 22 juin 2026"
                    />
                    <EmplacementsList
                        city="COTONOU Haie vive"
                        detail="Ecole Royaumes des Anges"
                        rentrée="30 Juin 2026"
                    />
                    <EmplacementsList
                        city="COTONOU Avotrou"
                        detail="Rue de l'hôtel safari, Immeuble du Centre de Formation CIEFP BÉNIN"
                        rentrée="22 juin 2026"
                    />
                    <EmplacementsList
                        city="BOHICON"
                        detail=" École Catholique Saint François d'Assise"
                        rentrée="06 Juillet 2026"
                    />
                    <EmplacementsList
                        city="Porto-Novo"
                        detail=" EPP Ouando"
                        rentrée="22 Juin 2026"
                    />
                    <EmplacementsList
                        city="DASSA"
                        detail=" Collège Catholique Saint Michel de Dassa "
                        rentrée=" 08 &15 juin 2026"
                    />
                    <EmplacementsList
                        city="PARAKOU"
                        detail=" Université ESAE"
                        rentrée="15 juin 2026"
                    />
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

export function EmplacementsList({
    city,
    detail,
    rentrée,
}: {
    city: string;
    detail: string;
    rentrée: string;
}) {
    return (
        <Card className="bg-white/20 border-white/30 backdrop-blur-sm">
            <CardContent className="flex flex-col  gap-4 p-4 ">
                <p className="text-sm md:text-base flex gap-2 ">
                    <MapPin className="w-5 h-5 text-white shrink-0" />
                    <span className="font-bold text-[#24324d]">{city} </span>
                </p>
                <span className="text-white">{detail}</span>
                <span className="text-white/70 font-semibold border rounded-xl border-white/30 p-2">
                    Date de Rentrée : {rentrée}
                </span>
            </CardContent>
        </Card>
    );
}
