import React from "react"
import { NavLink } from "react-router-dom"

import styled from "styled-components"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import {
	HomeIcon,
	AboutIcon,
	PortfolioIcon,
	SkillsIcon,
	ContactIcon,
	LinkedinIcon,
	GithubIcon
} from "../../assets/svg"

const Side = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.sidebar};
	min-height: 100vh;
	width: 135px;
	flex-direction: column;
	align-items: center;
	border-color: ${(props) => props.theme.colors.borderColor};
	border-width: 0 2px 0 0;
	border-style: solid;
	border-radius: 0px 4px 41px 16px/9px 21px 6px 0px;
	justify-content: space-around;
`

const Title = styled.h1`
	margin-bottom: 2rem;
	font-size: 3.5rem;
	color: ${(props) => props.theme.colors.mainColor};
`
const List = styled.ul`
	list-style-type: none;
	padding: 0;
	align-items: center;
	li {
		display: flex;
		justify-content: center;
		margin-bottom: 3.8rem;
		a {
			display: flex;
			width: 100%;
			height: 100%;
			justify-content: center;
			padding: 0.3rem;
			position: relative;
		}
		svg {
			fill: ${(props) => props.theme.colors.mainColor};
			transition-property: all;
			transition-duration: 0.6s;
			transition-timing-function: ease;
		}
		&:hover {
			svg {
				fill: ${(props) => props.theme.colors.warningColor};
			}
		}
		.selectedLink {
			&::after {
				content: "";
				position: absolute;
				bottom: -7px;
				z-index: 11111;
				width: 80px;
				display: flex;
				border: 2px solid transparent;
				border-color: ${(props) => props.theme.colors.warningColor};
				border-radius: 255px 25px 225px 25px/25px 225px 25px 255px;
			}
			text-decoration: none;
			svg {
				fill: ${(props) => props.theme.colors.warningColor};
			}
		}
	}
`
const SocialMedia = styled.div`
	display: flex;
	align-items: center;
	a {
		display: flex;
		justify-content: center;
		margin: 0 0.5rem;
		svg {
			fill: ${(props) => props.theme.colors.mainColor};
			transition-property: all;
			transition-duration: 0.6s;
			transition-timing-function: ease;
		}
		&:hover {
			svg {
				fill: ${(props) => props.theme.colors.warningColor};
			}
		}
	}
`

const CustomSidebar = ({ open }) => {
	return (
		<Side>
			<Title>{`<A/>`}</Title>
			<List>
				<li>
					<OverlayTrigger
						placement="right"
						overlay={<Tooltip id="tooltip-disabled">Home</Tooltip>}
					>
						<NavLink exact activeClassName="selectedLink" to="/">
							<HomeIcon />
						</NavLink>
					</OverlayTrigger>
				</li>
				<li>
					<OverlayTrigger
						placement="right"
						overlay={<Tooltip id="tooltip-disabled">About Me!</Tooltip>}
					>
						<NavLink exact activeClassName="selectedLink" to="/about">
							<AboutIcon />
						</NavLink>
					</OverlayTrigger>
				</li>
				<li>
					<OverlayTrigger
						placement="right"
						overlay={<Tooltip id="tooltip-disabled">Portfolio</Tooltip>}
					>
						<NavLink exact activeClassName="selectedLink" to="/portfolio">
							<PortfolioIcon />
						</NavLink>
					</OverlayTrigger>
				</li>
				<li>
					<OverlayTrigger
						placement="right"
						overlay={<Tooltip id="tooltip-disabled">Skills</Tooltip>}
					>
						<NavLink exact activeClassName="selectedLink" to="/skills">
							<SkillsIcon />
						</NavLink>
					</OverlayTrigger>
				</li>
				<li>
					<OverlayTrigger
						placement="right"
						overlay={<Tooltip id="tooltip-disabled">Contact Me</Tooltip>}
					>
						<NavLink exact activeClassName="selectedLink" to="/contact">
							<ContactIcon />
						</NavLink>
					</OverlayTrigger>
				</li>
			</List>
			<SocialMedia>
				<OverlayTrigger
					placement="right"
					overlay={<Tooltip id="tooltip-disabled">Linkedin</Tooltip>}
				>
					<a
						href="https://www.linkedin.com/in/ahmed-rezk-dev/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinIcon />
					</a>
				</OverlayTrigger>
				<OverlayTrigger
					placement="right"
					overlay={<Tooltip id="tooltip-disabled">Github</Tooltip>}
				>
					<a
						href="https://github.com/ahmed-rezk-dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GithubIcon />
					</a>
				</OverlayTrigger>
			</SocialMedia>
		</Side>
	)
}

export default CustomSidebar
