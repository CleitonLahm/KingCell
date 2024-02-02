import { createGlobalStyle } from 'styled-components'

const GlobalStyles =  createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    font-family: 'Roboto', sans-serif;
  }

  img {
    max-width: 100%;
  }
  `
export default GlobalStyles
