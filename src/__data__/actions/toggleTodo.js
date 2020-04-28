import * as types from '../action-types'

const toggleTodo = (index) => {
  return { type: types.TOGGLE_TODO, index }
}

export default toggleTodo
