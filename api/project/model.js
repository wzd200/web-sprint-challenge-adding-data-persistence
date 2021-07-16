const db = require('../../data/dbConfig')

const getAll = () => {
    const projectRows = db('projects')

    return projectRows
}

// const getAll = async () => {
//     const projectRows = await db('projects')

//     const result = {
//         project_name: projectRows[0].project_name,
//         project_description: projectRows[0].project_description,
//         project_completed: projectRows[0].project_completed
//     }

//     return result
// }

module.exports = {
    getAll
}
