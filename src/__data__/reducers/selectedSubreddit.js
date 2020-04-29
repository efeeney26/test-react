import * as types from '../action-types'
import { INITIAL_STATE } from '../constants'

const selectedSubreddit = (state = INITIAL_STATE.subreddit, action) => {
  switch (action.type) {
    case types.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

export default selectedSubreddit
