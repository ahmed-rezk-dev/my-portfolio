import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { config } from "react-spring/renderprops"
import data from "./data"
import Grid from "./Grid"
import PageInfoText from "../../Components/PageInfoText"
import PortfolioCell from "../../Components/PortfolioCell"
import "../Grid/styles.css"

const text = <span>Portfolio</span>

const isSM = window.innerWidth < 576
const isMd = window.innerWidth < 769
const isLd = window.innerWidth < 1200

function App() {
	const [state, setState] = useState({ columns: 4, margin: 40, heights: 200 })
	useEffect(() => {
		if (isLd) {
			setState({ columns: 3, margin: 30, heights: 200 })
		}
		if (isMd) {
			setState({ columns: 2, margin: 25, heights: 200 })
		}
		if (isSM) {
			setState({ columns: 1, margin: 15, heights: 200 })
		}
	}, [])
	return (
		<>
			<Container>
				<Row className="align-items-center">
					<Col md={12}>
						<div className="mt-3">
							<PageInfoText text={text} />
						</div>
					</Col>
				</Row>
			</Container>
			<Grid
				className="grid"
				occupySpace
				data={data}
				keys={(d) => d.name}
				heights={state.heights}
				width={300}
				columns={state.columns}
				margin={state.margin}
				lockScroll={false}
				closeDelay={400}
				config={config.default}
			>
				{(row, maximized, toggle) => (
					<PortfolioCell {...row} maximized={maximized} toggle={toggle} />
				)}
			</Grid>
		</>
	)
}

App.propTypes = {}

export default App
