import React, {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import PostTile from './PostTile';
const Feed = props => {
  const [filter, setFilter] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState([]);

  const clearFilter = () => {
    setFilter(null);
  };

  useEffect(() => {
    setVisiblePosts(props.posts);
  }, [props.posts]);

  useEffect(() => {
    filterPosts(filter);
  }, [filter]);

  const filterPosts = filter => {
    const {posts} = props;
    let visiblePosts;

    if (filter) {
      visiblePosts = posts.filter(p => postMatchesTag(p, filter));
    } else {
      visiblePosts = posts;
    }

    setVisiblePosts(visiblePosts);
  };

  const postMatchesTag = (post, filter) => {
    return post.tags.some(tag => tag.name === filter);
  };

  return (
    <FeedWrapper>
      {filter && (
        <FilterLabel>
          <FilterText>Resources matching {`${filter}`}</FilterText>
          <ClearFilter data-testid="clear-btn" onClick={clearFilter}>
            Clear
          </ClearFilter>
        </FilterLabel>
      )}
      {visiblePosts.map(p => (
        <PostTile key={p.id} post={p} setFilter={setFilter} />
      ))}
    </FeedWrapper>
  );
};

export default Feed;

const FeedWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 100%;
  flex-wrap: wrap;
  margin-top: 25px;
`;

const FilterLabel = styled.div`
  flex-basis: 80%;
  display: flex;
`;
const FilterText = styled.p`
  margin-right: 15px;
`;

const ClearFilter = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0;
  color: #0f69b5;
`;
