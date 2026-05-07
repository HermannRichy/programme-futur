import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    return <div className="bottom-10 right-10 bg-[#febf24] w-10 h-10 rounded-full flex items-center justify-center fixed">
        <Link href="#topHeader">
            <ChevronUp className="text-white p-1 w-8 h-8 font-bold" />
        </Link>
    </div>
}