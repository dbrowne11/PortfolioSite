import { Grid, Typography } from "@mui/material";
import BasePaper from "../components/BasePaper";
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
        <BasePaper>
            <Grid container>
                <Grid item md={8}>
                    <Typography variant='h2' color='primary.main' textAlign={'right'}>
                        Contact Me
                    </Typography>
                </Grid>
                <Grid item md={4} textAlign={'right'}>
                    <Typography variant='body1' color='primary.main'>
                        email: danielsbrowne11@gmail.com
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography color='primary.main'>
                        Feel free to contact me about computer science, mathematics, or statistics tutoring, freelance propositions, or if you have other questions or comments.
                    </Typography>
                </Grid>

            </Grid>
            <ContactForm></ContactForm>
        </BasePaper>
        </div>
    )}