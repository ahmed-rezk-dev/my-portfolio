"use client"
import { Col, Container, Row, Image, Button } from "react-bootstrap"
import Link from "next/link"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import DevSubInfo from "./components/dev-sub-info"
import DevInfo from "./components/dev-info"
import PageContainer from "./components/page-container"

const infoText = <h1>Warning: Code wizard ahead! 🪄🎩</h1>
const subInfoText = (
	<p>
		Hey there! I&apos;m Ahmed Rezk, your go-to code wizard with a passion for
		crafting innovative solutions and making technology magic happen! <br />
		Want to learn more about my superpowers, dev tools, and what makes me tick? Check
		out my about page!
		👉🏼<Link href="/about"> Here!</Link>
	</p>
)

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
			<PageContainer>
				<Row className="align-items-center mt-md-5">
					<Col md={6} xs={{ span: 12, order: 2 }} className="mt-2">
						<Col md={12} className="mt-4">
							<DevInfo element={infoText} />
							<DevSubInfo element={subInfoText} />
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
						className="d-flex flex-column align-items-center mt-2 mt-sm-5"
					>
						{pic}
						<p className="d-flex justify-content-center text-center mt-1 mt-sm-3">
							* Ahmed Rezk <br />
							* Senior Software Engineer <br />* Living in: US
						</p>
					</Col>
				</Row>
			</PageContainer>
		</>
	)
}
