import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title }) => (
  <>
    {title && <h1>{title}</h1>}
    <p>Description</p>
  </>
)

Title.propTypes = {
  title: PropTypes.string
}

Title.defaultProps = {
  title: ''
}

export default Title
