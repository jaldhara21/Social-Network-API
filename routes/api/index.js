// Importing the routes
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Using the userRoutes,thoughtRoutes for requests starting with '/users' and '/thoughts'.
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//Exporting the router
module.exports = router;