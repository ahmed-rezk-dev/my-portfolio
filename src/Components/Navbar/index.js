import React from "react"

import styled from "styled-components"
import { MenuIcon, LampIcon } from "../../assets/svg"
import { Button } from "react-bootstrap"

export const Nav = styled.div`
	display: flex;
	min-height: 60px;
	margin-bottom: 2rem;
	align-items: center;
	justify-content: space-between;
	svg {
		fill: ${(props) => props.theme.colors.mainColor};
	}
`
export default function Navbar({ setOpen, open, setThm, thm }) {
	return (
		<>
			<Nav>
				<Button
					variant="link"
					onClick={() => setOpen(open === undefined ? false : !open)}
					aria-expanded={open}
				>
					<MenuIcon open={open} />
				</Button>
				<Button variant="link" onClick={() => setThm(!thm)}>
					<LampIcon thm={thm} />
				</Button>
			</Nav>
		</>
	)
}
