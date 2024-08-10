"use client"
import "./globals.css"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "@/Components/GlobalStyle"
import { AppContainer } from "@/Components/app-container"
import { Container } from "react-bootstrap"
import Sidebar from "@/Components/sidebar"
import { useState } from "react"
import theme from "@/public/theme"
import darkTheme from "@/public/darkTheme"
import useEvent from "react-use-event-hook"
import Navbar from "@/Components/navbar"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isLightTheme, setIsLightTheme] = useState(true)

	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

	const toggleSidebarHandler = useEvent(() => {
		setIsSidebarOpen(!isSidebarOpen)
	})

	const toggleThemeHandler = () => {
		setIsLightTheme(!isLightTheme)
	}

	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={isLightTheme ? theme : darkTheme}>
					<GlobalStyle />
					<AppContainer>
						<Sidebar isSidebarOpen={isSidebarOpen} />
						<Container fluid>
							<Navbar
								isSidebarOpen={isSidebarOpen}
								toggleSidebar={toggleSidebarHandler}
								isLightTheme={isLightTheme}
								toggleTheme={toggleThemeHandler}
							/>
							{children}
						</Container>
					</AppContainer>
				</ThemeProvider>
			</body>
		</html>
	)
}
