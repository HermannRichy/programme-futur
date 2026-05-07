export default function PartnerSection() {

    return <section className="px-3 py-16 lg:p-10 m-auto bg-[url('/partok2.png')]">
        <div className="text-center text-[#24324d]">
            <h2 className="font-bold text-2xl">NOS PARTENAIRES</h2>
            <div className="flex justify-center items-center">
                <div className="border border-[#24324d] w-20 h-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#febf24]"></div>
                <div className="border border-[#24324d] w-20 h-0"></div>
            </div>
        </div><br/><br/>
        <div className="h-112.5 w-4/5 m-auto border border-cyan-950">
            <img src="/partok1.png" className="w-full h-full"/>
        </div>
        <p className="text-center font-semibold">
            Nous sommes tous plus que ravie de travailler et de contribuer à ce projet qui enseigne le numerique dès le bas âge
        </p>
    </section>
}