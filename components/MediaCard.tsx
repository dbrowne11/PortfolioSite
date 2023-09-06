import { Box, Card, CardMedia, Typography } from "@mui/material";
import theme from "../theme/theme";
import Image, { StaticImageData } from "next/image";


export interface MediaCardProps {
    title: string;
    media: string
    caption: string;


}

const MediaCard = (props: MediaCardProps) => {
    return (
        
            <Card variant="outlined" sx={{
                bgcolor: theme.palette.background.paper,
                borderRadius: 4,
                border: 1,
                padding: 1
            }}>
                <Typography variant="h5" color={theme.palette.primary.main} align="center">
                    {props.title}
                </Typography>
                <Box alignItems={'right'}>
                    <Image src={props.media} width={250} height={250} alt={"Known issue of images not loading on some browsers, tested on Chrome"}></Image>

                </Box>
                <Typography variant="body2" color={theme.palette.primary.main} align="left">
                    {props.caption}
                </Typography>
            </Card>
    
    );
};

export default MediaCard;