import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import CustomSpring from "../CustomSpring"

export const TextCode = styled.h5`
	color: ${(props) => props.theme.colors.success};
`
export const TextCenter = styled.p`
	margin: 0 0 0 1rem;
	font-weight: 100;
`
function PageInfoSubText({ text }) {
	return (
		<>
			<CustomSpring time={700}>
				<TextCode>{"<p>"}</TextCode>
				<TextCenter>{text}</TextCenter>
				<TextCode>{"</p>"}</TextCode>
			</CustomSpring>
		</>
	)
}

PageInfoSubText.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default PageInfoSubText
