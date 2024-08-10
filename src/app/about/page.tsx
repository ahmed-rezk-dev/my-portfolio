import { useContext } from "react"
import { Container, Row, Image, Col } from "react-bootstrap"
import { ThemeContext } from "styled-components"

const resume =
	"https://www.icloud.com/iclouddrive/02epE29X5o9x2wjvFYQw_76kQ#Ahmed_Rezk_Resume"
const text = <span>About Me</span>
const subText =
	"An enthusiastic and proactive web developer who makes easy-to-use websites and applications by discovering how users think. Seeking an IT position where I can utilize six years of experience of Back-End/Front-End and in developing websites and web applications."

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
				<Row className="align-items-center">
					<Col
						md={{ span: 6, order: 1 }}
						xs={{ span: 12, order: 2 }}
						className="mt-2 mt-sm-5"
					>
						<PageInfoText text={text} />

						<div className=" mt-sm-5 mt-3">
							<PageInfoSubText text={subText} />
						</div>

						<CustomSpring time={1100}>
							<p className="d-flex justify-content-center mt-sm-3">
								Love &nbsp;
								<HeartIcon />
								&nbsp; Coffee And tea &nbsp;
								<CoffeeIcon />
							</p>
						</CustomSpring>
					</Col>

					<Col
						md={{ span: 4, offset: 2 }}
						xs={{ span: 8, offset: 2, order: 1 }}
						className="d-flex flex-column align-items-center mt-2 mt-sm-5"
					>
						<CustomSpring time={900}>
							{pic()}
							<p className="d-flex justify-content-center text-center mt-1 mt-sm-3">
								* Name: Ahmed Rezk <br />
								* Job: Full Stack Web Developer <br />* Living in: CO, US
							</p>
						</CustomSpring>

						<CustomSpring time={1300}>
							<Button
								variant="outline-secondary"
								href={resume}
								target="_blank"
								download
							>
								Download Resume
							</Button>
						</CustomSpring>
					</Col>
				</Row>
			</Container>
		</>
	)
}
