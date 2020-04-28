import React from 'react'
import { FilterLink } from '../../containers'
import { constants } from '../../__data__'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={constants.VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={constants.VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={constants.VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer
