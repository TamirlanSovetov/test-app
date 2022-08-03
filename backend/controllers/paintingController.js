const asyncHandler = require('express-async-handler')

const Painting = require('../models/paintingModel')

// @desc Get paintings
// @route GET /api/paintings
// @access Private
const getPaintings = asyncHandler(async (req, res) => {
	const paintings = await Painting.find()
	res.json(paintings)
})

// @desc Set painting
// @route POST /api/paintings
// @access Private
const setPainting = asyncHandler(async (req, res) => {
	if (!req.body.category) {
		res.status(400)
		throw new Error('Please add a category field')
	}
	let randomPath = (Math.random()*1000000)
	
	const painting = await Painting.create({
		category: req.body.category,
		path: randomPath,
	})
	res.json(painting)
})

// @desc Update painting
// @route PUT /api/paintings/:id
// @access Private
const updatePainting = asyncHandler(async (req, res) => {
	const painting = await Painting.findById(req.params.id)
	
	if (!painting) {
		res.status(400)
		throw new Error('Painting not found')
	}
	
	const updatedPainting = await Painting.findByIdAndUpdate(req.params.id, req.body, { new: true, })
	
	res.json(updatedPainting)
})

// @desc Delete painting
// @route DELETE /api/painting/:id
// @access Private
const deletePainting = asyncHandler(async (req, res) => {
	const painting = await Painting.findById(req.params.id)
	
	if (!painting) {
		res.status(400)
		throw new Error('Painting not found')
	}
	
	await painting.remove()
	
res.json(`Painting with ID ${req.params.id} was successfully deleted`)
})

module.exports = {
	getPaintings,
	setPainting,
	updatePainting,
	deletePainting,
}