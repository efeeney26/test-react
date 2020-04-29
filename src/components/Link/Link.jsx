import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Link = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

Link.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
