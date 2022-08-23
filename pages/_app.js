import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import "../styles/globals.css";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	const preloading = () => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	useEffect(() => {
		preloading();
	});

	return (
		<>
			<Meta />
			{loading ? (
				<Loading />
			) : (
				<>
					<Component {...pageProps} />
				</>
			)}
		</>
	);
}

export default MyApp;
