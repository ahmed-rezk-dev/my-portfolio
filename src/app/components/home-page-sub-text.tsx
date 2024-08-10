import React from "react"
import styled from "styled-components"

export const TextCode = styled.h5`
	color: ${(props) => props.theme.colors.success};
`
export const TextCenter = styled.p`
	margin: 0 0 0 1rem;
	font-weight: 100;
`
export default function HomePageSubText() {
	return (
		<>
			<TextCode>{"<p>"}</TextCode>
			<TextCenter>This website is made with React.js</TextCenter>
			<TextCode>{"</p>"}</TextCode>
		</>
	)
}
