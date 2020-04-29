import * as types from '../action-types'
import posts from './posts'

const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case types.INVALIDATE_SUBREDDIT:
    case types.RECEIVE_POSTS:
    case types.REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}

export default postsBySubreddit
