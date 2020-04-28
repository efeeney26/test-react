import { connect } from 'react-redux'
import { actions, selectors } from '../../__data__'
import { TodoList } from '../../components'

const mapStateToProps = state => ({
  todos: selectors.getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  toggleTodo: actions.toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
