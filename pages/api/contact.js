import nodemailer from "nodemailer";

export default async (req, res) => {
	const { name, email, company, message, npwp, telephone, address } = req.body;
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.APP_PASSWORD,
		},
	});

	try {
		await transporter.sendMail({
			from: email,
			to: "fazachmd@gmail.com",
			subject: `E Procurement Website`,
			html: `<h4>Anda mendapat Pesan Dari Eprocurement Website</h4>
      <p><strong>Nama: </strong> ${name}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Perusahaan: </strong> ${company}</p>
      <p><strong>Npwp: </strong> ${npwp}</p>
      <p><strong>Telephone: </strong> ${telephone}</p>
      <p><strong>Alamat: </strong> ${address}</p>
      <p><strong>Message: </strong> ${message}</p>
      `,
		});
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
	return res.status(200).json({ error: "" });
};
