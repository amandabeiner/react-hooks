import React from 'react'
import styled from 'styled-components'
import UserInfo from './UserInfo'
import PostInfo from './PostInfo'
import Card from './Card'

const PostTile = props => (
  <Card>
    <UserInfo user={props.post.user} />
    <PostInfo post={props.post} setFilter={props.setFilter}/>
  </Card>
)

export default PostTile
