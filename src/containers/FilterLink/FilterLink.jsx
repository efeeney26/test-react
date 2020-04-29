import { connect } from 'react-redux'
import { actions } from '../../__data__'
import { Link } from '../../components'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(actions.setVisibilityFilter(ownProps.filter))
})

export default connect(null, mapDispatchToProps)(Link)
