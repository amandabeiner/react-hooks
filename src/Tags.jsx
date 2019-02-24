import React from 'react'
import styled from 'styled-components'

const Tags = props => (
  <TagWrapper>
    {props.tags.map(t => <Tag data-testid="tag" key={t.id} onClick={() => props.setFilter(t.name)}>#{`${t.name}`}</Tag>)}
  </TagWrapper>
)

export default Tags

const Tag = styled.span`
  color: #1B675D;
  background-color: #71D2DD;
  padding: 10px;
  margin-right: 3px;
  border-radius: 5px;
  cursor: pointer
`

const TagWrapper = styled.div`
  flex-basis: 50%;
`
