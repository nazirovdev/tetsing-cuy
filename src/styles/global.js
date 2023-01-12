import { createGlobalStyle } from "styled-components";

const StyleGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style-type: none;
  }
`

export default StyleGlobal