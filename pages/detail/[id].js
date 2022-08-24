import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import Tabel from "../../components/Tabel";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { getDetailData } from "../../services/apicall";

export default function detail() {
	const { query, isReady } = useRouter();
	const [detailData, setDetailData] = useState({});
	const [dataCategory, setDataCategory] = useState({});
	const [dataLocation, setDataLocation] = useState({});

	const getIdData = useCallback(async (id) => {
		const data = await getDetailData(id);
		setDetailData(data);
		setDataCategory(data.category);
		setDataLocation(data.location);
	});

	useEffect(() => {
		if (isReady) {
			getIdData(query.id);
		} else {
			console.log("router belum tersedia");
		}
	});

	return (
		<Layout>
			<Hero heading="Pengadaan Barang & Jasa" message="PT Mazzoni Java Utama ." />

			<Tabel data={detailData} dataCategory={dataCategory} dataLocation={dataLocation} />
		</Layout>
	);
}
