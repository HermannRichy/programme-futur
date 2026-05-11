import type { Metadata } from 'next';
import BackToTop from '@/components/sections/BackToTop';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Title from '@/components/sections/Title';
import TopHeader from '@/components/sections/TopHeader';
import RealisationsFilter from '@/components/sections/RealisationsFilter';

export const metadata: Metadata = {
    title: 'Réalisations',
    description:
        'Retour sur les éditions passées du Programme FUTUR : découvrez les réalisations de nos apprenants depuis 2021 en développement web, graphisme, drone et bien plus.',
    openGraph: {
        title: 'Réalisations — Programme FUTUR',
        url: '/realisations',
    },
    alternates: { canonical: '/realisations' },
};

export default function RealisationsPage() {
    return (
        <>
            <TopHeader />
            <BackToTop />
            <Header />
            <Title>GALERIE</Title>
            <RealisationsFilter />
            <Footer />
        </>
    );
}
