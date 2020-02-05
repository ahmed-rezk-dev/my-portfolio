import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Button } from "react-bootstrap"
import { Spring } from "react-spring/renderprops"
import { MenuIcon, LampIcon } from "../../assets/svg"

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
function Navbar({ setOpen, open, setThm, thm }) {
	return (
		<>
			<Nav>
				<Spring
					from={{ transform: "translate3d(0,-40px,0)" }}
					to={{ transform: "translate3d(0,0px,0)" }}
					delay={1500}
				>
					{(props) => (
						<Button
							style={props}
							variant="link"
							onClick={() => setOpen(open === undefined ? false : !open)}
							aria-expanded={open}
						>
							<MenuIcon open={open} />
						</Button>
					)}
				</Spring>
				<Spring
					from={{ transform: "translate3d(0,-40px,0)" }}
					to={{ transform: "translate3d(0,0px,0)" }}
					delay={1500}
				>
					{(props) => (
						<Button style={props} variant="link" onClick={() => setThm(!thm)}>
							<LampIcon thm={thm} />
						</Button>
					)}
				</Spring>
			</Nav>
		</>
	)
}

Navbar.propTypes = {
	setOpen: PropTypes.func.isRequired,
	open: PropTypes.oneOf(["undefined", true, false]),
	setThm: PropTypes.func.isRequired,
	thm: PropTypes.bool.isRequired
}

export default Navbar
