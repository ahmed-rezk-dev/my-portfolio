import React, { HTMLAttributes, ReactNode } from "react"
import styled from "styled-components"

export const TextCode = styled.h5`
	color: ${(props) => props.theme.colors.success};
`
export const CenterElement = styled.div`
	margin: 0 0 0 1rem;
	font-weight: 100;
`
type DevSubInfoType = { element: ReactNode } & HTMLAttributes<HTMLDivElement>
export default function DevSubInfo({ element, ...rest }: DevSubInfoType) {
	return (
		<div {...rest}>
			<TextCode>{"<p>"}</TextCode>
			<CenterElement>{element}</CenterElement>
			<TextCode>{"</p>"}</TextCode>
		</div>
	)
}
