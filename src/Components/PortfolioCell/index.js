import React from "react"
import PropTypes from "prop-types"
import { Button, Image } from "react-bootstrap"
import styled from "styled-components"
import { Slug, Fade } from "../../Containers/Portfolio/helpers"
import { CloseIcon } from "../../assets/svg"

const BoxContainer = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	padding: 2px;
	font-weight: 100;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

const BoxContainerTitle = styled.div`
	display: flex;
	position: absolute;
	bottom: 1rem;
	left: 0rem;
	width: 100%;
	background: ${(props) => props.theme.colors.white};
	text-align: center;
	justify-content: center;
	p {
		padding: 0.7rem 0;
		margin: 0;
	}
`

const CustomCall = styled.div`
	position: relative;
	background-size: cover;
	width: 100%;
	height: 100%;
	overflow: hidden;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 10px 60px -10px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.5s;
	line-height: 10px;
	cursor: pointer;
	.btn {
		position: absolute;
		top: 40px;
		right: 40px;
		font-size: 26px;
	}
`

const Details = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	background: ${(props) => props.theme.colors.light}
	color: white;
	padding: 40px;
	font-weight: 100;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

export default function PortfolioCell({
	toggle,
	name,
	img,
	description,
	maximized
}) {
	return (
		<>
			<CustomCall className="card" onClick={!maximized ? toggle : undefined}>
				<Fade show={maximized} delay={maximized ? 400 : 0}>
					<Details>
						<Slug delay={600}>
							<Button variant="link" onClick={toggle}>
								<CloseIcon />
							</Button>
							<h1>{name}</h1>
							<p>{description}</p>
						</Slug>
					</Details>
				</Fade>
				<Fade show={!maximized} delay={maximized ? 0 : 400}>
					<BoxContainer>
						<BoxContainerTitle>
							<p>{name}</p>
						</BoxContainerTitle>
						<Image src={img} />
					</BoxContainer>
				</Fade>
			</CustomCall>
		</>
	)
}

PortfolioCell.propTypes = {
	toggle: PropTypes.func.isRequired,
	name: PropTypes.string,
	description: PropTypes.string,
	maximized: PropTypes.bool.isRequired,
	img: PropTypes.string.isRequired
}

PortfolioCell.defaultProps = {
	name: null,
	description: null
}
