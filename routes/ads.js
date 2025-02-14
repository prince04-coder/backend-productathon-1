const express = require('express');
const { getAllCampaigns } = require('../controllers/adController');
const router = express.Router();

router.get('/campaigns', getAllCampaigns);

module.exports = router;