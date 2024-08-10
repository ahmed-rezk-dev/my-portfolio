import React from "react"
import styled from "styled-components"
import { Button } from "react-bootstrap"
import { LampIcon, SidebarIcon } from "@/public/svg"
import { motion, Variants } from "framer-motion"

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

const navbarAnimation: Variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.4,
		},
	},
}

function Navbar({
	isSidebarOpen,
	toggleSidebar,
	isLightTheme,
	toggleTheme,
}: NavbarType) {
	return (
		<>
			<motion.div initial="hidden" animate="visible" variants={navbarAnimation}>
				<NavbarWrappr className="sticky-top mb-md-5">
					{/* Sidebar toggle Button */}
					<Button
						variant="link"
						onClick={toggleSidebar}
						aria-expanded={isSidebarOpen}
					>
						<SidebarIcon open={isSidebarOpen} />
					</Button>

					{/* Theme toggle Button */}
					<Button variant="link" onClick={toggleTheme}>
						<LampIcon isLightTheme={isLightTheme} />
					</Button>
				</NavbarWrappr>
			</motion.div>
		</>
	)
}

export default Navbar
