import { Card, CardActionArea, Link, Typography, Dialog, Paper } from "@mui/material";
import theme from "../theme/theme";
import React from "react";

export interface ProjectPaperProps {

    children: React.ReactNode;

}

const ProjectPaper = (props: ProjectPaperProps) => {
    return (
        
            <Paper color={theme.palette.background.paper}
                >
                    {props.children}
            </Paper>
    
    );
};

export default ProjectPaper;