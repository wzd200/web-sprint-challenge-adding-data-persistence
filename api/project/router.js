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

router.get('/:project_id/', (req, res, next) => {
    const { project_id } = req.params
    Project.getById(project_id)
      .then(project => {
        res.json(project)
      })
      .catch(next)
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
