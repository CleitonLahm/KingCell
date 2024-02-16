import styled from "styled-components"

export const Card = styled.div`
  
`
export const ContainerProduct = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const CardProduct = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);  
  transition: box-shadow 0.3s ease-in-out;

  border-radius: 8px;
  text-align: center;
  padding: 24px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  `

export const ImgProduct = styled.img`
  max-width: 250px;
`
export const PriceProduct = styled.p`
  font-size: 24px;
  font-weight: 700;
`