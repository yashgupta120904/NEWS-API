const mongoose = require("mongoose");
const { CONNECTION_STRING } = require("../contexts");
const contactDb = async () => {
	try {
		const connect = await mongoose.connect(CONNECTION_STRING);

		console.log(
			"DATABASE CONNECTED: ",
			connect.connection.host,
			connect.connection.name
		);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
module.exports = contactDb; 