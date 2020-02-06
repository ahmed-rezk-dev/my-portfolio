import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"
import { Row, Col, Container, Button, Form } from "react-bootstrap"
import PageInfoText from "../../Components/PageInfoText"

const text = <span>Contact Me</span>

export const TextContainer = styled.div`
	font-size: 1.5rem;
	line-height: 3rem;
	a {
		color: ${(props) => props.theme.colors.secondary};
		text-decoration: none;
	}
`

function Contact() {
	return (
		<>
			<Container>
				<Row className="align-items-center">
					<Col md={6} className="mt-1">
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={500}
						>
							{(props) => (
								<div style={props} className="mt-3">
									<PageInfoText text={text} />
								</div>
							)}
						</Spring>
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div style={props} className="mt-5">
									<Form>
										<Row>
											<Col>
												<Form.Group controlId="name">
													<Form.Label>Name</Form.Label>
													<Form.Control type="text" />
												</Form.Group>
											</Col>
											<Col>
												<Form.Group controlId="formBasicEmail">
													<Form.Label>Email address</Form.Label>
													<Form.Control type="email" />
												</Form.Group>
											</Col>
											<Col md={12}>
												<Form.Group controlId="subject">
													<Form.Label>Subject</Form.Label>
													<Form.Control type="email" />
												</Form.Group>
											</Col>
											<Col md={12}>
												<Form.Group controlId="subject">
													<Form.Label>Your Message</Form.Label>
													<Form.Control as="textarea" rows="5" />
												</Form.Group>
											</Col>
										</Row>
										<Button variant="outline-secondary" type="submit" size="lg">
											Submit
										</Button>
									</Form>
								</div>
							)}
						</Spring>
					</Col>

					<Col
						md={{ span: 4, offset: 2 }}
						className="d-flex flex-column align-items-center mt-5"
					>
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={900}
						>
							{(props) => (
								<TextContainer style={props}>
									* Email: work72019@gmail.com <br />
									* Phone: 970-966-5773
									<br />
									<a
										href="https://www.linkedin.com/in/ahmed-rezk-dev/"
										target="_blank"
										rel="noopener noreferrer"
									>
										* Linkedin: ahmed-rezk-dev
									</a>
									<br />
									<a
										href="https://github.com/ahmed-rezk-dev"
										target="_blank"
										rel="noopener noreferrer"
									>
										* Github: ahmed-rezk-dev
									</a>
								</TextContainer>
							)}
						</Spring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Contact
