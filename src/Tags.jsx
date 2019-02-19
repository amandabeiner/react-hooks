import React from 'react'
import styled from 'styled-components'

const Tags = props => (
  <div>
    {props.tags.map(t => <Tag key={t.id} onClick={() => props.setFilter(t.name)}>#{`${t.name}`}</Tag>)}
  </div>
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
