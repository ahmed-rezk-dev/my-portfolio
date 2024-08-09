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
import SidebarButton from "@/Components/sidebar-button"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const [isLightTheme, setIsLightTheme] = useState(true)

	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)

	const toggleSidebarHandler = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	// TODO: Them up the theme toggle
	const toggleThemeHandler = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<html lang="en">
			<body>
				<ThemeProvider theme={isLightTheme ? theme : darkTheme}>
					<GlobalStyle />
					<AppContainer>
						<Sidebar isSidebarOpen={isSidebarOpen} />
						<SidebarButton
							isSidebarOpen={isSidebarOpen}
							toggleSidebar={toggleSidebarHandler}
							isLightTheme={isLightTheme}
							toggleTheme={toggleSidebarHandler}
						/>
						<Container fluid>{children}</Container>
					</AppContainer>
				</ThemeProvider>
			</body>
		</html>
	)
}
