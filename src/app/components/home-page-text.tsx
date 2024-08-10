import styled from "styled-components"

export const TextContainer = styled.div``
export const TextCode = styled.h2`
	color: ${(props) => props.theme.colors.success};
`
export const TextCenter = styled.h1`
	margin-left: 1rem;
`
export default function HomePageText() {
	return (
			<TextContainer>
				<TextCode>{"<h1>"}</TextCode>
				<TextCenter>
					<span>
						Hi, <br /> I&apos;m Ahmed, <br /> Web Developer
					</span>
				</TextCenter>
				<TextCode>{"</h1>"}</TextCode>
			</TextContainer>
	)
}
