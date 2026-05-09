import type { Metadata } from 'next';
import BackToTop from '@/components/sections/BackToTop';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Title from '@/components/sections/Title';
import TopHeader from '@/components/sections/TopHeader';
import Formations from '@/components/sections/Formations';

export const metadata: Metadata = {
    title: 'Formations',
    description:
        "Explorez toutes nos formations numériques gratuites au Bénin : développement web, intelligence artificielle, pilotage de drone, cybersécurité, graphisme, sérigraphie et initiation à l'informatique.",
    openGraph: { title: 'Formations — Programme FUTUR', url: '/formations' },
    alternates: { canonical: '/formations' },
};

export default function FormationsPage() {
    return (
        <>
            <TopHeader />
            <BackToTop />
            <Header />
            <Title>FORMATIONS</Title>
            <Formations />
            <Footer />
        </>
    );
}
