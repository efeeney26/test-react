import * as types from '../action-types'

let nextTodoId = 0
const addTodo = (text) => ({
  type: types.ADD_TODO,
  id: nextTodoId++,
  text
})

export default addTodo
