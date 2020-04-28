import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'

const TodoList = ({ todos, onTodoClick }) => {
  const handleTodoClick = useCallback((todo) => onTodoClick(todo.id), [todos])
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={handleTodoClick}/>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
