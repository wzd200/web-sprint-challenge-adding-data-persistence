const express = require('express')
const ProjectsRouter = require('./project/router')
const ResourcesRouter = require('./resource/router')
const TasksRouter = require('./task/router')
const server = express()

server.use(express.json())
server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResourcesRouter)
server.use('/api/tasks', TasksRouter)

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Work for 25 min, take a break',
      message: err.message,
      stack: err.stack,
    })
})

module.exports = server
