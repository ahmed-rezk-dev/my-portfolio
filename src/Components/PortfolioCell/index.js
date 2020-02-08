import React, { useMemo } from "react"
import PropTypes from "prop-types"
import { Button, Image, Row, Col } from "react-bootstrap"
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
	justify-content: flex-start;
	img {
		height: 100%;
		max-width: 100%;
		padding: 1rem;
	}
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
	display: flex;
	background-size: cover;
	width: 100%;
	height: 100%;
	overflow: hidden;
	text-transform: uppercase;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 10px 60px -10px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.5s;
	.btn {
		position: sticky;
		top: 0px;
		right: 0px;
		z-index: +111;
		align-self: flex-end;
		font-size: 26px;
	}
`

const Details = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	overflow: scroll;
	background: ${(props) => props.theme.colors.light}
	color: white;
	padding: 40px;
	font-weight: 100;
	display: flex;
	flex-direction: column;
	align-items: center
`
const CircleImage = styled.img`
	max-width: 15rem;
	min-height: 15rem;
	border-radius: 50%;
	box-shadow: 0px 20px 60px -10px rgba(0, 0, 0, 0.2);
	padding: 1rem;
`

const DescriptionContainer = styled.p`
	line-height: 2rem;
	margin: 1rem 0;
`

export default function PortfolioCell({
	toggle,
	name,
	logo,
	images,
	description,
	maximized
}) {
	const ImagesCol = useMemo(
		() =>
			images.map((i, k) => (
				<Image key={k.toString()} src={i} className="mt-4" thumbnail />
			)),
		[images]
	)
	return (
		<>
			<CustomCall className="card" onClick={!maximized ? toggle : undefined}>
				<Fade show={maximized} delay={maximized ? 400 : 0}>
					<Details>
						<Slug delay={600}>
							<Button variant="link" onClick={toggle}>
								<CloseIcon />
							</Button>
							<Row className="mt-5">
								<Col md={12} className="d-flex flex-column align-items-center">
									<CircleImage src={logo} alt={name} />
									<h2 className="mt-4">{name}</h2>
								</Col>
								<Col md={{ span: 8, offset: 2 }} className="d-flex">
									<DescriptionContainer>{description}</DescriptionContainer>
								</Col>
								<Col md={12} className="d-flex flex-column align-items-center">
									{ImagesCol}
								</Col>
							</Row>
						</Slug>
					</Details>
				</Fade>
				<Fade show={!maximized} delay={maximized ? 0 : 400}>
					<BoxContainer>
						<BoxContainerTitle>
							<p>{name}</p>
						</BoxContainerTitle>
						<img src={logo} alt={name} />
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
	logo: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.string).isRequired
}

PortfolioCell.defaultProps = {
	name: null,
	description: null
}
