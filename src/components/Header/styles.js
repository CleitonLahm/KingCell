import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  max-height: 200px;
  padding: 20px 40px;
  background-color: #222;
  color: #fff;
`;

export const Titulo = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 900;
  margin-left: 40px;
`

export const SearchBar = styled.input`
  width: 45%;
  height: 40px;
  margin-left: 50px;
  margin-right: 130px;
  padding: 0 8px;
  color: #000;
  border: none;
  border-radius: 8px;
  position: relative;
`

export const LoginContainer = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-right: 80px;
`

export const Login = styled.a`
  color: #EE793B;
  font-weight: 700;
`

export const SpanKing = styled.span`
  color: #EE793B;
`
export const SpanCell = styled.span`
  color: #4B4B4D;
`

export const IconList = styled.ul`
  display: flex;
`

export const IconItem = styled.li`
  margin-left: 20px;
  
  img {
    width: 40px;
  }
`