const Barber = require('./Barber');
const User = require('./User');

User.hasMany(Barber, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Barber.belongsTo(User, {
    foreignKey: "user_id"
})

module.exports = { User, Barber };
