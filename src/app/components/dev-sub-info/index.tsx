import React, { ReactNode } from "react"
import styled from "styled-components"

export const TextCode = styled.h5`
	color: ${(props) => props.theme.colors.success};
`
export const TextCenter = styled.p`
	margin: 0 0 0 1rem;
	font-weight: 100;
`
export default function DevSubInfo({ element }: { element: ReactNode }) {
	return (
		<>
			<TextCode>{"<p>"}</TextCode>
			<TextCenter>{element}</TextCenter>
			<TextCode>{"</p>"}</TextCode>
		</>
	)
}
