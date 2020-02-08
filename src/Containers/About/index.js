import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { Row, Col, Image, Container, Button } from "react-bootstrap"
import lightPic from "../../assets/img/lightPic.jpg"
import darkPic from "../../assets/img/darkPic.jpg"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"
import { HeartIcon, CoffeeIcon } from "../../assets/svg"
import CustomSpring from "../../Components/CustomSpring"

const resume = "https://www.dropbox.com/s/33b4490n1s5ld8h/Ahmed%20Rezk.docx?dl=1"
const text = <span>About Me</span>
const subText =
	"An enthusiastic and proactive web developer who makes easy-to-use websites and applications by discovering how users think. Seeking an IT position where I can utilize six years of experience of Back-End/Front-End and in developing websites and web applications."

function About({ thm }) {
	const pic = useCallback(() => {
		if (thm) {
			return <Image src={darkPic} thumbnail />
		}
		return <Image src={lightPic} thumbnail />
	}, [thm])

	return (
		<>
			<Container>
				<Row className="align-items-center">
					<Col md={6} className="mt-5">
						<PageInfoText text={text} />

						<div className="mt-5">
							<PageInfoSubText text={subText} />
						</div>

						<CustomSpring time={1100}>
							<p className="d-flex justify-content-center mt-3">
								Love &nbsp;
								<HeartIcon />
								&nbsp; Coffee And tea &nbsp;
								<CoffeeIcon />
							</p>
						</CustomSpring>
					</Col>

					<Col
						md={{ span: 4, offset: 2 }}
						className="d-flex flex-column align-items-center mt-5"
					>
						<CustomSpring time={900}>
							{pic()}
							<p className="d-flex justify-content-center text-center mt-3">
								* Name: Ahmed Rezk <br />
								* Job: Full Stack Web Developer <br />* Living in: CO, US
							</p>
						</CustomSpring>

						<CustomSpring time={1300}>
							<Button variant="outline-secondary" href={resume} download>
								Download Resume
							</Button>
						</CustomSpring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

About.propTypes = {
	thm: PropTypes.oneOf(["undefined", true, false]).isRequired
}

export default About
