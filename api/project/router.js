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

router.post('/', (req, res, next) => {
    const newProject = req.body
  
    Project.add(newProject)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(next)
  })

module.exports = router
