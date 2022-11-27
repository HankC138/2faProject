const html = require('html-template-tag')
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
			<form action="POST">
				<div>
					<input
						type="text"
						id="name"
						placeholder="New Form Who Dis?"
						required
					/>
					<label for="name">Name</label>
				</div>
				<div>
					<input
						type="email"
						id="email"
						placeholder="What's your Email?"
						required
					/>
					<label for="email">Email</label>
				</div>
				<div>
					<input
						type="tel"
						id="phone"
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
</html>`


module.exports = signup;