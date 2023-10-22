'use client';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcons from './SocialIcons';
import { useEffect, useState } from 'react';

// backdrop-blur-md
// bg-opacity-60 shadow-xl
const Header = () => {
	const [show, handleshow] = useState(false);
	const styleLink =
		'text-[white] font-semibold tracking-widest cursor-pointer uppercase transitions';

	const transitionNavBar = () => {
		if (window.scrollY > 100) {
			handleshow(true);
		} else {
			handleshow(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	});

	return (
		<div className={`${show && 'bg-black'} fixed top-0 z-40`}>
			<div
				className={`px-6 py-2 h-20 flex transition-all duration-300 ease-in-out items-center w-screen justify-between  `}>
				{/* Image */}
				<div className="flex">
					<div className="flex items-center cursor-pointer space-x-2 md:border-r md:border-gray-600">
						<Image src="/logo.png" height={40} width={40} alt="Logo" />
						<p className="tracking-widest font-semibold pr-5 text-white uppercase">
							NORTHERN PEAK INDUSTRIES
						</p>
					</div>
					<div className="md:flex items-center pl-7 hidden space-x-4 md:space-x-10 lg:space-x-12">
						<a href="/" className={styleLink}>
							Home
						</a>
						<Link href="#OurJourney" className={styleLink}>
							Our Journey
						</Link>
						<Link href="#ProductRange" className={styleLink}>
							Product Range
						</Link>
						<Link href="#WhyUs" className={styleLink}>
							Why Us
						</Link>
					</div>
				</div>
				<SocialIcons />
			</div>
		</div>
	);
};

export default Header;
