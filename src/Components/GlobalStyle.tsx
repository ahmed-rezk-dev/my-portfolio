import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
	color: ${(props) => props.theme.colors.bodyColor};
	overflow: hidden;
  }
  .btn-outline-secondary {
	color: ${(props) => props.theme.colors.btnColor};
	border-color: ${(props) => props.theme.colors.btnColor}
  }
`

export default GlobalStyle
