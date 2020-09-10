import { createGlobalStyle } from "styled-components";
import "react-perfect-scrollbar/dist/css/styles.css";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline:none;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  #root {
    background: #F5F5FB;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;
