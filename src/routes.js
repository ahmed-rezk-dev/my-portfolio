import React from "react";

const routes = [
	{
		path: "/",
		exact: true,
		sidebar: () => <div>home!</div>,
		main: () => <h2>Home</h2>
	},
	{
		path: "/about",
		sidebar: () => <div>About!</div>,
		main: () => <h2>About</h2>
	},
	{
		path: "/portfolio",
		sidebar: () => <div>portfolio!</div>,
		main: () => <h2>Portfolio</h2>
	},
	{
		path: "/skills",
		sidebar: () => <div>skills!</div>,
		main: () => <h2>Skills</h2>
	},
	{
		path: "/contact",
		sidebar: () => <div>contact!</div>,
		main: () => <h2>Contact</h2>
	}
];

export default routes;
