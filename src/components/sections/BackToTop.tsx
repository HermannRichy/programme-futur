import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    return (
        <div className="fixed bottom-8 right-8 z-50">
            <Link
                href="#topHeader"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#febf24] shadow-lg hover:bg-[#e5ab1e] transition-colors"
                aria-label="Retour en haut"
            >
                <ChevronUp className="w-5 h-5 text-white" />
            </Link>
        </div>
    );
}
