import React, { useState } from "react";
import Loader from "./Loader";
import { ErrorMessage, SuccessMessage } from "./Message";

function ContactForm() {
	const [input, setInput] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
		npwp: "",
		telephone: "",
		address: "",
	});

	const [form, setForm] = useState("");

	const handleChange = (e) => {
		setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();

		if (
			input.name &&
			input.email &&
			input.company &&
			input.message &&
			input.npwp &&
			input.telephone &&
			input.address
		) {
			setForm({ state: "Loading" });
			try {
				const response = await fetch(`api/contact`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(input),
				});
				const { error } = await response.json();
				if (error) {
					setForm({
						state: "error",
						message: error,
					});
					return;
				}
				setForm({
					state: "success",
					message: "Pesan anda sudah terkirim",
				});
				setInput({
					name: "",
					email: "",
					company: "",
					message: "",
					npwp: "",
					telephone: "",
					address: "",
				});
			} catch (error) {
				setForm({
					state: "error",
					message: "Terdapat Kesalahan",
				});
			}
		}
	};
	return (
		<div className="max-w-[1240px] m-auto p-4 h-screen">
			<h1 className="font-bold text-4xl text-center p-5">Form Data Supplier</h1>
			<form className="max-w-[600px] m-auto" onSubmit={(e) => onSubmitForm(e)}>
				<div className="grid grid-cols-2 gap-2">
					<input
						className="border shadow-lg p-3"
						id="name"
						name="name"
						type="text"
						value={input.name}
						onChange={handleChange}
						placeholder="Nama"
						required
					/>
					<input
						className="border shadow-lg p-3"
						id="email"
						name="email"
						type="email"
						value={input.email}
						onChange={handleChange}
						placeholder="Email"
						required
					/>
				</div>
				<input
					className="border shadow-lg p-3 w-full my-2"
					id="company"
					name="company"
					type="text"
					value={input.company}
					onChange={handleChange}
					placeholder="Perusahaan"
					required
				/>
				<input
					className="border shadow-lg p-3 w-full my-2"
					id="npwp"
					name="npwp"
					type="text"
					value={input.npwp}
					onChange={handleChange}
					placeholder="Npwp"
					required
				/>
				<input
					className="border shadow-lg p-3 w-full my-2"
					id="telephone"
					name="telephone"
					type="text"
					value={input.telephone}
					onChange={handleChange}
					placeholder="Nomer Telepon"
					required
				/>
				<textarea
					className="border shadow-lg p-3 w-full"
					id="address"
					name="address"
					cols="30"
					rows="5"
					value={input.address}
					onChange={handleChange}
					placeholder="Alamat Perusahaan"
					required></textarea>
				<textarea
					className="border shadow-lg p-3 w-full"
					id="message"
					name="message"
					cols="30"
					rows="5"
					value={input.message}
					onChange={handleChange}
					placeholder="Message"
					required></textarea>
				<button
					type="submit"
					className="border rounded-md shadow-lg p-3 w-full mt-2 font-bold text-xl">
					Kirim
				</button>
				<div className="pt-4 text-bold">
					{form.state === "loading" && <Loader />}
					{form.state === "error" ? (
						<ErrorMessage>{form.message}</ErrorMessage>
					) : form.state === "success" ? (
						<SuccessMessage>{form.message}</SuccessMessage>
					) : (
						" "
					)}
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
