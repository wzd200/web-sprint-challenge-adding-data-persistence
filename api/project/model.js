const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

const getAll = async () => {
    const projectRows = await db('projects')

    const projectsArray = []

    projectRows.map(projectRow => {
        const result = {
            project_name: projectRow.project_name,
            project_description: projectRow.project_description,
            project_completed: mappers.intToBoolean(projectRow.project_completed)
        }
        projectsArray.push(result)

    })

    

    return projectsArray
}



module.exports = {
    getAll
}
