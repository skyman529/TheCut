const sequelize = require('../config/connection');
const { User, Barber } = require('../models');

const userData = require('./userData.json');
const barberData = require('./barber.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const barber of barberData) {
    await Barber.create({
      ...barber,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();