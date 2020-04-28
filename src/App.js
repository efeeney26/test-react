import React from 'react'

import { Footer } from './components'
import { AddTodo, VisibleTodoList } from './containers'
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.App}>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}

export default App
