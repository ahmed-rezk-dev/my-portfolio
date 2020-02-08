import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Button } from "react-bootstrap"
import { MenuIcon, LampIcon } from "../../assets/svg"
import CustomSpring from "../CustomSpring"

export const Nav = styled.div`
	display: flex;
	min-height: 60px;
	align-items: center;
	justify-content: space-between;
	svg {
		fill: ${(props) => props.theme.colors.mainColor};
	}
	background: #fff;
`
function Navbar({ setOpen, open, setThm, thm }) {
	return (
		<>
			<CustomSpring time={1500}>
				<Nav className="sticky-top mb-md-5">
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
			</CustomSpring>
		</>
	)
}

Navbar.propTypes = {
	setOpen: PropTypes.func.isRequired,
	open: PropTypes.oneOf(["undefined", true, false]),
	setThm: PropTypes.func.isRequired,
	thm: PropTypes.bool.isRequired
}

Navbar.defaultProps = {
	open: true
}

export default Navbar
