const resources = [
  { 
    resource_name: 'Apple',
    resource_description: 'A sturdy, artful base.' 
  },
  { 
    resource_name: 'Grape',
    resource_description: 'A small and sneaky fruit.' 
  },
  { 
    resource_name: 'Banana',
    resource_description: 'A show-stopping long-boi that will dazzle the crowd.' 
  },
  { 
    resource_name: 'Computer',
    resource_description: 'This is where your mind does the research.' 
  },
  { 
    resource_name: 'Chair',
    resource_description: 'This is where your body does the research.' 
  },
]

exports.resources = resources

exports.seed = function(knex) {
  return knex('resources').insert(resources)
}