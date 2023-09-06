import { Box, Grid, Modal, Paper, Typography, Tabs, Tab, Button } from "@mui/material";
import theme from "../theme/theme";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Components.module.css';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowForwardIos';

export interface ProjectDisplayProps {

}

const ProjectDisplay = (props: ProjectDisplayProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {setIsOpen(false);}
    
    return (
        <Box height={'100vh'} width={'100vh'} >
            <Grid container>
                <Grid item xs={4}>
                    <ArrowForwardIosIcon color='primary'></ArrowForwardIosIcon>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h1">Hello World</Typography>
                </Grid>
                <Grid item xs={4}>
                    <ArrowBackIosIcon color='primary'/>
                </Grid>
            </Grid>
        </Box>

        // <Grid container> 
        //     <Grid item xs={12} md={6}>
        //         <img className={styles.project_img}
        //         src={props.image_src} 
        //         alt='Project Image Unavailable'
        //         height={100} width={100}
        //         />
        //     </Grid>
        //     <Grid item xs={12} md={6}>
        //         <Tabs>
        //             <Tab label='Features'/>
        //             <Tab label='Technologies'/>
        //             <Tab label='Challenges'/>
                    
        //         </Tabs>
        //     </Grid>
        // </Grid>
            

    
    );
};

export default ProjectDisplay;