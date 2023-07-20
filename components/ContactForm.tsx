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
    let formState = {"name": null, "subject": null, "message": null, "email": null, "date": null};
    
    // const [name, setName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [message, setMessage] = React.useState('');
    // const [subject, setSebject] = React.useState('');

    const [nameValid, setNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [subjectValid, setSubjectValid] = useState(true);

    const validateSubject = (event: any) => {
        if (validateNotEmpty(event)) {
            formState.subject = event.target.value;
            setSubjectValid(true);
        } else {
            setSubjectValid(false);
        }
    };

    const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const mail_re = /[a-z1-9]+@[a-z1-9]+\.[a-z1-9]+/i
        console.log(event.target.value)
        const found = event.target.value.match(mail_re)
        if (found) {
            formState.email = event.target.value;
            setEmailValid(true);
        } else {
            setEmailValid(false);
            return false;
        }
    };

    const validateName = (event: any) => {
        formState.name = event.target.value;
    };

    const validateMessage = (event: any) => {
        if (validateNotEmpty(event)) {
            formState.message = event.target.value;
            setMessageValid(true);
        } else {
            setMessageValid(false);
        }
    };

    const validateNotEmpty = (event: any) => {
        return event.target.value.length > 0;
    }

    const sendMessage = async (event: any) => {
        if (formState.subject != null && formState.email != null && formState.message != null) {
            formState.date = "2023-07-12T23:33:00-07:00";
            //console.log(JSON.stringify(formState))

            try {
                console.log("requesting api")
                const response = await fetch("/api/message/", {
                    method: "POST",
                    body: JSON.stringify(formState),
                    headers: {"Content-Type": "application/json", 'Accept': 'application/json',}})
                //console.log(response);
                var data = await response.json();
                alert("Message Sent");
                //console.log(data)

            }catch (e) {
                console.log(e)
                alert("Message failed to send")
            };
        }
    }

    return (
      <Paper  sx={{
        padding:2,
        bgcolor: 'secondary.light'
      }}>
        <Grid container padding={2}>
            <Grid item xs={12}>
                <Typography variant="h6" color='secondary.main' textAlign={'center'}>
                    Contact me through email at danielsbrowne11@gmail.com or fill out the form below
                </Typography>
            </Grid>
            <Grid item xs={12} marginBottom={1} onChange={validateName}>
                <TextField label="Your Name" name="Your Name" color="secondary" fullWidth={true}/>
            </Grid>
            <Grid item xs={12} marginBottom={1} >
                <TextField label="Email" name="Your Email" color="secondary" 
                fullWidth={true} required={true} type='email' onChange={validateEmail} error={!emailValid}/>
            </Grid>
            <Grid item xs={12} marginBottom={1} onChange={validateSubject}>
                <TextField label="Subject" name="Subject" color="secondary" fullWidth={true} required={true} error={!subjectValid}/>    
            </Grid>
            <Grid item xs={12} marginBottom={1} onChange={validateMessage}>
                <TextField label="Message" color="secondary" multiline={true} rows={4} fullWidth={true} required={true} error={!messageValid}/>
            </Grid>

            <Grid item xs={12} textAlign={'center'}>
                <Button variant="contained" onClick={sendMessage} sx={{color:"secondary.main"}}>
                    Send Message 
                </Button>
            </Grid>



        </Grid>
    </Paper>
    
    );
};

export default ContactForm;