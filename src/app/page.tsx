"use client"
import { Col, Container, Row, Image, Button } from "react-bootstrap"
import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import HomePageText from "./components/home-page-text"
import HomePageSubText from "./components/home-page-sub-text"

export default function Page() {
	const themeContext = useContext(ThemeContext)
	const isLightTheme = themeContext?.isLight

	const pic = isLightTheme ? (
		<Image src="/light_pic.jpeg" thumbnail alt="Ahmed Rezk" />
	) : (
		<Image src="/dark_pic.jpeg" thumbnail alt="Ahmed Rezk" />
	)

	return (
		<>
			<Container>
				<Row className="align-items-center mt-md-5">
					<Col md={6} xs={{ span: 12, order: 2 }} className="mt-2">
						<Col md={12} className="mt-4">
							<HomePageText />
							<HomePageSubText />
						</Col>

						<div className="mt-5 justify-content-center d-flex">
							<Link href="/contact">
								<Button variant="outline-secondary" className="m-2" size="lg">
									Contact
								</Button>
							</Link>

							<Link href="/about">
								<Button variant="outline-secondary" className="m-2" size="lg">
									Resume
								</Button>
							</Link>
						</div>
					</Col>

					<Col
						md={{ span: 4, offset: 2, order: 2 }}
						xs={{ span: 8, offset: 2, order: 1 }}
						className="mt-5"
					>
						{pic}
					</Col>
				</Row>
			</Container>
		</>
	)
}
