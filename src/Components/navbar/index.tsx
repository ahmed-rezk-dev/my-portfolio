import React from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"
import { SidebarIcon } from "@/public/svg"
import NavbarAnimation from "../sidebar-button-animation"

export const NavbarWrappr = styled.div`
	display: flex;
	min-height: 60px;
	align-items: center;
	justify-content: space-between;
	svg {
		fill: ${(props) => props.theme.colors.mainColor};
	}
	background: ${(props) => props.theme.colors.AppContainer};
`

type NavbarType = {
	isSidebarOpen: boolean
	toggleSidebar: () => void
	isLightTheme: boolean
	toggleTheme: () => void
}

function Navbar({
	isSidebarOpen,
	toggleSidebar,
	isLightTheme,
	toggleTheme,
}: NavbarType) {
	return (
		<>
			<NavbarAnimation time={1500}>
				<NavbarWrappr className="sticky-top mb-md-5">
					<Button
						variant="link"
						onClick={toggleSidebar}
						aria-expanded={isSidebarOpen}
					>
						<SidebarIcon open={isSidebarOpen} />
					</Button>
				</NavbarWrappr>
			</NavbarAnimation>
		</>
	)
}

export default Navbar
