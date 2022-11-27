const router = require('express').Router();
const userRoutes = require('./userRoutes');
const barberRoutes =require("./barberRoutes");

router.use("/users", userRoutes);
router.use("/barber", barberRoutes)

module.exports = router;
