import { createTheme } from "@mui/material/styles";
import { blue, lightBlue, orange, red } from "@mui/material/colors";

// Color Palette
//  Night ##2A282A       Primary Background color
//  Jet   #3E3C3E       Light background
//  Shamrock #109648
//   Mine 68B684
//   F9DEC9


// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: "Arial",
		h1: {
			fontSize: "2.5rem",
			textTransform: "uppercase",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h3: {
			fontSize: "1.8rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h4: {
			fontSize: "1.6rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h5: {
			fontSize: "1.2rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		h6: {
			fontSize: "1rem",
			textTransform: "uppercase",
			fontWeight: 500,
		},
		body1: {
			fontSize: "1rem",
			
		}
	},
	palette: {
		primary: {
			
			main: "#F7F0F0",
			contrastText: "#18A999",
		},
        background: {
            default: "#2A282A",
            paper: "#3E3C3E"
        },
		secondary: {
			light: "#ffad42",
			main: "#ffad42",
			dark: "#bb4d00",
			contrastText: "#000",
		},
		error: {
			main: red.A400,
		},
	},
});

export default theme;
