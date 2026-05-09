import type { Metadata } from 'next';
import BackToTop from '@/components/sections/BackToTop';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import Title from '@/components/sections/Title';
import TopHeader from '@/components/sections/TopHeader';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Contactez le Programme FUTUR : envoyez-nous un message, appelez-nous ou retrouvez-nous sur nos réseaux sociaux. Nous sommes basés à Cotonou, Bénin.',
    openGraph: { title: 'Contact — Programme FUTUR', url: '/contact' },
    alternates: { canonical: '/contact' },
};

export default function ContactPage() {
    return (
        <>
            <TopHeader />
            <BackToTop />
            <Header />
            <Title>CONTACT</Title>
            <Contact />
            <Footer />
        </>
    );
}
