import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import { Row, Col, Image, Container } from "react-bootstrap"
import lightPic from "../../assets/img/lightPic.jpg"
import darkPic from "../../assets/img/darkPic.jpg"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"
import { HeartIcon, CoffeeIcon } from "../../assets/svg"

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
									<PageInfoSubText text={subText} />
								</div>
							)}
						</Spring>
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={1100}
						>
							{(props) => (
								<p style={props} className="d-flex justify-content-center mt-3">
									Love &nbsp;
									<HeartIcon />
									&nbsp; Coffee And tea &nbsp;
									<CoffeeIcon />
								</p>
							)}
						</Spring>
					</Col>

					<Col md={{ span: 4, offset: 2 }} className="mt-5">
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={900}
						>
							{(props) => (
								<div style={props}>
									{pic()}
									<p className="d-flex justify-content-center text-center mt-3">
										* Name: Ahmed Rezk <br />
										* Job: Full Stack Web Developer <br />* Living in: CO, US
									</p>
								</div>
							)}
						</Spring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

About.propTypes = {
	thm: PropTypes.oneOf(["undefined", true, false])
}

export default About
