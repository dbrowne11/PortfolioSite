import React from "react";
import headerStyles from "../styles/Header.module.css";
import { styled, alpha } from "@mui/material/styles";
import Nav from "../components/Navigation";
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Grid,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import theme from "../theme/theme";

export interface FocusProps {
    children: React.ReactNode;
}

const FocusArea = (props: FocusProps) => {
    const hoverSX = {
        color: 'primary.main',
        border: 1,
        '&:hover':{
            color: 'primary.contrastText',
            backgroundColor: 'background.paper',
            border: 1

        },
    }
    return (
        <Box sx={hoverSX}>
            <Box color="primary.main">
                {props.children}
            </Box>
        </Box>
    )
    }
export default FocusArea;