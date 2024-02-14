import styled from "styled-components"

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const CardItem = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardImg = styled.img`
  max-width: 150px;
`
export const CardTitle = styled.h2`
  color: #222;
  font-size: 1.3rem;
`

export const CardButton = styled.button`
  padding: 8px 16px;
  background-color: #EE793B;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #222;
`