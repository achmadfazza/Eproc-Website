import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

function checkout() {
	return (
		<Layout>
			<Hero heading="Daftar Supplier" message="Halaman Pendaftaran Supplier" />
			<ContactForm />
		</Layout>
	);
}

export default checkout;
