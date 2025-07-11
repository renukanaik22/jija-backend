const express = require('express');
const router = express.Router();
const { getItems, saveItem} = require('../controller/itemController');

router.get('/',getItems);
router.post('/',saveItem);

module.exports = router;