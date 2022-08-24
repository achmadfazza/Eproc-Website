import { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Slider from "../components/Slider";
import { getGoodsData } from "../services/apicall";

export default function Home() {
	const [goodsList, setGoodsList] = useState([]);

	const getGoodsApi = useCallback(async () => {
		const data = await getGoodsData();
		setGoodsList(data);
	});

	useEffect(() => {
		getGoodsApi();
	});

	return (
		<Layout>
			<Hero heading="Pengadaan Barang & Jasa" message="PT Mazzoni Java Utama ." />
			<Slider data={goodsList} />
		</Layout>
	);
}
