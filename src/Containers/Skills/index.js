import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import { Row, Col, Container, ProgressBar } from "react-bootstrap"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"

const text = <span>Skills</span>
function Skills() {
	return (
		<>
			<Container className="pb-5">
				<Row className="align-items-center mt-5">
					<Col md={12} className="mt-2">
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={500}
						>
							{(props) => (
								<div style={props}>
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
								<Col md={12} className="mt-4" style={props}>
									<PageInfoSubText text="Full Stack Web Developer" />
								</Col>
							)}
						</Spring>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="mt-5">
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>PHP</h4>
									<ProgressBar now={95} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>Laravel</h4>
									<ProgressBar now={100} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>NodeJs</h4>
									<ProgressBar now={90} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>Express.js </h4>
									<ProgressBar now={90} />
								</div>
							)}
						</Spring>
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>MySQL</h4>
									<ProgressBar now={90} />
								</div>
							)}
						</Spring>
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>MongoDB</h4>
									<ProgressBar now={70} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>Socket.io</h4>
									<ProgressBar now={100} />
								</div>
							)}
						</Spring>
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>Git</h4>
									<ProgressBar now={95} />
								</div>
							)}
						</Spring>
					</Col>

					<Col md={6} className="mt-5">
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>HTML</h4>
									<ProgressBar now={100} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>CSS</h4>
									<ProgressBar now={95} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>Bootstrap</h4>
									<ProgressBar now={95} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>JavaScript</h4>
									<ProgressBar now={95} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>React</h4>
									<ProgressBar now={90} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>Redux.js</h4>
									<ProgressBar now={90} />
								</div>
							)}
						</Spring>

						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={700}
						>
							{(props) => (
								<div className="mt-3" style={props}>
									<h4>Google Api/Maps</h4>
									<ProgressBar now={90} />
								</div>
							)}
						</Spring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

Skills.propTypes = {
	thm: PropTypes.oneOf(["undefined", true, false])
}

export default Skills
