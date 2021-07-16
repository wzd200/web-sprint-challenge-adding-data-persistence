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

router.post('/', (req, res, next) => {
    const newTask = req.body
  
    Task.add(newTask)
      .then(task => {
        res.status(201).json(task)
      })
      .catch(next)
  })

module.exports = router
