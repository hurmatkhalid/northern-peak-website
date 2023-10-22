'use client';

import Link from 'next/link';

type Props = {};

const Banner = (props: Props) => {
	return (
		<div
			style={{
				backgroundImage: `url(/banner.jpg)`,
				backgroundPosition: 'center center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat',
			}}
			className="text-white min-h-screen md:h-screen w-full text-center overflow-x-hidden flex flex-col items-center justify-center  relative md:py-0">
			<div
				className="absolute bottom-0 z-0 md:h-screen w-full h-full"
				style={{
					background: 'rgba(0,0,0,0.4)',
					backgroundImage: `linear-gradient(to top, rgba(0,0,0, 4) 0, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.5) 100%)`,
				}}
			/>

			<div className="w-full z-10  justify-center items-center px-4 md:px-0  flex flex-col space-y-3">
				<p
					className="uppercase tracking-widest text-xl font-medium text-[#caf0f8] font-kanit"
					style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}>
					Leading Player in The EXPORT INDUSTRY
				</p>
				<h1
					className="text-4xl tracking-wide font-kanit uppercase"
					style={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.4)' }}>
					Welcome to Northern Peak Industries Private Limited
				</h1>
				<div className="flex flex-col space-y-4 items-center justify-center md:space-y-0 md:flex-row md:space-x-4">
					<Link
						href="#OurJourney"
						className="font-kanit px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#0096c7] bg-[#0096c7] transition-all duration-200 ease-in">
						More About us
					</Link>
					<Link
						href="mailto:northernpeakind@gmail.com"
						className="font-kanit px-4 py-2 rounded-lg flex items-center justify-center uppercase tracking-widest border-2 border-[#0096c7] transition-all duration-200 ease-in">
						Get in touch
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Banner;
