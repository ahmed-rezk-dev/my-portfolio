import React, { useState, useCallback, useLayoutEffect } from "react"

import { Transition, Trail, animated } from "react-spring/renderprops"

const getWidth = window.innerWidth - 50
const isSM = window.innerWidth < 576
export class Slug extends React.PureComponent {
	render() {
		const {
			children,
			from = { opacity: 0, transform: "translate3d(0,40px,0)" },
			to = { opacity: 1, transform: "translate3d(0,0px,0)" },
			...rest
		} = this.props
		const result = React.Children.map(children, (child) => (styles) => {
			const Component = animated[child.type] || animated(child.type)
			const props = {
				...child.props,
				style: {
					willChange: "opacity, transform",
					...child.props.style,
					...styles
				}
			}
			return <Component {...props} />
		})
		return (
			<Trail
				native
				{...rest}
				items={result}
				keys={result.map((_, i) => i)}
				from={from}
				to={to}
				children={(child) => child}
			/>
		)
	}
}

export class Fade extends React.PureComponent {
	render() {
		const {
			children,
			show,
			from = { opacity: 0 },
			enter = { opacity: 1 },
			leave = { opacity: 0 },
			...rest
		} = this.props

		const { type, props } = children
		const Component = animated[type] || animated(type)
		const result = (styles) => {
			const newProps = {
				...props,
				style: {
					willChange: "opacity, transform",
					...props.style,
					...styles
				}
			}
			return <Component {...newProps} />
		}

		return (
			<Transition
				native
				items={show}
				{...rest}
				from={from}
				enter={enter}
				leave={leave}
				children={(show) => show && result}
			/>
		)
	}
}

function getDimensionObject(node) {
	const rect = node.getBoundingClientRect()
	return {
		width: isSM ? getWidth : rect.width,
		height: isSM ? 500 : rect.height,
		top: "x" in rect ? rect.x : rect.top,
		left: "y" in rect ? rect.y : rect.left,
		x: "x" in rect ? rect.x : rect.left,
		y: "y" in rect ? rect.y : rect.top,
		right: rect.right,
		bottom: rect.bottom
	}
}

export function useDimensions({ liveMeasure = true } = {}) {
	const [dimensions, setDimensions] = useState({})
	const [node, setNode] = useState(null)

	const ref = useCallback((node) => {
		setNode(node)
	}, [])

	useLayoutEffect(() => {
		if (node) {
			const measure = () =>
				window.requestAnimationFrame(() => setDimensions(getDimensionObject(node)))
			measure()

			if (liveMeasure) {
				window.addEventListener("resize", measure)
				window.addEventListener("scroll", measure)

				return () => {
					window.removeEventListener("resize", measure)
					window.removeEventListener("scroll", measure)
				}
			}
		}
	}, [liveMeasure, node])

	return [ref, dimensions, node]
}
