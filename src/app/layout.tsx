import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://programme-futur.vercel.app";

export const metadata: Metadata = {
    metadataBase: new URL(APP_URL),
    title: {
        default: "Programme FUTUR — Formation Numérique au Bénin",
        template: "%s — Programme FUTUR",
    },
    description:
        "Programme FUTUR forme gratuitement les élèves du Bénin aux métiers du numérique : développement web, IA, pilotage de drone, cybersécurité, graphisme, sérigraphie et plus encore.",
    keywords: [
        "Programme FUTUR",
        "formation numérique Bénin",
        "développement web Bénin",
        "intelligence artificielle élèves",
        "pilotage drone Bénin",
        "cybersécurité formation",
        "formation gratuite Cotonou",
        "éducation technologie Bénin",
        "graphisme sérigraphie Bénin",
        "formation informatique collégiens",
    ],
    authors: [{ name: "Programme FUTUR", url: APP_URL }],
    creator: "Programme FUTUR",
    publisher: "Programme FUTUR",
    category: "Education",
    openGraph: {
        type: "website",
        locale: "fr_BJ",
        url: APP_URL,
        siteName: "Programme FUTUR",
        title: "Programme FUTUR — Formation Numérique au Bénin",
        description:
            "Nous formons gratuitement les élèves du Bénin aux métiers du numérique pendant les vacances scolaires.",
        images: [
            {
                url: "/images/hero.jpg",
                width: 1200,
                height: 630,
                alt: "Programme FUTUR — Formation Numérique au Bénin",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Programme FUTUR — Formation Numérique au Bénin",
        description:
            "Nous formons gratuitement les élèves du Bénin aux métiers du numérique pendant les vacances scolaires.",
        images: ["/images/hero.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/logo.png",
    },
    manifest: "/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="fr" suppressHydrationWarning>
                <body className={`${outfit.variable} antialiased font-outfit`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem={false}
                        disableTransitionOnChange
                    >
                        {children}
                        <Toaster position="top-center" />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
