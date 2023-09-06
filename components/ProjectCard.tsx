import { Card, CardActionArea, CardMedia, Modal, Typography, Paper, Button, Grid, Box} from "@mui/material";
import Image from "next/image";
import theme from "../theme/theme";
import React, { useState } from "react";

export interface ProjectCardProps {
    title: string;
    media: string;
    summary: string;
    open: boolean;
    children: React.ReactElement
}

const ProjectCard = (props: ProjectCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen =() => setIsOpen(true);
    const handleClose = () => {setIsOpen(false);}
    return (
        
      <Card  sx={{
        padding:2,
        bgcolor: theme.palette.background.paper,
        height: '100%'
      }}>
        <CardActionArea onClick={handleOpen}>
          <Typography variant="h5" color={theme.palette.primary.main} textAlign={'center'}>
            {props.title}
          </Typography>
          <CardMedia component='img' image={props.media}>
            
          </CardMedia>
          <Typography variant="body2" color={theme.palette.primary.main} marginTop={2} textAlign={'center'}>
            {props.summary}
          </Typography>
        </CardActionArea>
        <Modal open={isOpen} onClose={handleClose} sx={{margin:10}}>
          <Box>
            {props.children}
            {/* <Button onClick={handleClose}>Close</Button> */}
          </Box>
      </Modal>
    </Card>
    
    );
};

export default ProjectCard;