import * as types from '../action-types'

const selectSubreddit = (subreddit) => ({
  type: types.SELECT_SUBREDDIT,
  subreddit
})

export default selectSubreddit
