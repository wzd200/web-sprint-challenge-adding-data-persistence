const db = require('../../data/dbConfig')

const getAll = () => {
    const resourceRows = db('resources')

    return resourceRows
}

module.exports = {
    getAll
}