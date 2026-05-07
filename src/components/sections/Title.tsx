export default function Title({children} : {children: string}) {
    return <section className="h-48 md:h-60 bg-[#24324d] text-white flex items-center justify-center">
        <div>
            <h1 className="text-center font-bold text-2xl">{children}</h1>
            <div className="flex justify-center items-center mx-auto">
                <div className="border border-white w-16 h-0"></div>
                <div className="w-4 h-4 rounded-full bg-[#febf24]"></div>
                <div className="border border-white w-16 h-0"></div>
            </div>
        </div>
    </section>
}