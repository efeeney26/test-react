import React from 'react'
import PropTypes from 'prop-types'

import style from './Button.module.css'

const Button = ({ title = 'default title', onClick }) => (
  <button
    type='button'
    className={style.button}
    onClick={onClick}
  >
    {title}
  </button>
)

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

Button.defaultProps = {
  title: ''
}

export default Button
