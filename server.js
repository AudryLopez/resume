const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.set("port", process.env.PORT || 3000);

const staticFilesRoot = "./html";

app.use(cors());

// getting eviroments variables
app.get("/enviroment-variables", (req, res) => {
	let envs = {
		API_URL: process.env.API_URL,
	};
	return res.status(200).send(JSON.stringify(envs));
});

app.use(require("./router/router.js"));

// serve static files
app.use(express.static(path.join(__dirname, staticFilesRoot)));

app.listen(app.get("port"), () => {
	console.log("server on port " + app.get("port"));
});
