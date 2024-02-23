import styled from "styled-components"

export const CardSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`

export const CardContainer = styled.div`
  position: relative;
  text-align: center;
`

export const CardItem = styled.div`
position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);  
  transition: box-shadow 0.3s ease-in-out;

  border-radius: 8px;
  text-align: center;
  padding: 0 8px 40px 8px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`

export const CardImg = styled.img`
  max-width: 150px;
  max-height: 200px;
`

export const CardTitle = styled.h2`
  color: #222;
  font-size: 1.3rem;
  margin-top: 10px;
`

export const CardButton = styled.button`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background-color: #ee793b;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #222;
  cursor: pointer;
`
export const Evaluations = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  padding: 8px;
  color: #222;
`