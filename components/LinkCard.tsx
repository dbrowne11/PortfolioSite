import { Card, CardActionArea, Link, Typography } from "@mui/material";
import theme from "../theme/theme";

export interface LinkCardProps {
    link: string;
    title: string;
    sentence: string

}

const LinkCard = (props: LinkCardProps) => {
    return (
        
            <Card  sx={{
                padding:2,
                bgcolor: theme.palette.background.paper
            }}>
                <CardActionArea href={props.link}>
                    <Typography variant="h4" align={"center"} color="primary.contrastText">
                        {props.title}
                    </Typography>
                    <Typography variant="body1" color="primary.main">
                        {props.sentence}
                    </Typography>
                </CardActionArea>
            </Card>
    
    );
};

export default LinkCard;