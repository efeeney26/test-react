import * as types from '../action-types'
import { INITIAL_STATE } from '../constants'

const posts = (state = INITIAL_STATE.posts, action) => {
  switch (action.type) {
    case types.INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case types.REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case types.RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

export default posts
