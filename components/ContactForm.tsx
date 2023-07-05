import { Card, CardActionArea, Modal, Typography, Paper, Button, Grid, Box, FormControl, TextField, FilledInput} from "@mui/material";
import Image from "next/image";
import theme from "../theme/theme";
import React, { useState } from "react";
import Link from "next/link";
import { AlignHorizontalLeft } from "@mui/icons-material";

export interface ContactFormProps {
    close_fn: (value: React.SetStateAction<boolean>) => void
}

const ContactForm = () => {

    return (
      <Paper  sx={{
        padding:2,
        bgcolor: 'secondary.light'
      }}>
        <Grid container padding={2}>
            <Grid item xs={12}>
                <Typography variant="h6" color='secondary.main' textAlign={'center'}>
                    Contact me through email at danielsbrowne11@gmail.com
                </Typography>
            </Grid>
            <Grid item xs={12} marginBottom={1}>
                <TextField label="Your Name" name="Your Name" color="secondary" fullWidth={true}/>
            </Grid>
            <Grid item xs={12} marginBottom={1}>
                <TextField label="Subject" name="Subject" color="secondary" fullWidth={true}/>    
            </Grid>
            <Grid item xs={12} marginBottom={1}>
                <TextField label="Message" color="secondary" multiline={true} rows={4} fullWidth={true}/>
            </Grid>

            <Grid item xs={12} textAlign={'center'}>
                <Button variant="contained" sx={{color:"secondary.main"}}>
                    Send Message 
                </Button>
                <p>
                Send not currently implemented, please use email instead.
                </p>
            </Grid>



        </Grid>
    </Paper>
    
    );
};

export default ContactForm;