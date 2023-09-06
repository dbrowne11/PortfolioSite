import React, { useState } from "react";
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
  Modal,
  Grid,
  Button,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from "next/link";
import theme from "../theme/theme";
import FocusArea from "./FocusArea";
import ContactForm from "./ContactForm";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {setIsOpen(false);}

  return (
    <Box bgcolor={theme.palette.background.paper} >
      <Grid container spacing={2} padding={2} alignItems={"flex-end"}>
          <Grid item xs={12} >
            <FocusArea>
              <Link href="#" onClick={handleOpen}>
                <Typography variant="h4" textAlign={'center'}>
                  Contact Me
                </Typography>
              </Link>
            </FocusArea>
            <Modal open={isOpen} onClose={handleClose} >
              <ContactForm/>
            </Modal>
          </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
