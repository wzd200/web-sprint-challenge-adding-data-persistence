const express = require('express')
const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.getAll()
        res.json(resources)
      } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    const newResource = req.body
  
    Resource.add(newResource)
      .then(resource => {
        res.status(201).json(resource)
      })
      .catch(next)
  })

module.exports = router
