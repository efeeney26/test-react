import * as types from '../action-types'

const addTodo = (text) => {
  return { type: types.ADD_TODO, text }
}

export default addTodo
