import * as types from '../action-types'

const invalidateSubreddit = (subreddit) => ({
  type: types.INVALIDATE_SUBREDDIT,
  subreddit
})

export default invalidateSubreddit
