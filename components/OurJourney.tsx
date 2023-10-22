/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const OurJourney = () => {
	return (
		<div
			id="OurJourney"
			className="flex  w-full max-w-[90rem] mx-auto flex-col items-center justify-around gap-4 bg-black md:h-screen md:flex-row px-10 md:px-[10%]">
			<div>
				<Image
					// src="/ourjourney.jpg"
					src="/logo.png"
					alt=""
					height={1000}
					width={500}
					unoptimized={true}
					className="rounded-md object-cover"
				/>
				{/* <Image
					src="/images/2.jpg"
					alt=""
					height={50}
					unoptimized={true}
					width={50}
					className="h-40 w-40 rounded-md object-cover"
				/>
				<Image
					src="/images/3.jpg"
					alt=""
					unoptimized={true}
					height={50}
					width={50}
					className="h-40 w-40 rounded-md object-cover"
				/>
				<Image
					src="/images/4.JPG"
					alt=""
					unoptimized={true}
					height={50}
					width={50}
					className="h-40 w-40 rounded-md object-cover"
				/> */}
			</div>
			<div className="flex w-full text-white flex-col items-center justify-center p-5 md:w-[50%]">
				<div className="relative flex h-full w-full items-end">
					<div className="font-marker text-4xl text-center md:text-left w-full mb-5 font-black">
						<p className="font-kanit text-[#caf0f8]">Our Journey</p>
					</div>
				</div>
				<p className="text-md font-normal text-center md:text-left">
					Established in 2018, Northern Peak Industries Private Limited embarked
					on a remarkable journey, driven by a vision to connect global markets
					with the finest resources. Our journey has been marked by Wavering
					dedication, uncompromising quality, and a relentless pursuit of
					customer satisfaction.
					<br /> <br />
					Today, we stand tall as a reliable exporter of minerals and FMCG
					products to various corners of the world.
					<br /> <br />
					Our dedication to expanding horizons has led us to serve markets
					across South East Asian countries such as the Middle East, Nepal,
					Bangladesh, and Sri Lanka. We have fostered strong relationships with
					international clients and partners, making us a preferred choice for
					sourcing minerals and FMCG products.
					<br /> <br />
					As we look to the future, Northern Peak Industries Private Limited
					aims to extend its boundaries even further, reaching new corners of
					the world. Our vision is to become a global leader in the export
					industry, known for our unwavering commitment to quality,
					sustainability, and customer satisfaction.
				</p>
			</div>
		</div>
	);
};

export default OurJourney;
