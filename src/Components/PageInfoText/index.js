import React from "react"
import styled from "styled-components"
import CustomSpring from "../CustomSpring"

export const TextContainer = styled.div``
export const TextCode = styled.h2`
	color: ${(props) => props.theme.colors.success};
`
export const TextCenter = styled.h1`
	font-size: 4.625rem;
	margin-left: 1rem;
`
export default function PageInfoText({ text }) {
	return (
		<>
			<CustomSpring time={500}>
				<TextContainer>
					<TextCode>{"<h1>"}</TextCode>
					<TextCenter>{text}</TextCenter>
					<TextCode>{"</h1>"}</TextCode>
				</TextContainer>
			</CustomSpring>
		</>
	)
}
