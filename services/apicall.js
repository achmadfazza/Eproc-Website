import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VER = "api/v1";

export async function getGoodsData() {
	const URL = "players/barang";

	const response = await axios.get(`${ROOT_API}/${API_VER}/${URL}`);
	const axiosResponse = response.data;

	return axiosResponse.data;
}

export async function getDetailData(id) {
	const URL = `players/${id}/detail`;

	const response = await axios.get(`${ROOT_API}/${API_VER}/${URL}`);
	const axiosResponse = response.data;

	return axiosResponse.data;
}
