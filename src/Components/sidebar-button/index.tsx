import React from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"
import { SidebarIcon } from "@/public/svg"
import SidebarButtonAnimation from "../sidebar-button-animation"

export const Nav = styled.div`
	display: flex;
	min-height: 60px;
	align-items: center;
	justify-content: space-between;
	svg {
		fill: ${(props) => props.theme.colors.mainColor};
	}
	background: ${(props) => props.theme.colors.AppContainer};
`

type SidebarButtonType = {
	isSidebarOpen: boolean
	toggleSidebar: () => void
	isLightTheme: boolean
	toggleTheme: () => void
}

function SidebarButton({
	isSidebarOpen,
	toggleSidebar,
	isLightTheme,
	toggleTheme,
}: SidebarButtonType) {
	return (
		<>
			<SidebarButtonAnimation time={1500}>
				<Nav className="sticky-top mb-md-5">
				<Button variant="link" onClick={toggleSidebar} aria-expanded={isSidebarOpen}>
					<SidebarIcon open={isSidebarOpen} />
				</Button>
				</Nav>
			</SidebarButtonAnimation>
		</>
	)
}

export default SidebarButton
