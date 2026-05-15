import type { Metadata } from 'next';
import BackToTop from '@/components/sections/BackToTop';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import TopHeader from '@/components/sections/TopHeader';
import FormationsDetails from '@/components/sections/FormationsDetails';
import TitleFormation from '@/components/sections/TitleFormation';

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
            <TitleFormation>FORMATIONS</TitleFormation>
            <FormationsDetails />
            <Footer />
        </>
    );
}
