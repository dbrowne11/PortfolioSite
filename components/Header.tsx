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
  const handleOpen =() => setIsOpen(true);
  const handleClose = () => {setIsOpen(false);}

  return (
    <Box bgcolor={theme.palette.background.paper}>
      <Grid container spacing={2} padding={2}>
          <Grid item xs={3}>
              <FocusArea>
                <Link href='/'>
                  <Typography variant="h4" textAlign={'center'}>
                    Home
                  </Typography>
                </Link>
              </FocusArea>
          </Grid>
          <Grid item xs={3}>
            {/* <FocusArea>
              <Link href='/projects'>
                <Typography variant="h4" textAlign={'center'}>
                  My Projects
                </Typography>
              </Link>
            </FocusArea> */}
          </Grid>
          <Grid item xs={3}>
            {/* <FocusArea>
              <Link href='/specializations'>
                <Typography variant="h4" textAlign={'center'}>
                  Experiences
                </Typography>
              </Link>
            </FocusArea> */}
          </Grid>
          <Grid item xs={3}>
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
