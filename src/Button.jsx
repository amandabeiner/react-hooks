import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 15px 25px;
  border-radius: 4px;
  border: 1px solid #0F69B5;
  background-color: ${props => props.primary ? "#0F69B5" : "white"};
  color: ${props => props.primary ? "white" : "#0F69B5"};
  font-size: 1.25rem;
`
export default Button
