const express = require('express');
const router = express.Router();

const sportController = require('../Controller/sport.controller');

router.get('/', sportController.list_sport);
router.get('/major', sportController.list_sport_major);
router.get('/detail/:id', sportController.detail_sports);


module.exports = router;
