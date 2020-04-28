import React from 'react'
import PropTypes from 'prop-types'

import styles from './Todo.module.css'

const Todo = ({ onClick, completed, text }) => (
  text &&
  <li
    onClick={onClick}
    className={completed ? styles.todoItem : null}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  text: PropTypes.string
}

Todo.defaultProps = {
  completed: false,
  text: null
}

export default Todo
