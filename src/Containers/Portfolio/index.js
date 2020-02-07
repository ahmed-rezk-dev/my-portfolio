import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Spring, config } from "react-spring/renderprops"
import data from "./data"
import Grid from "./Grid"
import PageInfoText from "../../Components/PageInfoText"
import PortfolioCell from "../../Components/PortfolioCell"

const text = <span>Portfolio</span>

function App() {
	return (
		<>
			<Container>
				<Row className="align-items-center">
					<Col>
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
					</Col>
					<Grid
						occupySpace
						data={data}
						keys={(d) => d.name}
						heights={200}
						columns={4}
						margin={40}
						lockScroll={false}
						closeDelay={400}
						config={config.default}
					>
						{(row, maximized, toggle) => (
							<PortfolioCell {...row} maximized={maximized} toggle={toggle} />
						)}
					</Grid>
				</Row>
			</Container>
		</>
	)
}

App.propTypes = {}

export default App
