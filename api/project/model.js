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

const getById = async (project_id) => {
    const projectRows = await db('projects')
        .where('project_id', project_id)
    const result = {
        project_completed: mappers.intToBoolean(projectRows[0].project_completed),
        project_description: projectRows[0].project_description,
        project_name: projectRows[0].project_name
    }
    return result
}

const add = async (project) => {
    return db('projects')
        .insert(project)
        .then((project_id) => getById(project_id))
}

module.exports = {
    getAll,
    getById,
    add
}
