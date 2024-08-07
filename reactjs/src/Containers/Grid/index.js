import React, { useEffect, useState } from "react"
import { config } from "react-spring/renderprops"
import { Col, Row } from "react-bootstrap"
import Grid from "./Grid"
import data from "./data"
// import "./styles.css"
import Cell from "./Cell"
import PageInfoText from "../../Components/PageInfoText"

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
			<Row>
				<Col md={12}>
					<div className="mt-3">
						<PageInfoText text={text} />
					</div>
				</Col>
			</Row>
			<Grid
				className="grid"
				data={data}
				keys={(d) => d.name}
				heights={200}
				columns={state.columns}
				margin={30}
				lockScroll
				closeDelay={400}
				config={config.default}
			>
				{(data, active, toggle) => (
					<Cell {...data} active={active} toggle={toggle} />
				)}
			</Grid>
		</>
	)
}
export default App
