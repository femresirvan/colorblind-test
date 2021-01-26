const express = require('express').Router;
const router = express();
const homepageController = require('../controllers/homepageController');

router.get('/',homepageController);

module.exports = router;