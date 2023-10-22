import Image from 'next/image';
const Footer = () => {
	return (
		<div className="bg-[#caf0f8] text-black py-10 px-[5%] text-sm font-kanit">
			<div className="flex flex-col space-y-4 items-center justify-between md:space-y-0 md:flex-row md:space-x-4">
				<div className="">
					<Image src="/logo.png" height={10000} width={40} alt="Logo" />
					<p className="text-sm">Northern Peak Industries Ltd</p>
				</div>
				<div className="">@proevp. All rights reserved.</div>
				<div className="">
					Get In Touch
					<p>+91-9773699919</p>
					<p>northernpeakind@gmail.com</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
