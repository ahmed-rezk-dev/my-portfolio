"use client"
import "../public/bootstrap.min.css"
import "../public/font.css"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "@/Components/GlobalStyle"
import { AppContainer } from "@/Components/app-container"
import { Container } from "react-bootstrap"
import Sidebar from "@/Components/sidebar"
import { useState } from "react"
import theme from "@/public/theme"
import darkTheme from "@/public/darkTheme"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isLightTheme, setIsLightTheme] = useState(true)
	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={isLightTheme ? theme : darkTheme}>
					<GlobalStyle />
					<AppContainer>
						<Sidebar />
						<Container fluid>{children}</Container>
					</AppContainer>
				</ThemeProvider>
			</body>
		</html>
	)
}
