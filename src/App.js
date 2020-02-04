import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Keyframes, animated } from "react-spring/renderprops"
import { Container } from "react-bootstrap"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { config } from "react-spring"
import CustomSidebar from "./Components/CustomSidebar"
import routes from "./routes"
import theme from "./assets/theme"
import darkTheme from "./assets/darkTheme"
import Navbar from "./Components/Navbar"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.colors.bodyColor};
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
	}
})

function App() {
	const [open, setOpen] = useState(undefined)
	const [thm, setThm] = useState(true)
	return (
		<div className="App">
			<ThemeProvider theme={thm ? theme : darkTheme}>
				<GlobalStyle />
				<AppContainer>
					<Router>
						<Menu
							config={config.gentle}
							unique
							state={open === undefined ? "peek" : open ? "in" : "out"}
						>
							{(props) => (
								<animated.div style={props} className="mainCustomContainer">
									<CustomSidebar open={open} />
								</animated.div>
							)}
						</Menu>
						<Container fluid open={open}>
							<Navbar setOpen={setOpen} open={open} setThm={setThm} thm={thm} />
							<Switch>
								{routes.map((route, index) => (
									<Route
										key={index}
										path={route.path}
										exact={route.exact}
										children={<route.main />}
									/>
								))}
							</Switch>
						</Container>
					</Router>
				</AppContainer>
			</ThemeProvider>
		</div>
	)
}

export default App
