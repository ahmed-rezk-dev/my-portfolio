import React, { useState, useCallback, useMemo } from "react"
import styled from "styled-components"
import { Row, Col, Container, Button, Form, Alert } from "react-bootstrap"
import PageInfoText from "../../Components/PageInfoText"
import CustomSpring from "../../Components/CustomSpring"

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
	const [status, setStatus] = useState("")

	const submitForm = useCallback((ev) => {
		ev.preventDefault()
		const form = ev.target
		const data = new FormData(form)
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader("Accept", "application/json")
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return
			if (xhr.status === 200) {
				form.reset()
				setStatus("SUCCESS")
			} else {
				setStatus("ERROR")
			}
		}
		xhr.send(data)
	}, [])

	const statusMessage = useMemo(() => {
		if (status === "SUCCESS") {
			return <Alert variant="success">Thanks!</Alert>
		}
		if (status === "ERROR") {
			return <Alert variant="danger">Ooops! There was an error.</Alert>
		}
		return ""
	}, [status])

	return (
		<>
			<Container>
				<Row className="align-items-center">
					<Col md={6} className="mt-1">
						<div className="mt-3">
							<PageInfoText text={text} />
						</div>

						<CustomSpring time={700}>
							<div className="mt-5">
								<Form
									onSubmit={submitForm}
									action="https://formspree.io/mjvweood"
									method="POST"
								>
									<Row>
										<Col>
											<Form.Group controlId="name">
												<Form.Label>Name</Form.Label>
												<Form.Control type="text" name="name" />
											</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="formBasicEmail">
												<Form.Label>Email address</Form.Label>
												<Form.Control type="email" name="email" />
											</Form.Group>
										</Col>
										<Col md={12}>
											<Form.Group controlId="subject">
												<Form.Label>Subject</Form.Label>
												<Form.Control type="text" name="subject" />
											</Form.Group>
										</Col>
										<Col md={12}>
											<Form.Group controlId="message">
												<Form.Label>Your Message</Form.Label>
												<Form.Control as="textarea" rows="5" name="message" />
											</Form.Group>
										</Col>
									</Row>
									{statusMessage}
									{status !== "SUCCESS" ? (
										<Button variant="outline-secondary" type="submit" size="lg">
											Submit
										</Button>
									) : (
										""
									)}
								</Form>
							</div>
						</CustomSpring>
					</Col>

					<Col
						md={{ span: 4, offset: 2 }}
						className="d-flex flex-column align-items-center mt-5"
					>
						<CustomSpring time={900}>
							<TextContainer>
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
						</CustomSpring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Contact
