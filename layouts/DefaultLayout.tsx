import React, { Children } from "react";
import { Container } from "@mui/material";
import Nav from "../components/Navigation";


export interface LayoutProps {
	children: React.ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
	return (
		<div>
			<Nav/>
			<Container component="main" sx={{  }}>
				{props.children}
			</Container>

		</div>
	);
};

export default DefaultLayout;
