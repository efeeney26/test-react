import * as types from '../action-types'

const requestPosts = (subreddit) => {
  return {
    type: types.REQUEST_POSTS,
    subreddit
  }
}

export default requestPosts
