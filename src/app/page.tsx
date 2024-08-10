"use client"
import { Col, Container, Row } from "react-bootstrap"
import HomePageText from "./components/home-page-text"
import HomePageSubText from "./components/home-page-sub-text"

export default function Page() {

	return (
		<>
			<Container>
				<Row className="align-items-center mt-md-5">
					<Col md={6} xs={{ span: 12, order: 2 }} className="mt-2">
						<Col md={12} className="mt-4">
							<HomePageText />
							<HomePageSubText />
						</Col>

					</Col>
				</Row>
			</Container>
		</>
	)
}
