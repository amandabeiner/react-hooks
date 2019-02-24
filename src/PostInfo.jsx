import React from 'react'
import styled from 'styled-components'
import Tags from './Tags'
import Favorites from './Favorites'

const PostInfo = props => (
  <PostBody>
    <PostHeading>{props.post.title}</PostHeading>
    <ResourceLink href={props.post.link}>See docs</ResourceLink>
    <p>{props.post.description}</p>
    <Actions>
      <Tags tags={props.post.tags} setFilter={props.setFilter}/>
      <Favorites post={props.post} favorite={props.favorite} />
    </Actions>
  </PostBody>
)

export default PostInfo

const PostBody = styled.div`
  flex-basis: 85%;
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
`

const PostHeading = styled.h3`
  margin-bottom: 5px;
  flex-basis: 100%;
`

const ResourceLink = styled.a`
  text-decoration: none;
  color: #1B675D;
  flex-basis: 100%;
`
const postParagraph = styled.p`
  flex-basis: 100%;
`

const Actions = styled.div`
  flex-basis: 100%;
  display: flex
`
