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

export const metadata: Metadata = {
    title: "Start Web App - Premium Starter",
    description:
        "A high-performance fullstack starter template with Next.js 16, Clerk, and Prisma.",
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
