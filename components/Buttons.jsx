import React from "react";
import Link from "next/link";

function Buttons() {
	return (
		<div className="mt-5 flex justify-center pt-5">
			<Link href="/">
				<button
					type="button"
					className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
					Kembali ke Menu
				</button>
			</Link>
			<Link href="/checkout">
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none">
					Ikut Pengadaan
				</button>
			</Link>
		</div>
	);
}

export default Buttons;
