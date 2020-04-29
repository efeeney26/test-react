import React from 'react'
import PropTypes from 'prop-types'

import { Footer } from './components'
import { AddTodo, VisibleTodoList } from './containers'
import { VisibilityFilters } from './__data__/constants'
import styles from './App.module.css'

function App (props) {
  const { match: { params } } = props
  return (
    <div className={styles.App}>
      <AddTodo />
      <VisibleTodoList filter={params.filter || VisibilityFilters.SHOW_ALL}/>
      <Footer />
    </div>
  )
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object
  })
}

export default App
