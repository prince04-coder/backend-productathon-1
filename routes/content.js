const express = require('express');
const { getAllPosts } = require('../controllers/contentController');
const router = express.Router();

router.get('/posts', getAllPosts);

module.exports = router;