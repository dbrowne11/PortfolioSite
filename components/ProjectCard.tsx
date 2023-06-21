import { Card, CardActionArea, Modal, Typography, Paper, Button, Grid, Box} from "@mui/material";
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
    const [isOpen, setIsOpen] = useState(false)
    return (
        
      <Card  sx={{
        padding:2,
        bgcolor: theme.palette.background.paper
      }}>
        <CardActionArea onClick={() => setIsOpen(true)}>
          <Typography variant="h5" color={theme.palette.primary.main}>
            {props.title}
          </Typography>
          <Image src={props.media} width={250} height={250} alt={"training gif"}></Image>
          <Typography variant="body2" color={theme.palette.primary.main}>
            {props.summary}
          </Typography>
        </CardActionArea>
        <Modal open={isOpen} sx={{margin:10}}>
          <Box>
            {props.children}
            <Button onClick={() => setIsOpen(false)}>Close</Button>
          </Box>
          {/* <Paper sx={{padding:6}}>
            <Grid container>  
              <Grid item xs={12}>
                <Typography variant="h3" color={theme.palette.primary.contrastText} align={"center"}>
                  {props.title}
                </Typography>
                </Grid>
                <Grid item justifyItems={'center'}>
                  <Button onClick={() => setIsOpen(false)}>Close</Button>

                </Grid>
            </Grid>
          </Paper> */}
      </Modal>
    </Card>
    
    );
};

export default ProjectCard;