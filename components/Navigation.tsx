import React from "react";
import { Button, ThemeProvider } from "@mui/material";
import Link from "next/link";
import { blue } from "@mui/material/colors";
import theme from "../theme/theme";

const Nav = () => {
	return (
		<div>
				<Link href="/" passHref>
					<Button size="large" sx={{color: "primary.main" }}>
						Home
					</Button>
				</Link>
				<Link href="/contact" passHref>
					<Button size="large" sx={{color: "primary.main"}}>
						Contact Me
					</Button>
				</Link>
				<Link href="/projects" passHref>
					<Button size="large" sx={{color: "primary.main"}}>
						Projects
					</Button>
				</Link>
				<Link href="/research" passHref>
					<Button size="large" sx={{color: "secondary.contrastText"}}>
						Research
					</Button>
				</Link>
				<Link href="/aboutme" passHref>
					<Button size="large" sx={{color: "secondary.contrastText"}}>
						About me
					</Button>
				</Link>
				{/* <Link href="/blog" passHref>
					<Button size="large" sx={{color: "secondary.contrastText"}}>
						Blog
					</Button>
				</Link> */}
		</div>
	);
};

export default Nav;
