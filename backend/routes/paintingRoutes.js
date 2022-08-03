const express = require('express')
const router = express.Router()
const {	getPaintings, setPainting, updatePainting, deletePainting } = require('../controllers/paintingController')


router.route('/').get(getPaintings).post(setPainting)


router.route('/:id').put(updatePainting).delete(deletePainting)


module.exports = router