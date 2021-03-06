import React from "react"
import PropTypes from "prop-types"
import { Row, Col, Image, Button } from "react-bootstrap"
import styled from "styled-components"
import Scrollbars from "react-custom-scrollbars"
import { Keyframes, config } from "react-spring/renderprops"
import { CloseIcon, VisitIcon } from "../../assets/svg"

const DetailsContainer = styled.div`
	position: fixed;
	top: 20px;
	left: 5%;
	display: flex;
	overflow: hidden;
	flex-direction: column;
	align-items: center;
	width: 90%;
	height: 90%;
	font-weight: 100;
	border-radius: 5px 5px 5px 5px/25px 25px 25px 5px;
	border: 2px solid ${(props) => props.theme.colors.borderColor};
	border-radius: 25px;
	background-color: ${(props) => props.theme.colors.sidebar};
	z-index: +1111;
	.btn {
		position: sticky;
		top: 0px;
		right: 0px;
		z-index: +111;
		align-self: flex-end;
		font-size: 26px;
		svg {
			path {
				fill: ${(props) => props.theme.colors.mainColor};
			}
		}
	}
`
const CircleImage = styled.div`
	max-width: 15rem;
	min-width: 15rem;
	min-height: 15rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	box-shadow: 0px 20px 60px -10px rgba(0, 0, 0, 0.2);
	padding: 1rem;
	overflow: hidden;
`

const DescriptionContainer = styled.p`
	line-height: 2rem;
	margin: 1rem 0;
`

const ImageContainer = styled.div`
	margin: 1.5rem 0;
	img {
		width: 100%;
		max-width: 500px;
	}
	a {
		&:hover {
			cursor: zoom-in;
		}
	}
`

const Menu = Keyframes.Spring({
	in: async (next) => {
		await next({
			transform: "translateY(0%)",
			from: { transform: "translateY(100%)" },
			delay: 0
		})
	},
	out: async (next) => {
		await next({
			transform: "translateY(-110%)",
			from: { transform: "translateY(100%)" },
			delay: 0
		})
	},
	closed: async (next) => {
		await next({
			transform: "translateY(-110%)",
			from: { transform: "translateY(-110%)" },
			delay: 0
		})
	}
})

function App({ stateType, setStateType, detailsData }) {
	const { name, logo, images, description, lang, url } = detailsData
	const toggle = () => {
		setStateType(!stateType)
	}

	const ImagesFun = () => {
		if (images) {
			return images.map((i, k) => (
				<ImageContainer key={k.toString()}>
					<a href={i} target="_blank" rel="noopener noreferrer">
						<Image src={i} thumbnail />
					</a>
				</ImageContainer>
			))
		}
	}
	return (
		<>
			<Menu
				config={config.gentle}
				unique
				state={stateType === null ? "closed" : stateType ? "in" : "out"}
			>
				{(props) => (
					<DetailsContainer style={props}>
						<Scrollbars style={{ width: "100%", height: "100%" }}>
							<Button variant="link" onClick={toggle}>
								<CloseIcon />
							</Button>

							<Row className="mt-5 pb-5">
								<Col md={12} className="d-flex flex-column align-items-center">
									<CircleImage>
										<Image src={logo} alt={name} fluid />
									</CircleImage>
									<h2 className="mt-4">{name}</h2>
								</Col>
								<Col md={{ span: 8, offset: 2 }} className="d-flex">
									<DescriptionContainer>{description}</DescriptionContainer>
								</Col>
								<Col md={{ span: 8, offset: 2 }} className="d-flex">
									<b className="text-info">{lang}</b>
								</Col>
								<Col
									md={{ span: 8, offset: 2 }}
									className="d-flex justify-content-center"
								>
									<Button
										href={url}
										target="_blank"
										variant="outline-secondary"
										className="m-2 d-flex align-self-center"
									>
										<span className="mr-1">
											<VisitIcon />
										</span>
										Visit
									</Button>
								</Col>
								<Col md={12} className="d-flex flex-column align-items-center">
									{ImagesFun()}
								</Col>
							</Row>
						</Scrollbars>
					</DetailsContainer>
				)}
			</Menu>
		</>
	)
}

App.propTypes = {
	stateType: PropTypes.bool,
	setStateType: PropTypes.func.isRequired,
	detailsData: PropTypes.objectOf(PropTypes.any).isRequired
}

App.defaultProps = {
	stateType: null
}

export default App
