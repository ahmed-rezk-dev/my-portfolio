import React, { useState, useMemo, useCallback } from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import PageInfoText from "../../Components/PageInfoText"
import Details from "./Details"
import Data from "./data"

const text = <span>Portfolio</span>

// const isSM = window.innerWidth < 576
// const isMd = window.innerWidth < 769
// const isLd = window.innerWidth < 1200

function App() {
	const [stateType, setStateType] = useState(null)
	const [detailsData, setDetailsData] = useState({})

	const toggle = useCallback(
		(i) => {
			setDetailsData(i)
			setStateType(!stateType)
		},
		[stateType]
	)

	const DetailsItems = useMemo(
		() =>
			Data.map((i, k) => (
				<Col md={3} onClick={() => toggle(i)} key={k.toString()} className="mb-5">
					<Card
						className="d-flex align-items-center justify-content-center"
						style={{ minHeight: "190px", cursor: "pointer" }}
					>
						<Image thumbnail src={i.logo} />
					</Card>
				</Col>
			)),
		[toggle]
	)
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
				<Row className="align-items-center">{DetailsItems}</Row>
			</Container>
			<Details
				stateType={stateType}
				detailsData={detailsData}
				setStateType={setStateType}
			/>
		</>
	)
}

App.propTypes = {}

export default App
