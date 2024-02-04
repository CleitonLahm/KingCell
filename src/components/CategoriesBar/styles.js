import styled from "styled-components"

export const CategoriesContainer = styled.div`
  border-bottom: 1px solid #4B4B4D;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const ListLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #222;
  padding: 24px;
  width: 140px;
  /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */
  transition: box-shadow 0.3s ease-in-out;


    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      border-radius: 10px
    }

  img {
    max-width: 40px;
    margin-bottom: 8px;
  }
`