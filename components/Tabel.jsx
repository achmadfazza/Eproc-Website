import React from "react";
import Buttons from "./Buttons";

function Tabel({ data, dataLocation, dataCategory }) {
	return (
		<div className="max-w-[768px] mx-auto mt-5 pb-10">
			<h1 className="text-4xl font-bold mb-5 text-center">Informasi Pengadaan</h1>
			<div className="overflow-auto rounded-lg shadow ">
				<table className="w-full text-left mt-5">
					<tbody className="text-black ">
						<tr>
							<th className="p-1 rounded-lg shadow ">Nomer ID</th>
							<td className="p-1 rounded-lg shadow">{data._id}</td>
						</tr>
						<tr>
							<th className="p-1 rounded-lg shadow">Nama Pengadaan</th>
							<td className="p-1 rounded-lg shadow">{data.name}</td>
						</tr>
						<tr>
							<th className="p-1 rounded-lg shadow">Kategori</th>
							<td className="p-1 rounded-lg shadow">{dataCategory.name}</td>
						</tr>
						<tr>
							<th className="p-1 rounded-lg shadow">Lokasi Pengadaan</th>
							<td className="p-1 rounded-lg shadow">{dataLocation.name}</td>
						</tr>
						<tr>
							<th className="p-1 rounded-lg shadow">Tanggal Pembukaan</th>
							<td className="p-1 rounded-lg shadow">{data.reservationdate}</td>
						</tr>
						<tr>
							<th className="p-1 rounded-lg shadow">Tanggal Penutupan</th>
							<td className="p-1 rounded-lg shadow">{data.endingdate}</td>
						</tr>
						<tr>
							<th className="p-1 rounded-lg shadow">Kebutuhan</th>
							<td className="p-1 rounded-lg shadow">{data.requirement}</td>
						</tr>
						<tr>
							<th className="p-1 rounded-lg shadow">Deskripsi</th>
							<td className="p-1 rounded-lg shadow">{data.description}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Buttons />
		</div>
	);
}

export default Tabel;
