import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { actions } from '../../__data__'

let AddTodo = ({ addTodo }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addTodo(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = {
  addTodo: actions.addTodo
}

AddTodo = connect(null, mapDispatchToProps)(AddTodo)

export default AddTodo
