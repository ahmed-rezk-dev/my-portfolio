import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styled from "styled-components";

export const Side = styled.div`
	background-color: ${props => props.theme.colors.sidebar};
	min-height: 100vh;
	width: 135px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-color: #333;
	border-width: 2px;
	border-style: solid;
	border-radius: 0px 4px 41px 16px/9px 21px 6px 0px;
`;

const Sidebar = props => {
	return (
		<Side>
			<ul style={{ listStyleType: "none", padding: 0 }}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/bubblegum">Bubblegum</Link>
				</li>
				<li>
					<Link to="/shoelaces">Shoelaces</Link>
				</li>
			</ul>
		</Side>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
