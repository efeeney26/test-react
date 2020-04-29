import * as types from '../action-types'
import posts from './posts'
import { INITIAL_STATE } from '../constants'

const postsBySubreddit = (state = INITIAL_STATE.posts, action) => {
  switch (action.type) {
    case types.INVALIDATE_SUBREDDIT:
    case types.RECEIVE_POSTS:
    case types.REQUEST_POSTS:
      return {
        ...posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

export default postsBySubreddit
