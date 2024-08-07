import React from "react"
import { Spring } from "react-spring/renderprops"

export default function CustomSpring({ time, children }) {
	return (
		<Spring
			from={{ opacity: 0, rotation: "180deg", scale: 0.5 }}
			to={{ opacity: 1, rotation: "0deg", scale: 1 }}
			delay={time}
		>
			{(props) => <div style={props}>{children}</div>}
		</Spring>
	)
}
