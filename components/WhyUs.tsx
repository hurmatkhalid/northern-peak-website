/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const WhyUs = () => {
	return (
		<div
			id="WhyUs"
			className="flex  w-full max-w-[90rem] mx-auto flex-col items-center justify-around gap-4 bg-black md:h-screen md:flex-row px-10 md:px-[10%]">
			<div className="order-last">
				<Image
					src="/ourjourney.jpg"
					alt=""
					height={900}
					width={400}
					unoptimized={true}
					className="rounded-md object-cover"
				/>
			</div>
			<div className="flex w-full text-white flex-col items-center justify-center p-5 md:w-[50%]">
				<div className="relative flex h-full w-full items-end">
					<div className="font-marker text-4xl text-center md:text-left w-full mb-5 font-black">
						<p className="font-kanit text-[#caf0f8]">Why Choose Us?</p>
					</div>
				</div>
				<div className="text-md font-normal text-center md:text-left">
					<p className="font-kanit text-[#caf0f8]">Quality Assurance</p> We
					uphold the highest standards of quality in all our products, ensuring
					they meet and exceed industry norms.
					<br /> <br />
					<p className="font-kanit text-[#caf0f8]">Customer-Centric</p> Our
					customer-centric approach means we prioritize your needs and
					preferences, striving to exceed your expectations.
					<br /> <br />
					<p className="font-kanit text-[#caf0f8]">Global Network</p> With a
					vast network of partners and clients, we have the reach to serve your
					needs wherever you are.
					<br /> <br />
					<p className="font-kanit text-[#caf0f8]">Sustainability</p> We are
					committed to responsible sourcing and sustainable practices,
					contributing to a better world.
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
