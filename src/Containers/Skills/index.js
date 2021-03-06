import React from "react"
import { Row, Col, Container, ProgressBar } from "react-bootstrap"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"
import CustomSpring from "../../Components/CustomSpring"

const text = <span>Skills</span>
function Skills() {
	return (
		<>
			<Container className="pb-5">
				<Row className="align-items-center mt-5">
					<Col md={12} className="mt-2">
						<PageInfoText text={text} />

						<Col md={12} className="mt-4">
							<PageInfoSubText text="Full Stack Web Developer" />
						</Col>
					</Col>
				</Row>
				<Row>
					<Col md={6} className="mt-5">
						<CustomSpring time={1100}>
							<div className="mt-3">
								<h4>JavaScript/Typescript</h4>
								<ProgressBar now={95} />
							</div>
						</CustomSpring>

						<CustomSpring time={1100}>
							<div className="mt-3">
								<h4>NodeJs</h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>

						<CustomSpring time={1300}>
							<div className="mt-3">
								<h4>Express.js </h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>

						<CustomSpring time={700}>
							<div className="mt-3">
								<h4>PHP</h4>
								<ProgressBar now={95} />
							</div>
						</CustomSpring>

						<CustomSpring time={900}>
							<div className="mt-3">
								<h4>Laravel</h4>
								<ProgressBar now={100} />
							</div>
						</CustomSpring>

						<CustomSpring time={1500}>
							<div className="mt-3">
								<h4>MySQL</h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>
						<CustomSpring time={1700}>
							<div className="mt-3">
								<h4>MongoDB</h4>
								<ProgressBar now={70} />
							</div>
						</CustomSpring>

						<CustomSpring time={1700}>
							<div className="mt-3">
								<h4>AWS</h4>
								<ProgressBar now={70} />
							</div>
						</CustomSpring>
					</Col>

					<Col md={6} className="mt-5">
						<CustomSpring time={800}>
							<div className="mt-3">
								<h4>HTML/CSS/Scss/Sass</h4>
								<ProgressBar now={100} />
							</div>
						</CustomSpring>

						<CustomSpring time={1000}>
							<div className="mt-3">
								<h4>Bootstrap/Material/Ant Design</h4>
								<ProgressBar now={95} />
							</div>
						</CustomSpring>

						<CustomSpring time={1200}>
							<div className="mt-3">
								<h4>React/Redux.js</h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>

						<CustomSpring time={1300}>
							<div className="mt-3">
								<h4>Angular/Ngrx</h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>

						<CustomSpring time={1900}>
							<div className="mt-3">
								<h4>Socket.io/Real Time</h4>
								<ProgressBar now={100} />
							</div>
						</CustomSpring>
						<CustomSpring time={2100}>
							<div className="mt-3">
								<h4>Git/Github/Bitbucket</h4>
								<ProgressBar now={95} />
							</div>
						</CustomSpring>

						<CustomSpring time={1400}>
							<div className="mt-3">
								<h4>Stripe payment</h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>

						<CustomSpring time={1400}>
							<div className="mt-3">
								<h4>Google Apis/Maps</h4>
								<ProgressBar now={90} />
							</div>
						</CustomSpring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Skills
