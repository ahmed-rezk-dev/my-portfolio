import React, { ReactNode } from "react"
import styled from "styled-components"

export const TextContainer = styled.div``
export const TextCode = styled.h2`
	color: ${(props) => props.theme.colors.success};
`
export const CenterElement = styled.div`
	margin-left: 1rem;
`
export default function DevInfo({ element }: { element: ReactNode }) {
	return (
		<TextContainer>
			<TextCode>{"<h2>"}</TextCode>
			<CenterElement>{element}</CenterElement>
			<TextCode>{"</h2>"}</TextCode>
		</TextContainer>
	)
}
