const db = require('../../data/dbConfig')
const mappers = require('../../data/helpers/mappers')

const getAll = async () => {
    const taskRows = await db('tasks')
        .orderBy('task_id')

    const tasksArray = []

    taskRows.map(taskRow => {
        const result = {
            task_completed: mappers.intToBoolean(taskRow.task_completed),
            task_description: taskRow.task_description,
            task_notes: taskRow.task_notes
        }
        tasksArray.push(result)
    })
    return tasksArray
}

module.exports = {
    getAll
}