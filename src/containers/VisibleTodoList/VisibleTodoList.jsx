import { connect } from 'react-redux'
import { actions, selectors } from '../../__data__'
import { TodoList } from '../../components'

const mapStateToProps = (state, ownProps) => ({
  todos: selectors.getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToProps = {
  toggleTodo: actions.toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
