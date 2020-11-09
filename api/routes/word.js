const express = require('express');
const router = express.Router();

//Require controller modules

const wordCount_controller= require('./../controllers/wordCount.controller');

// Word count routes

// GET Request to get count of a word
router.get("/word/:word",wordCount_controller.word_get);

// PUT Request to increment count of a word
router.put('/word/:word',wordCount_controller.word_put);

module.exports = router;