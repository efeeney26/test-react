import { connect } from 'react-redux'
import { actions, selectors } from '../../__data__'
import { TodoList } from '../../components'

const mapStateToProps = state => ({
  todos: selectors.getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(actions.toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
