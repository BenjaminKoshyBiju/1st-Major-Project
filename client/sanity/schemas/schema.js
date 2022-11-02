
import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'
import category from './category'
import restaurant from './restaurant'
import Dish from './Dish'
import featured from './featured'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  
  types: schemaTypes.concat([
    
    restaurant,
    category,
    Dish,
    featured,

  ]),
})
