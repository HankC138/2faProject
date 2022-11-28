const express = require("express");
const { db } = require("./models");
const app = express();
const routes = require("./routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));
(async () => {
	app.get("/", (_req, res) => {
		res.redirect("/signup");
	});
	app.post("/authorized", routes);
	app.get("/auth/:id", routes);
	app.use("/signup", routes);
	app.use("/auth", routes);
	await db.sync();
	const PORT = 666;
	app.listen(PORT, () =>
		console.log(`\x1b[31m%s\x1b[0m`, "🚀YO I'M LISTENING ON PORT 666!🚀")
	);
})();
