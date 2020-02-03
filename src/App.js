import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import routes from "./routes";
import { Container } from "react-bootstrap";
import styled, { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

export const AppContainer = styled.div`
	display: flex;
	height: 100%;
`;

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Router>
					<AppContainer>
						<Sidebar />
						<Container>
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
					</AppContainer>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
