const express = require('express');
const router = express.Router();
const signup = require('../views/');

router.get('/', (req,res,next)=>{
    res.send(signup)
})

module.exports = router;