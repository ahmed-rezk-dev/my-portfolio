import React from "react"
import { Spring } from "react-spring/renderprops"
import { Button, Row, Col, Image, Container } from "react-bootstrap"

import styled from "styled-components"
import { Link } from "react-router-dom"
import lightPic from "../../assets/img/lightPic.png"
// import darkPic from "../../assets/img/darkPic.jpg"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"

const text = (
	<span>
		Hi, <br /> I'm Ahmed, <br /> Web Developer
	</span>
)
export default function Home() {
	return (
		<>
			<Container>
				<Row className="align-items-center">
					<Spring
						from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
						to={{ opacity: 1, rotation: "0deg", scale: 1 }}
						delay={500}
					>
						{(props) => (
							<Col md={6} style={props}>
								<PageInfoText text={text} />
							</Col>
						)}
					</Spring>
					<Spring
						from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
						to={{ opacity: 1, rotation: "0deg", scale: 1 }}
						delay={1500}
					>
						{(props) => (
							<Col md={{ span: 4, offset: 2 }} style={props}>
								<Image src={lightPic} thumbnail />
							</Col>
						)}
					</Spring>
					<Spring
						from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
						to={{ opacity: 1, rotation: "0deg", scale: 1 }}
						delay={1000}
					>
						{(props) => (
							<Col md={12} className="mt-4" style={props}>
								<PageInfoSubText text="This website is mad with React.js" />
							</Col>
						)}
					</Spring>
					<Col md={6} className="mt-2 justify-content-center d-flex">
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={2000}
						>
							{(props) => (
								<Link to="/contact" style={props}>
									<Button variant="outline-secondary" className="m-2">
										Contact
									</Button>
								</Link>
							)}
						</Spring>
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={2500}
						>
							{(props) => (
								<Button variant="outline-secondary" className="m-2" style={props}>
									Resume
								</Button>
							)}
						</Spring>
					</Col>
				</Row>
			</Container>
		</>
	)
}
