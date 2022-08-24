import React from "react";
import Link from "next/link";

function Slider({ data }) {
	return (
		<div id="galery" className="max-w-[1240px] mx-auto mt-5 pb-16">
			<h1 className="text-4xl font-bold mb-5 text-center">Daftar Pengadaan</h1>
			<div className="overflow-auto rounded-lg shadow hidden md:block">
				<table className="w-full">
					<thead className="bg-gray-50 border-b-2 border-gray-200">
						<tr>
							<th className="w-20 p-3 text-xl font-semibold tracking-wide text-left">No.</th>
							<th className="p-3 text-xl font-semibold tracking-wide text-left">
								Subject Pengadaan
							</th>
							<th className="w-24 p-3 text-xl font-semibold tracking-wide text-left">Kategori</th>
							<th className="w-24 p-3 text-xl font-semibold tracking-wide text-left">Lokasi</th>
							<th className="w-32 p-3 text-xl font-semibold tracking-wide text-left">
								Pembukaan Registrasi
							</th>
							<th className="w-32 p-3 text-xl font-semibold tracking-wide text-left">
								Penutupan Registrasi
							</th>
						</tr>
					</thead>
					{data.map((item, index) => (
						<tbody className="divide-y divide-gray-100" key={item._id}>
							<tr className="bg-gray-50">
								<td className="p-3 text-xl text-gray-700 whitespace-nowrap" id={item._id}>
									<Link href={`/detail/` + item._id}>
										<a className="font-bold text-gray-500 " id={item._id}>
											{index + 1}
										</a>
									</Link>
								</td>
								<Link href={`/detail/` + item._id}>
									<td className="p-3 text-xl text-gray-700 whitespace-nowrap font-bold hover:text-blue-800 cursor-pointer">
										{item.name}
									</td>
								</Link>
								<td className="p-3 text-xl text-gray-700 whitespace-nowrap">
									{item.category.name}
								</td>
								<td className="p-3 text-xl text-gray-700 whitespace-nowrap">
									{item.location.name}
								</td>
								<td className="p-3 text-xl text-gray-700 whitespace-nowrap">
									{item.reservationdate}
								</td>
								<td className="p-3 text-xl text-gray-700 whitespace-nowrap">{item.endingdate}</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>

			{/* mobile */}
			<div className="grid sm:grid-cols-2 grid-cols-1 gap-4 md:hidden">
				{data.map((item, index) => (
					<Link href={`/detail/` + item._id} key={item._id}>
						<div className="bg-white space-y-3 p-4 rounded-lg shadow" id={item._id}>
							<div className="flex items-center space-x-2 text-sm">
								<div id={item._id}>
									<a className="text-blue-500 font-bold hover:underline">{index + 1}</a>
								</div>
								<div>
									<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50 mr-1">
										{item.reservationdate}
									</span>
									<span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50 ">
										{item.endingdate}
									</span>
								</div>
							</div>
							<div className="text-sm text-gray-700">Subject Pengadaan : {item.name}</div>
							<div className="text-sm font-medium text-black">Lokasi : {item.location.name}</div>
						</div>
					</Link>
				))}
			</div>
			{/* end mobile */}
		</div>
	);
}

export default Slider;
