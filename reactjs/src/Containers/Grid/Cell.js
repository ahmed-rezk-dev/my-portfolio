import React, { useMemo } from "react"
import styled from "styled-components"
import { Row, Col, Image, Button } from "react-bootstrap"
import { Slug, Fade } from "./Primitives"
import { CloseIcon } from "../../assets/svg"

const CellContainer = styled.div`
	position: relative;
	background-size: cover;
	width: 100%;
	height: 100%;
	overflow: hidden;
	color: #777777;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 10px 60px -10px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.5s;
	font-size: 10px;
	line-height: 10px;
	.btn {
		position: sticky;
		top: 0px;
		right: 0px;
		z-index: +111;
		align-self: flex-end;
		font-size: 26px;
	}
	&:hover {
		box-shadow: 0px 20px 60px -10px rgba(0, 0, 0, 0.3);
	}
`

const DefaultContainer = styled.div`
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

const DefaultContainerTitle = styled.div`
	display: flex;
	position: absolute;
	bottom: 1rem;
	left: 0rem;
	width: 100%;
	overflow: hidden;
	text-align: center;
	justify-content: center;
	p {
		padding: 0.7rem 0;
		margin: 0;
	}
`

const DetailsContainer = styled.div`
	position: absolute;
	bottom: 0px;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 20px;
	font-weight: 100;
	display: flex;
	overflow: scroll;
	flex-direction: column;
	align-items: center;
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

const ImageContainer = styled.div`
	img {
		width: 100%;
		max-width: 500px;
	}
`

export default function Cell({
	toggle,
	name,
	logo,
	images,
	description,
	css,
	active
}) {
	const ImagesCol = useMemo(
		() =>
			images.map((i, k) => (
				<ImageContainer key={k.toString()}>
					<Image src={i} className="mt-4" thumbnail />
				</ImageContainer>
			)),
		[images]
	)
	return (
		<CellContainer
			className="card"
			style={{ backgroundImage: css, cursor: !active ? "pointer" : "auto" }}
			onClick={!active ? toggle : undefined}
		>
			<Fade show={active} delay={active ? 500 : 0}>
				<DetailsContainer>
					<Button variant="link" onClick={toggle}>
						<CloseIcon />
					</Button>
					<Slug delay={600}>
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
				</DetailsContainer>
			</Fade>
			<Fade
				show={!active}
				from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
				enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
				leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
				delay={active ? 0 : 400}
			>
				<DefaultContainer>
					<DefaultContainerTitle>
						<p>{name}</p>
					</DefaultContainerTitle>
					<img src={logo} alt={name} />
				</DefaultContainer>
			</Fade>
		</CellContainer>
	)
}
