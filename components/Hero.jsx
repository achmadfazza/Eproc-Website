const Hero = ({ heading, message }) => {
	return (
		<div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
			{/* overlay */}
			<div className="w-full h-full object-cover absolute mix-blend-overlay bg-black/20" />
			<div className="p-5 text-white z-[2] mt-[4rem] sm:mt-[2rem] ">
				<h2 className="text-5xl font-bold">{heading}</h2>
				<p className="py-5 text-xl">{message}</p>
				<button className="px-8 py-2 border">Kontak Kami</button>
			</div>
		</div>
	);
};

export default Hero;
