import * as types from '../action-types'

const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  id
})

export default toggleTodo
