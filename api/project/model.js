const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

const getAll = async () => {
    const projectRows = await db('projects')
        .orderBy('project_id')

    const projectsArray = []

    projectRows.map(projectRow => {
        const result = {
            project_completed: mappers.intToBoolean(projectRow.project_completed),
            project_description: projectRow.project_description,
            project_name: projectRow.project_name
        }
        projectsArray.push(result)
    })
    return projectsArray
}

const add = (project) => {
    return db('projects').insert(project)
        .then(([project_id]) => {
            return db('projects')
                .where('project_id', project_id).first()
        })
}

module.exports = {
    getAll,
    add
}
