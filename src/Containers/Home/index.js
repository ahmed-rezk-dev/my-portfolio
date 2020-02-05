import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import { Button, Row, Col, Image, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import lightPic from "../../assets/img/lightPic.jpg"
import darkPic from "../../assets/img/darkPic.jpg"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"

const text = (
	<span>
		Hi, <br /> I'm Ahmed, <br /> Web Developer
	</span>
)
function Home({ thm }) {
	const pic = useCallback(() => {
		if (thm) {
			return <Image src={darkPic} thumbnail />
		}
		return <Image src={lightPic} thumbnail />
	}, [thm])

	return (
		<>
			<Container>
				<Row className="align-items-center mt-5">
					<Col md={6} className="mt-2">
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
									<PageInfoSubText text="This website is mad with React.js" />
								</Col>
							)}
						</Spring>
						<div className="mt-2 justify-content-center d-flex">
							<Spring
								from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
								to={{ opacity: 1, rotation: "0deg", scale: 1 }}
								delay={1100}
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
								delay={1300}
							>
								{(props) => (
									<Button variant="outline-secondary" className="m-2" style={props}>
										Resume
									</Button>
								)}
							</Spring>
						</div>
					</Col>
					<Col md={{ span: 4, offset: 2 }} className="mt-5">
						<Spring
							from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
							to={{ opacity: 1, rotation: "0deg", scale: 1 }}
							delay={900}
						>
							{(props) => <div style={props}>{pic()}</div>}
						</Spring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

Home.propTypes = {
	thm: PropTypes.oneOf(["undefined", true, false])
}

export default Home
