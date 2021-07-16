const projects = [
  { 
    project_name: 'Stack Fruits',
    project_description: 'You stack the fruits to make art.' 
  },
  { 
    project_name: 'Do Research',
    project_description: 'Pretend you are doing research.' 
  },
]

exports.projects = projects

exports.seed = function(knex) {
  return knex('projects').insert(projects)
}
