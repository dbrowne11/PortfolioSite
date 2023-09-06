import React, { Children } from "react";
import { Container } from "@mui/material";
import Nav from "../components/Navigation";
import Header from "../components/Header";


export interface LayoutProps {
	children: React.ReactNode;
}

const DefaultLayout = (props: LayoutProps) => {
	return (
		<div >
			{props.children}
		</div>
	);
};



export default DefaultLayout;
