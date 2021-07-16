const db = require('../../data/dbConfig')

const getAll = () => {
    const resourceRows = db('resources')

    return resourceRows
}

const add = (resource) => {
    return db('resources').insert(resource)
        .then(([resource_id]) => {
            return db('resources')
                .where('resource_id', resource_id).first()
        })
}

module.exports = {
    getAll,
    add
}