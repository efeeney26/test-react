import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import todoApp from './reducers'

const store = createStore(
  todoApp, devToolsEnhancer({
    name: 'Test redux'
  })
)

export default store
