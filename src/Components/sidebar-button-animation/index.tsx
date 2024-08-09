import { ReactNode } from "react"
import { useSpring, animated } from "@react-spring/web"

export default function SidebarButtonAnimation({
	time,
	children,
}: {
	time: number
	children: ReactNode
}) {
	const [props, _api] = useSpring(
		() => ({
			from: { opacity: 1, rotation: "180deg", scale: 0.5 },
			to: { opacity: 1, rotation: "0deg", scale: 1 },
			delay: { time },
		}),
		[],
	)

	return <animated.div style={props}>{children}</animated.div>
}
