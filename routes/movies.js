const express = require('express')
const router = express.Router()
const path = require('path')

const filepath = require('../utils/filepath')
const controller = require('../controllers/moviesController')

router.get('/', controller.readMovies)

router.get('/:id', controller.readMoviesSpecific)

router.post('/', controller.createMovies);

router.post('/upload/:id', filepath().single('photo'), controller.uploadPhotos);

router.put('/:id', controller.updateMovies);

router.delete('/:id', controller.deleteMovies);

module.exports = router