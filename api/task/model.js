const db = require('../../data/dbConfig')

const getAll = () => {
    const taskRows = db('tasks')

    return taskRows
}

module.exports = {
    getAll
}