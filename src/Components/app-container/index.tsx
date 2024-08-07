import styled from "styled-components"

export const AppContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: space-around;
	flex-direction: flex;
	background-color: ${(props) => props.theme.colors.AppContainer};
	.mainCustomContainer {
		overflow: hidden;
		width: 160px;
	}
`
