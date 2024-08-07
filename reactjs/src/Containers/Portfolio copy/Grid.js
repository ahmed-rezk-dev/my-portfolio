import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import { useTransition, animated, interpolate } from "react-spring"
import { useDimensions } from "./helpers"

const isSM = window.innerWidth < 576
// const isMd = window.innerWidth < 769
// const isLd = window.innerWidth < 1200

// const openAni = isSM ? -120 : -230
const SmHeight = window.innerHeight - 85

const styles = {
	outer: { position: "relative", width: "100%", height: "100%" },
	inner: {
		position: "relative",
		width: "100%",
		minHeight: "100%"
	},
	cell: {
		position: "absolute",
		willChange: "transform, width, height, opacity"
	}
}
const Grid = ({
	children,
	columns,
	margin,
	occupySpace,
	config,
	data,
	keys,
	heights,
	closeDelay,
	lockScroll,
	...restProps
}) => {
	const [outerRef, outerDimensions, outerNode] = useDimensions()
	const [innerRef, innerDimensions] = useDimensions()

	const refClicked = useRef(false)

	const [state, setState] = useState({ open: null, lastOpen: null })

	const toggle = (key) => {
		setState({
			lastOpen: state.open,
			open: state.open === key ? undefined : key
		})
		refClicked.current = true
	}

	const update = ({ key, x, y, width, height }) => {
		const open = state.open === key
		const result = {
			opacity: state.open && !open ? 0 : 1,
			x: open ? outerNode.scrollLeft : Math.round(x),
			y: open ? 0 : Math.round(y),
			width: open ? innerDimensions.width : Math.round(width),
			height: open ? (isSM ? SmHeight : outerDimensions.height) : height
		}
		return result
	}

	// pre render
	let column = 0
	const columnHeights = new Array(columns).fill(0)

	const displayData = data.map((child) => {
		const index = occupySpace
			? columnHeights.indexOf(Math.min(...columnHeights))
			: (column += 1 % columns)
		const cellWidth =
			innerDimensions.width / columns - margin / (1 - 1 / (columns + 1))
		const left = cellWidth * index
		const offset = (index + 1) * margin
		const top = columnHeights[index] + margin
		const height = typeof heights === "function" ? heights(child) : heights
		columnHeights[index] += height + margin
		return {
			x: margin ? left + offset : left,
			y: top,
			width: cellWidth,
			height,
			key: keys(child),
			object: child
		}
	})

	const height = Math.max(...columnHeights) + margin

	const transitions = useTransition(
		innerDimensions.width ? displayData : [],
		(d) => d.key,
		{
			from: { opacity: 0 },
			leave: { opacity: 0 },
			enter: update,
			update,
			config: {
				...config,
				delay: refClicked.current && !state.open ? closeDelay : 0
			}
		}
	)
	return (
		<div ref={outerRef} style={{ ...styles.outer, ...restProps.style }}>
			<div ref={innerRef} style={{ ...styles.inner, height }}>
				{transitions.map(({ item, props: { x, y, ...rest }, key }) => (
					<animated.div
						key={item.key}
						style={{
							...styles.cell,
							...rest,
							zIndex:
								state.lastOpen === item.key || state.open === item.key ? 1000 : key,
							transform: interpolate(
								[x, y],
								// eslint-disable-next-line no-shadow
								(x, y) => `translate3d(${x}px,${y}px, 0)`
							)
						}}
					>
						{children(item.object, state.open === item.key, () => toggle(item.key))}
					</animated.div>
				))}
			</div>
		</div>
	)
}

Grid.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	keys: PropTypes.func.isRequired,
	occupySpace: PropTypes.bool,
	columns: PropTypes.number,
	margin: PropTypes.number,
	heights: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
	lockScroll: PropTypes.bool,
	closeDelay: PropTypes.number,
	config: PropTypes.objectOf(PropTypes.number).isRequired,
	children: PropTypes.func.isRequired
}

Grid.defaultProps = {
	occupySpace: true,
	columns: 3,
	margin: 0,
	heights: 400,
	lockScroll: false,
	closeDelay: 0
}

export default Grid
