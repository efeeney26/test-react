import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectors, actions } from './__data__'
import { Picker, Posts } from './components'

function App (props) {
  const { subReddit, getReddits, postsBySubreddit, setSubReddit } = props
  const { isFetching, lastUpdated, items: posts } = postsBySubreddit

  useEffect(() => {
    getReddits(subReddit)
  }, [subReddit, getReddits])

  const handleChange = (nextSubReddit) => {
    setSubReddit(nextSubReddit)
    getReddits(subReddit)
  }

  return (
    <div>
      <Picker
        value={subReddit}
        onChange={handleChange}
        options={['reactjs', 'frontend']}
      />
      <p>
        {lastUpdated && (
          <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
          </span>
        )}
      </p>
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
      {posts?.length && (
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <Posts posts={posts} />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  postsBySubreddit: selectors.getPostsBySubreddit(state),
  subReddit: selectors.getSubreddit(state)
})

const mapDispatchToProps = ({
  getReddits: actions.fetchPosts,
  setSubReddit: actions.selectSubreddit
})

App.propTypes = {
  subReddit: PropTypes.string.isRequired,
  getReddits: PropTypes.func.isRequired,
  setSubReddit: PropTypes.func.isRequired,
  postsBySubreddit: PropTypes.object
}

App.defaultProps = {
  postsBySubreddit: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
