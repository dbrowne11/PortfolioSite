import { Paper, Typography } from "@mui/material";
import theme from "../theme/theme";

export interface BasePaperProps {
    children: React.ReactNode;

}

const BasePaper = (props: BasePaperProps) => {
    return (
        
            <Paper sx={{
                padding:2,
                bgcolor: theme.palette.background.paper
                
            }}>
                {props.children}
            </Paper>
    
    );
};

export default BasePaper;