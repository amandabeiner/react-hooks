import React from 'react'
import styled from 'styled-components'

const BLUE_1 = "#1977D0"
const BLUE_2 = "#0F69B5"
const BLUE_3 = "#0B4d84"
const Button = styled.button`
  padding: 15px 25px;
  border-radius: 4px;
  border: 1px solid ${BLUE_2};
  background-color: ${props => props.primary ? `${BLUE_2}`: "white"};
  color: ${props => props.primary ? "white" : `${BLUE_2}`};
  font-size: 1.25rem;

  &:hover {
    background-color: ${({ primary }) => primary ? `${BLUE_1}`: 'white'};
    color: ${({ primary }) => primary ? "white" : `${BLUE_3}`};
    border-color: ${({ primary }) => primary ? `${BLUE_2}` : `${BLUE_3}`};
  }
`
export default Button
