import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import PostTile from './PostTile'
const Feed = (props) => {
  const [filter, setFilter] = useState(null)
  const [visiblePosts, setVisiblePosts] = useState([])

  const clearFilter = () => {
    setFilter(null)
  }

  // EXAMPLE_EFFECT_1: set the `visiblePosts` state when the component mounts
  useEffect(() => {
    setVisiblePosts(props.posts)
  }, [props.posts]) // EXAMPLE_EFFECT_2: set `visiblePosts` again when these props change (aka fetch resolves)

  // EXAMPLE_EFFECT_3: run the filterPosts function with the filter currently in state
  useEffect(() => {
    filterPosts(filter)
  }, [filter]) // EXAMPLE_EFFECT_4: re-run this effect whenever the filter state changes


  const filterPosts = filter => {
    const { posts } = props
    let visiblePosts

    if (filter) {
      visiblePosts = posts.filter(p => postMatchesTag(p, filter))
    } else {
      visiblePosts = posts
    }

    // EXAMPLE_EFFECT_5: when filter changes, run the filtering rules again and replace visiblePosts state with the result
    setVisiblePosts(visiblePosts)
  }

  const postMatchesTag = (post, filter) => {
    return post.tags.some(tag => tag.name === filter)
  }

  return (
    <FeedWrapper>
      {filter &&
      <FilterLabel>
        <FilterText>Resources matching {`${filter}`}</FilterText>
        <ClearFilter data-testid="clear-btn" onClick={clearFilter}>Clear</ClearFilter>
      </FilterLabel>
      }
      { visiblePosts.map(p =>
      <PostTile
        key={p.id}
        post={p}
        setFilter={setFilter}
        favorite={props.favorite}
      />
      )}
    </FeedWrapper>
  )
}

export default Feed

const FeedWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  flex-wrap: wrap;
  margin-top: 25px;
`

const FilterLabel = styled.div`
  flex-basis: 80%;
  display:flex;
`
const FilterText = styled.p`
  margin-right: 15px;
`

const ClearFilter = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  color: #0F69B5;
`
