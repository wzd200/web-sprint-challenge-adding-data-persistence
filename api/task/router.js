const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await Task.getAll()
        res.json(resources)
      } catch (err) {
        next(err)
    }
})

module.exports = router
