const express = require('express')
const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const recipes = await Project.getAll()
        res.json(recipes)
      } catch (err) {
        next(err)
    }
})

module.exports = router
