import Header from '@/components/Header';
import Image from 'next/image';
import Banner from '@/components/Banner';
import OurJourney from '@/components/OurJourney';
import ProductRange from '@/components/ProductRange';
import WhyUs from '@/components/WhyUs';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<main>
			<Header />
			<Banner />
			<OurJourney />
			<ProductRange />
			<WhyUs />
			<Footer />
		</main>
	);
}
