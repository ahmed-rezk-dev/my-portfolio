import React, { useCallback } from "react"
import PropTypes from "prop-types"
import { Button, Row, Col, Image, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import lightPic from "../../assets/img/lightPic.jpg"
import darkPic from "../../assets/img/darkPic.jpg"
import PageInfoText from "../../Components/PageInfoText"
import PageInfoSubText from "../../Components/PageInfoSubText"
import CustomSpring from "../../Components/CustomSpring"

const text = (
	<span>
		Hi, <br /> I&apos;m Ahmed, <br /> Web Developer
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
						<PageInfoText text={text} />

						<Col md={12} className="mt-4">
							<PageInfoSubText text="This website is mad with React.js" />
						</Col>

						<div className="mt-2 justify-content-center d-flex">
							<CustomSpring time={1100}>
								<Link to="/contact">
									<Button variant="outline-secondary" className="m-2">
										Contact
									</Button>
								</Link>
							</CustomSpring>

							<CustomSpring time={1100}>
								<Link to="/about">
									<Button variant="outline-secondary" className="m-2">
										Resume
									</Button>
								</Link>
							</CustomSpring>
						</div>
					</Col>
					<Col md={{ span: 4, offset: 2 }} className="mt-5">
						<CustomSpring time={1100}>{pic()}</CustomSpring>
					</Col>
				</Row>
			</Container>
		</>
	)
}

Home.propTypes = {
	thm: PropTypes.oneOf(["undefined", true, false]).isRequired
}

export default Home
