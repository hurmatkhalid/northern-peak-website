import Image from 'next/image';

type Props = {};

const ProductRange = (props: Props) => {
	return (
		<div
			id="ProductRange"
			className="flex text-white mx-auto flex-col justify-center relative h-fit pb-[5%] items-center"
			style={{
				backgroundImage: `url(/spices.jpg)`,
				backgroundPosition: 'center center',
				backgroundSize: 'cover',
				backgroundRepeat: 'repeat',
			}}>
			<div
				className="absolute bottom-0 z-0  w-full h-full"
				style={{
					background: 'rgba(0,0,0,0.4)',
					backgroundImage: `linear-gradient(to top, rgba(0,0,0, 4) 0, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.5) 100%)`,
				}}
			/>
			<div className="relative flex h-full max-w-[80%] items-end text-center">
				<div className="pt-20 font-marker text-2xl text-center md:text-left w-full mb-5 font-black">
					<p className="font-kanit text-[#caf0f8]">
						At Northern Peak Industries, we take immense pride in our diverse
						product portfolio.
					</p>
				</div>
			</div>
			<div className="px-10 z-20 grid grid-cols-1 gap-x-10 mt-20 gap-y-[50px] md:grid-cols-2 place-content-center">
				<div className="min-h-fit flex flex-col justify-center items-center">
					<div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#f64d52]">
						<Image
							src="/mineralicon.png"
							height={40}
							unoptimized={true}
							width={40}
							alt=""
							className="max-w-full w-12 inline-block"
						/>
					</div>
					<div className="flex flex-col justify-items-center items-center">
						<h3 className="text-2xl font-semibold text-center my-5">
							Minerals
						</h3>
						<p className="text-center text-white text-lg">
							Our mineral exports encompass high-quality gypsum, meeting the
							stringent requirements of various industries. We ensure that our
							minerals are sourced responsibly, processed meticulously, and
							delivered with utmost care to maintain their purity and integrity.
							<strong>
								<br />
							</strong>
						</p>
					</div>
				</div>
				<div className="min-h-fit flex flex-col justify-center items-center">
					<div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#548bf4]">
						<Image
							src="/spicesicon.png"
							alt=""
							height={40}
							unoptimized={true}
							width={40}
							className="max-w-full w-16 inline-block"
						/>
					</div>
					<div className="flex flex-col justify-items-center items-center">
						<h3 className="text-2xl font-semibold text-center my-5">
							FMCG Products
						</h3>
						<p className="text-center text-white text-lg">
							We are a trusted source for essential FMCG products, including
							rice, sugar, lentils, soya bean oil, and an array of spices. Our
							commitment to quality ensures that our FMCG offerings are not only
							delicious but also meet the highest hygiene and safety standards.
							<strong>
								<br />
							</strong>
						</p>
					</div>
				</div>
				{/* <div className="min-h-fit flex flex-col justify-center items-center">
					<div className="flex w-24 h-24 justify-center items-center rounded-full bg-[#ffaac3]">
						<Image
							src="/icons/healthFuture.png"
							height={40}
							unoptimized={true}
							width={40}
							alt=""
							className="max-w-full w-12 inline-block"
						/>
					</div>
					<div className="flex flex-col justify-items-center items-center">
						<h3 className="text-2xl font-semibold text-center my-5">
							Healthy futures
						</h3>
						<p className="text-center text-gray-500 text-2xl font-semibold">
							Investing in universal access to health services and information.
							<strong>
								<br />
							</strong>
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default ProductRange;
