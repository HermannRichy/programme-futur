import { CodeSquare, CheckCheck, GraduationCap } from "lucide-react";

export default function FormationsDetails() {
    return (
        <section className="py-10 px-2">
            <article>
                <div className="bg-[#65b3d9] flex justify-center items-center">
                    <span className="text-white">1</span>
                </div>
                <div className="flex mt-2">
                    <div className="flex justify-center items-center gap-2 bg-[#24324d] w-1/2 p-1">
                        <CodeSquare className="text-white w-10 h-10" />
                        <h3 className="font-semibold text-center text-[#65b3d9]">
                            DEVELOPPEMENT WEB
                        </h3>
                    </div>
                    <div className="w-1/2">
                        <img
                            className="h-[150px] w-full"
                            src="/images/about.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex mt-2">
                    <div className="w-1/2 p-1 border border-gray-500">
                        <ul>
                            <li className="flex items-center font-semibold">
                                <CheckCheck className="text-[#65b3d9] mr-5" />{" "}
                                HTML
                            </li>
                            <li className="flex items-center font-semibold">
                                <CheckCheck className="text-[#65b3d9] mr-5" />{" "}
                                CSS
                            </li>
                            <li className="flex items-center font-semibold">
                                <CheckCheck className="text-[#65b3d9] mr-5" />{" "}
                                JAVA
                            </li>
                            <li className="flex items-center font-semibold">
                                <CheckCheck className="text-[#65b3d9] mr-5" />{" "}
                                BOOSTRAP
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 p-1 bg-[#24324d] text-white flex">
                        <GraduationCap className="text-gold-400" />
                        <p>
                            Certificat de fin de formation et ouverture sur le
                            marché d’emploi
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
}
