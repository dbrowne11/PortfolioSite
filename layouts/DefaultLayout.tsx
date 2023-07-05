import React, { Children } from "react";
import { Container } from "@mui/material";
import Nav from "../components/Navigation";
import Header from "../components/Header";


export interface LayoutProps {
	children: React.ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
	return (
		<div>
			<Header/>
			<Container component="main" sx={{  }}>
				{props.children}
			</Container>

		</div>
	);
};

export default DefaultLayout;
