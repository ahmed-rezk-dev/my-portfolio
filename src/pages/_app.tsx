import { AppContainer } from "@/Components/app-container"
import GlobalStyle from "@/Components/GlobalStyle"
import darkTheme from "@/public/darkTheme"
import theme from "@/public/theme"
import type { AppProps } from "next/app"
import { useState } from "react"
import { Container } from "react-bootstrap"
import { ThemeProvider } from "styled-components"

export default function App({ Component, pageProps }: AppProps) {
	const [thm, setThm] = useState(true)
	return (
		<ThemeProvider theme={thm ? theme : darkTheme}>
			<GlobalStyle />
			<AppContainer>
				<Container fluid>
					<Component {...pageProps} />
				</Container>
			</AppContainer>
		</ThemeProvider>
	)
}
