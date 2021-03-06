require("dotenv").config();
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			(name.trim() === "") | !message ||
			message.trim() === ""
		) {
			return res.status(422).json({ message: "Invalid Data" });
		}

		// store messages in database
		const newMessage = {
			email,
			name,
			message,
		};

		let client;

		try {
			client = await MongoClient.connect(process.env.MONGO_URI);
		} catch (error) {
			res.status(500).json({ message: "Could not connect to database" });
			return;
		}

		const db = client.db();
		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage._id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: "Storing message failed." });
		}
		client.close();
		res.status(201).json({ message: "Successfully stored message!" });
	}
}
