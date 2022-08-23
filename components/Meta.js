import Head from "next/head";
import { meta } from "../data/config";

const Meta = () => (
	<Head>
		<title>{meta.title}</title>
		<meta name="robots" content="follow, index" />
		<meta name="description" content={meta.description} />
		<meta name="image" content={meta.image} />

		<meta property="og:title" content={meta.title} />
		<meta property="og:description" content={meta.ogDescription} />
		<meta property="og:url" content={meta.url} />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content={meta.title} />

		<meta name="twitter:title" content={meta.title} />
		<meta name="twitter:description" content={meta.ogDescription} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="keywords" content={meta.keywords}></meta>
		<link rel="canonical" href={meta.url} />

		<meta charSet="utf-8" />
		<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
		<meta content="width=device-width, initial-scale=1" name="viewport" />
	</Head>
);

export default Meta;
