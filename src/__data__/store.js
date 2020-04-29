import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

const composeEnhancers = composeWithDevTools({
  name: 'test redux thunk'
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
)

export default store
