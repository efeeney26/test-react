import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Todo/Todo'

const TodoList = ({ todos, toggleTodo }) => {
  const handleClick = (todo) => () => toggleTodo(todo.id)
  return (
    todos?.length
      ? <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            onClick={handleClick(todo)}
          />
        ))}
      </ul>
      : null
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
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
