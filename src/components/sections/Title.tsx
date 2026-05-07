export default function Title({ children }: { children: string }) {
    return (
        <section className="h-48 md:h-64 bg-[#24324d] text-white flex items-center justify-center">
            <div className="text-center">
                <h1 className="font-bold text-2xl md:text-3xl mb-4">{children}</h1>
                <div className="flex justify-center items-center">
                    <div className="border border-white w-16 h-0" />
                    <div className="w-3 h-3 rounded-full bg-[#febf24] mx-1" />
                    <div className="border border-white w-16 h-0" />
                </div>
            </div>
        </section>
    );
}
