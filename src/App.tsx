import React from 'react'
import logo from './logo.svg'
import './App.css'
import {string} from "prop-types";

const test = <Type extends { toString: Function }>(
    arr: Type[]
): Type => {
  return arr[0].toString()
}

interface Test {
  id: number,
  name: string
}

const test1 = <Type extends { name: string }>(arr: Array<Type>, key: string): Type | undefined => arr.find((item) => item.name === key)

function App () {
  console.log(test<string | number>([1, 2]))
  console.log(test1([{id: 1, name: 'lol'}, {id: 2, name: 'wow'}], 'wow'))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
