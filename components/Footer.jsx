import React from "react";

function Footer() {
	return (
		<footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:p-6 mt-32 ">
			<span className="text-md text-black sm:text-center hover:text-gray-800">
				© 2022{" "}
				<a href="https://google.com/" className="hover:underline" target="_blank">
					PT Mazzoni Java Utama™
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
}

export default Footer;
