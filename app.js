const express = require("express");
const app = express();
const routes = require('./routes')
app.use(express.static("./public"))

app.use('/', routes)

const PORT = 666;
	app.listen(PORT, () =>
		console.log(`\x1b[31m%s\x1b[0m`, "🚀YO I'M LISTENING ON PORT 666!🚀")
	);