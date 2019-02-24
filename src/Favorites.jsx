import React, { useContext } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import { UserContext } from './App'

const Favorites = props => {
  const context = useContext(UserContext)
  const viewerHasFavorited = props.post.favorites.some(f => f.user.id === context.id)
  const iconClass = viewerHasFavorited ? 'fas' : 'far'

  return (
    <FavoritesWrapper>
      <i className={`${iconClass} fa-star`} onClick={() => { props.favorite(props.post) }} />
    </FavoritesWrapper>
  )
}

export default Favorites

const FavoritesWrapper = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: flex-end;
`
