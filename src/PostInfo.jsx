import React from 'react'
import styled from 'styled-components'

const PostInfo = props => (
  <PostBody>
    <PostHeading>{props.post.title}</PostHeading>
    <ResourceLink href={props.post.link}>See docs</ResourceLink>
    <p>{props.post.description}</p>
  </PostBody>
)

export default PostInfo

const PostBody = styled.div`
  flex-basis: 85%;
`

const PostHeading = styled.h3`
  margin-bottom: 5px;
`

const ResourceLink = styled.a`
  text-decoration: none;
  color: #1B675D;
`
