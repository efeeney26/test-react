import axiosInstance from '../axios'
import requestPosts from './requestPosts'
import receivePosts from './receivePosts'

const fetchPosts = (subreddit) => (dispatch) => {
  dispatch(requestPosts(subreddit))
  axiosInstance
    .get(`/r/${subreddit}.json`)
    .then((res) => {
      dispatch(receivePosts(subreddit, res.data))
    })
    .catch((err) => console.log('An error occurred.', err))
}

export default fetchPosts
