const tasks = [
  { 
    task_description: 'Stack the grape on the apple',
    task_notes: 'This is the easiest step due to the crevasse on top of the apple.',
    project_id: 1
  },
  { 
    task_description: 'Stack the banana on the grape',
    task_notes: 'This is a slightly more difficult step because you have to balance the banana carefully.',
    project_id: 1
  },
  { 
    task_description: 'Make sure you are sitting up on a chair, facing a computer screen.',
    task_notes: 'Sit up for extra effect!',
    project_id: 2
  },
  { 
    task_description: 'Stare at the computer screen for as long as you can.',
    task_notes: 'No need to do anything else. This is how research works.',
    project_id: 2
  },
]

exports.tasks = tasks

exports.seed = function(knex) {
  return knex('tasks').insert(tasks)
}