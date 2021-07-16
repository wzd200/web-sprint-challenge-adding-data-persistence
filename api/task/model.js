const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

const getAll = async () => {
    const taskRows = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .orderBy('task_id')

    const tasksArray = []

    taskRows.map(taskRow => {
        const result = {
            task_completed: mappers.intToBoolean(taskRow.task_completed),
            task_description: taskRow.task_description,
            task_notes: taskRow.task_notes,
            project_name: taskRow.project_name,
            project_description: taskRow.project_description

        }
        tasksArray.push(result)
    })
    return tasksArray
}

const getById = async (task_id) => {
    const taskRows = await db('tasks')
        .where('task_id', task_id)
    const result = {
        task_completed: mappers.intToBoolean(taskRows[0].task_completed),
        task_description: taskRows[0].task_description,
        task_notes: taskRows[0].task_notes,
        project_name: taskRows[0].project_name,
        project_description: taskRows[0].project_description
    }
    return result
}

const add = async (task) => {
    return db('tasks')
        .insert(task)
        .then((task_id) => getById(task_id))
}

// const add = (task) => {
//     return db('tasks').insert(task)
//         .then(([task_id]) => {
//             return db('tasks')
//                 .where('task_id', task_id).first()
//         })
// }

module.exports = {
    getAll,
    add
}