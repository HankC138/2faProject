const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/authenticate')

const User = db.define('user',{
    name: {
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            isEmail:true
        }
    },
    phone:{
        type:Sequelize.STRING,
        allowNull:false,
    }
    
})