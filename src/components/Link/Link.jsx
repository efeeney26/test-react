import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { VisibilityFilters } from '../../__data__/constants'

const Link = (props) => {
  const { filter, children } = props
  return (
    <NavLink
      exact
      to={filter === VisibilityFilters.SHOW_ALL ? '/' : `/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      {children}
    </NavLink>
  )
}

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
