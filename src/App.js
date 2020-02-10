import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Keyframes, animated } from "react-spring/renderprops"
import { Container } from "react-bootstrap"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { config } from "react-spring"
import { Scrollbars } from "react-custom-scrollbars"
import CustomSidebar from "./Components/CustomSidebar"
import routes from "./routes"
import theme from "./assets/theme"
import darkTheme from "./assets/darkTheme"
import Navbar from "./Components/Navbar"

const GlobalStyle = createGlobalStyle`
  body {
	color: ${(props) => props.theme.colors.bodyColor};
	overflow: hidden;
  }
  .btn-outline-secondary {
	color: ${(props) => props.theme.colors.btnColor};
	border-color: ${(props) => props.theme.colors.btnColor}
  }
`

export const AppContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: space-around;
	flex-direction: flex;
	background-color: ${(props) => props.theme.colors.AppContainer};
	.mainCustomContainer {
		overflow: hidden;
		width: 160px;
	}
`

const Menu = Keyframes.Spring({
	peek: [
		{
			transform: "translateX(0%)",
			from: { transform: "translateX(-100%)" },
			delay: 0,
			width: "160px"
		}
	],
	in: async (next) => {
		await next({
			width: "160px",
			delay: 0
		})
		await next({
			transform: "translateX(0%)",
			from: { transform: "translateX(-100%)" },
			delay: 0
		})
	},
	out: async (next) => {
		await next({
			transform: "translateX(-100%)",
			from: { transform: "translateX(0%)" },
			delay: 0
		})
		await next({
			width: "0px",
			delay: 0
		})
	},
	closed: async (next) => {
		await next({
			transform: "translateX(-110%)",
			from: { transform: "translateX(-110%)" },
			width: "0px",
			delay: 0
		})
	}
})

const isMobile = window.innerWidth < 480

function App() {
	const [open, setOpen] = useState(isMobile ? false : undefined)
	const [thm, setThm] = useState(true)
	const [stateType, setStateType] = useState("peek")
	useEffect(() => {
		if (open === undefined) {
			setStateType("peek")
		} else if (open) {
			setStateType("in")
		} else {
			setStateType("out")
		}
	}, [open])
	return (
		<div className="App">
			<ThemeProvider theme={thm ? theme : darkTheme}>
				<GlobalStyle />
				<AppContainer>
					<Router>
						<Menu config={config.gentle} unique state={stateType}>
							{(props) => (
								<animated.div style={props} className="mainCustomContainer">
									<CustomSidebar open={open} />
								</animated.div>
							)}
						</Menu>
						<Scrollbars style={{ width: "100%", height: "auto" }}>
							<Container fluid open={open}>
								<Navbar setOpen={setOpen} open={open} setThm={setThm} thm={thm} />
								<Switch>
									{routes.map((route, index) => (
										<Route
											key={index.toString()}
											path={route.path}
											exact={route.exact}
											// eslint-disable-next-line react/no-children-prop
											children={<route.main thm={thm} />}
										/>
									))}
								</Switch>
							</Container>
						</Scrollbars>
					</Router>
				</AppContainer>
			</ThemeProvider>
		</div>
	)
}

export default App
