import React from "react"
import Home from "./Containers/Home"
import About from "./Containers/About"
import Skills from "./Containers/Skills"
import Contact from "./Containers/Contact"
import Portfolio from "./Containers/Portfolio"
// import Gird from "./Containers/Grid/index"

const routes = [
	{
		path: "/",
		exact: true,
		sidebar: () => <div>home!</div>,
		main: (props) => <Home {...props} />
	},
	{
		path: "/about",
		sidebar: () => <div>About!</div>,
		main: (props) => <About {...props} />
	},
	{
		path: "/portfolio",
		sidebar: () => <div>portfolio!</div>,
		main: (props) => <Portfolio {...props} />
		// main: (props) => <Gird {...props} />
	},
	{
		path: "/skills",
		sidebar: () => <div>skills!</div>,
		main: (props) => <Skills {...props} />
	},
	{
		path: "/contact",
		sidebar: () => <div>contact!</div>,
		main: (props) => <Contact {...props} />
	}
]

export default routes
