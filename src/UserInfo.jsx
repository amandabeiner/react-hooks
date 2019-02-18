import React from 'react'
import styled from 'styled-components'

const UserInfo = props => (
  <UserWrapper>
    <UserPhoto src={props.user.photo} />
    <UserName>{props.user.name}</UserName>
  </UserWrapper>
)
export default UserInfo

const UserWrapper = styled.div`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  flex-basis: 15%;
  justify-content: center;
`

const UserPhoto = styled.img`
  border-radius: 50%;
`
const UserName = styled.p`
  flex-basis: 100%;
  text-align: center;
`
