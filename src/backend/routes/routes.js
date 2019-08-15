const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', controllers.get);
//router.get('/:name', controllers.get);
//router.post('/add', controllers.post);

module.exports = router;