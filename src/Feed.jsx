import React from 'react'
import styled from 'styled-components'
import PostTile from './PostTile'
const Feed = ({ posts }) => {
  return (
    <FeedWrapper>
      { posts.map(p =>
      <PostTile
        key={p.id}
        post={p}
      />
      )}
    </FeedWrapper>
  )
}

export default Feed

const FeedWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  margin-top: 25px;
`
