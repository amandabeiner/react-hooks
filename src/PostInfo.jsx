import React from 'react'
import styled from 'styled-components'

const PostInfo = props => (
  <PostBody>
    <PostTitle>{props.post.title}</PostTitle>
    <ResourceLink href={props.post.link}>See docs</ResourceLink>
    <ResourceDescription>{props.post.description}</ResourceDescription>
  </PostBody>
)

export default PostInfo

const PostBody = styled.div`
  flex-basis: 85%;
`

const PostTitle = styled.h3`

`

const ResourceLink = styled.a`
`

const ResourceDescription = styled.p`

`
