const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/authenticate',{logging:false})

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
        },
        unique:true
    },
    phone:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    authenticated:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }

})
const Code = db.define('code',{
    authCode:{
        type:Sequelize.INTEGER,
    },
    valid_until:{
        type:Sequelize.DATE
    }
})
Code.belongsTo(User, {
foreignKey: 'userId' })
User.hasMany(Code, {
    foreignKey: 'userId',
});

module.exports = { db, User, Code }