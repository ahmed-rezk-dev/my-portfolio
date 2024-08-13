import React, { HTMLAttributes, ReactNode } from "react"
import styled from "styled-components"

export const TextCode = styled.h2`
	color: ${(props) => props.theme.colors.success};
`
export const CenterElement = styled.div`
	margin-left: 1rem;
`

type DevInfoType = { element: ReactNode } & HTMLAttributes<HTMLDivElement>
export default function DevInfo({ element, ...rest }: DevInfoType) {
	return (
		<div {...rest}>
			<TextCode>{"<h2>"}</TextCode>
			<CenterElement>{element}</CenterElement>
			<TextCode>{"</h2>"}</TextCode>
		</div>
	)
}
