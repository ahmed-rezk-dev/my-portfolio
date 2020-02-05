import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

export const TextCode = styled.h5`
	color: ${(props) => props.theme.colors.success};
	font-size: 1.2rem;
`
export const TextCenter = styled.p`
	font-size: 1.75rem;
	margin: 0 0 0 1rem;
	font-weight: 100;
`
function PageInfoSubText({ text }) {
	return (
		<>
			<TextCode>{"<p>"}</TextCode>
			<TextCenter>{text}</TextCenter>
			<TextCode>{"</p>"}</TextCode>
		</>
	)
}

PageInfoSubText.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default PageInfoSubText
