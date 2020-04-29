import * as types from '../action-types'

const receivePosts = (subreddit, json) => ({
  type: types.RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

export default receivePosts
