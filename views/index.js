const html = require("html-template-tag");

const signup = html`<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>2fa Test</title>
		</head>
		<body>
			<div>
				<form method="POST" action="/signup">
					<div>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="New Form Who Dis?"
							required
						/>
						<label for="name">Name</label>
					</div>
					<div>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="What's your Email?"
							required
						/>
						<label for="email">Email</label>
					</div>
					<div>
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Gimme Them Digits"
							pattern="[0-9]{10}"
							required
						/>
						<label for="phone">Phone Number</label>
					</div>
					<div>
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		</body>
	</html>`;

const factorview = (user, hiddenphone, id) => html`<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>2fa Test</title>
		</head>
		<body>
			<div>
				<h1>${hiddenphone}</h1>
				<form method="POST" action="/signup">
					<div>
						<input
							type="text"
							id="code"
							name="code"
							placeholder="Authenticate Who Dis?"
							required
						/>
						<label for="code">Authentication Code</label>
					</div>
				</form>
			</div>
		</body>
	</html>`;
module.exports = { signup, factorview };
