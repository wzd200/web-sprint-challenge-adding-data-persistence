const db = require('../../data/dbConfig')

const getAll = () => {
    const rows = db('projects')
    return rows
}

module.exports = {
    getAll
}
