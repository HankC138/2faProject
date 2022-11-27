const twilio = require("twilio");
const phone = document.querySelector("#phone").value;
const authSendButton = document.querySelector("#2faSend");

authSendButton.addEventListener("click", () => {
	exports.handler = async (event, context) => {
		//twilio account SID as environmental variable
		const accountSid = process.env.ACCOUNTSID;
		//twilio authorization key as environmental variable
		const authToken = process.env.AUTHTOKEN;
		//numbers as an environment variable
		const fromNum = process.env.FROMNUM;
		const toNum = process.env.TONUM;
		//bodt as environment variable
		const messageBody = process.env.MESSBODY;
		//requiring twilio package

		//generating a new instance of twilio
		const client = new twilio(accountSid, authToken);

		//individual message from twilio
		const message = await client.messages.create({
			body: messageBody,
			//numbers as an environment variable
			from: fromNum,
			to: toNum,
		});

		return Promise.resolve({
			code: 200,
			body: JSON.stringify({ message, messageBody }),
		});
	};
});

// console.log(phone)

const randomNum = Math.floor(1000 + Math.random() * 9000);

console.log(randomNum);
