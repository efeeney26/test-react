import React from 'react'

import { BasicComponent } from './containers'

import style from './App.module.css'

function App () {
  return (
    <>
      <h1 className={style.header} >Basic React</h1>
      <div className={style.app}>
        <BasicComponent />
      </div>
    </>
  )
}

export default App
