import { CodeSquare, CheckCheck, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function FormationsDetails() {
    return (
        <section className="py-12 px-4 max-w-4xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-lg">
                <div className="flex items-center gap-3 bg-[#65b3d9] px-4 py-3">
                    <Badge className="w-7 h-7 rounded-full bg-[#24324d] text-white flex items-center justify-center p-0 font-bold shrink-0">
                        1
                    </Badge>
                    <div className="flex items-center gap-2">
                        <CodeSquare className="text-white w-5 h-5" />
                        <h3 className="font-bold text-white">
                            DÉVELOPPEMENT WEB
                        </h3>
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2">
                        <Image
                            src="/images/about.jpg"
                            alt="Développement web"
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                    </div>
                    <div className="w-1/2 bg-[#24324d] p-4 flex items-center">
                        <div className="flex items-start gap-2 text-white">
                            <GraduationCap className="w-5 h-5 text-[#febf24] shrink-0 mt-0.5" />
                            <p className="text-sm leading-relaxed">
                                Certificat de fin de formation et ouverture sur
                                le marché d&apos;emploi
                            </p>
                        </div>
                    </div>
                </div>

                <CardContent className="p-4">
                    <ul className="space-y-2">
                        {['HTML', 'CSS', 'JavaScript', 'Bootstrap'].map(
                            (item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 font-semibold text-[#24324d]"
                                >
                                    <CheckCheck className="text-[#65b3d9] w-5 h-5 shrink-0" />
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </CardContent>
            </Card>
        </section>
    );
}
