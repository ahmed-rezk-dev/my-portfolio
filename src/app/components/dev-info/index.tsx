import React, { ReactNode } from "react"
import styled from "styled-components"

export const TextContainer = styled.div``
export const TextCode = styled.h2`
	color: ${(props) => props.theme.colors.success};
`
export const TextCenter = styled.h1`
	margin-left: 1rem;
`
export default function DevInfo({ element }: { element: ReactNode }) {
	return (
		<TextContainer>
			<TextCode>{"<h1>"}</TextCode>
			<TextCenter>{element}</TextCenter>
			<TextCode>{"</h1>"}</TextCode>
		</TextContainer>
	)
}
