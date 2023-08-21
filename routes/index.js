const router = require('express').Router();
// Importing the API routes defined in the 'api.js' file
const apiRoutes = require('./api');
// Using the imported API routes for requests starting with '/api'
router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;