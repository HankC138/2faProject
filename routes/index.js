require("dotenv").config();
const express = require("express");
const twilio = require("twilio")(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
const router = express.Router();
const { signup, factorview,success } = require("../views/");
const { User, Code } = require("../models");

router.get("/", (_req, res, next) => {
	try {
		res.send(signup);
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const [user, _created] = await User.findOrCreate({
			where: {
				name: req.body.name,
				email: req.body.email,
				phone: req.body.phone,
			},
		});
		const validTime = new Date();
		validTime.setSeconds(validTime.getSeconds() + 30);
		const code = await Code.create({
			authCode: Math.floor(1000 + Math.random() * 9000),
			valid_until: validTime,
		});
		await code.setUser(user);
		const fromNum = process.env.FROMNUM;
		const toNum = user.phone;
		const messageBody = "your 2 factor authentication code is " + code.authCode;
		await twilio.messages.create({
			body: messageBody,
			from: fromNum,
			to: toNum,
		});
		await res.redirect(`/auth/${user.id}`);
	} catch (error) {
		next(error);
	}
});
router.get("/auth/:id", async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: Code,
				},
			],
		});
		const cutphone = user.phone.substring(6, 10);
		const hiddenphone = "•••-•••-" + cutphone;
		res.send(factorview(user, hiddenphone, user.id));
	} catch (error) {
		next(error);
	}
});
router.post('/authorized', async (req,res,next) => {
    try{
    const authCode = await Code.findOne({
    where:{
        authCode:req.body.code
    },
    include:{
        model: User
    }
})
const user = await User.findOne({
    where:{
        id:authCode.userId
    }
})
    if(req.body.code === authCode.authCode.toString() && authCode.valid_until > new Date()){await user.update({authenticated:true}),res.send(success)}
    res.redirect('/signup')}
    catch(error){
        next(error)
    }
})



module.exports = router;
