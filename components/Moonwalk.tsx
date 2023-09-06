import { Box, Grid, Modal, Paper, Typography, Tabs, Tab, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import theme from "../theme/theme";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from '../styles/Components.module.css';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Opacity } from "@mui/icons-material";
import useWindowSize from "@rooks/use-window-size";

export interface MoonwalkProps {

}

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography color="white">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  

const Moonwalk = (props: MoonwalkProps) => {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
    const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
        return;
        }
        updateDrawerSize();
        setState({ ...state, [anchor]: open });
    };

    const [tabVal, setTabVal] = useState(0);

    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabVal(newValue);
      };
      
    const [drawerWidth, setdrawerWidth] = useState('40vw');
    const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
    function updateDrawerSize() {
        
        if (innerWidth != undefined && innerWidth < 960) {
            setdrawerWidth('100vw');
            return;
        }
        if (innerWidth != undefined && innerWidth > 960) {
            setdrawerWidth('40vw');
            return;
        }
        
    }
    
    
    return (
        <Box height={'100vh'} width={'100vw'}>

            <Drawer anchor="left" open={state['left']}  onClose={toggleDrawer('left', false)}
              PaperProps={{sx: {backgroundColor: 'transparent',  width: drawerWidth,
                backdropFilter: 'blur(5px)'}}}>
                <Typography variant="h1" textAlign={'center'} color='primary'>Skills Refined</Typography>
                <List onClick={toggleDrawer('left', false)}>
                    {(["Unity 3D", "Git", "Robotic Operating System", 
                    "Data Collection", "Data Processing", "Machine Learning", "Virtual Reality Development", 
                    "Technical Communication"] as const).map(
                    (text: string, index: number) => (
                        <ListItemText key={index} sx={{padding: 3, paddingLeft: 1}}>
                            <Typography variant="h6" color={'primary'}>
                                {" ·  ".concat(text)}
                            </Typography></ListItemText>
                        ))}
                </List >
            </Drawer>

            <Drawer anchor="right" open={state['right']} onClose={toggleDrawer('right', false)}
                PaperProps={{sx: {backgroundColor: 'transparent',  width: drawerWidth,
                backdropFilter: 'blur(10px)'}}}>
                {/* <Typography variant="h1" textAlign={'center'} color='primary'>Details</Typography> */}
                <Tabs value={tabVal} onChange={handleTabChange} aria-label="basic tabs example" sx={{paddingTop:2}}>
                    <Tab label="Context" {...a11yProps(0)} sx={{color: "white"}}/>
                    <Tab label="Simulation Features" {...a11yProps(1)} sx={{color: "white"}}/>
                    <Tab label="System Features" {...a11yProps(2)} sx={{color: "white"}}/>
                </Tabs>
                <div onClick={toggleDrawer('right', false)}>

                
                <CustomTabPanel value={tabVal} index={0}>
                    During my time at the University of California, Santa Cruz(UCSC) I held a paid position in which I 
                    developed a lunar exploration simulation for a human robot interaction experiment. I worked closly with 
                    the labs principal investigator, Steve McGuire, and the postdoctoral researcher leading my project.
                    The game tasks were inspired by NASA's Multi-Attribute Task Battery II, and as such fit into the 
                    categories: Tracking, System Monitering, Resource Management, and Communications.  As the sole 
                    developer of the Unity environment, I provided technical context to the early design 
                    discussions.  Alongside the game environment, 3 sensing devices collected various biological datastreams, including 
                    Electrocardiogram (ECG), galvonic skin response, and pupillometric data. We collected and synchronized
                    this data using a message-based ROS environment.   
                    <br/>  <br/>
                    In addition to the core development, as we ran human trials, some issues surfaced.  Two key challenges 
                    were sensors disconnecting and individuals getting simulator sickness.  I worked with my project team 
                    to set up a script to monitor the data broadcasting nodes and ensure immediate detection of any sensor
                    problems.  Handling the simulator sickness came primarily down to ensuring a high framerate, which was 
                    bottlenecked by the data collection logic as roughly 140 messages were prepared and sent per second.  I
                    was able to redirect this work off of the rendering thread to maintain high framerates.  This change
                    reduced our simulation sickness rate by ~67%.
                </CustomTabPanel>
                <CustomTabPanel value={tabVal} index={1}>
                <List>
                    {(["Tracking Task: Antenna rotation to enable communications",
                        "System Monitoring Tasks: Oxygen and Carbon Dioxide (integrated with biosignals)",
                        "Resource Management Tasks: Battery charge, Motor Temperature",
                        "Communications Task: Audio prompts and simulated radio operation",
                        "Game data collection",
                        "Pupillometric data collection",
                        "Tutorial and Survey user interfaces",
                    ] as const).map(
                    (text: string, index: number) => (
                        <ListItemText key={index} sx={{padding: 3, paddingLeft: 1}}>
                            <Typography variant="h6" color={'primary'}>
                                {" ·  ".concat(text)}
                            </Typography>
                        </ListItemText>
                        ))}
                </List >
                </CustomTabPanel>
                <CustomTabPanel value={tabVal} index={2}>
                <List>
                    {(["Socket Connection between Unity (windows) and ROS (linux)",
                        "6-Degree-of-Freedom motion platform integration (SimRacingStudio API)",
                        "SRanipal raw pupillometry collection",
                        "Pupillometry feature extraction",
                        "Random Forest Classifier to validate experimental results"
                    ] as const).map(
                    (text: string) => (
                        <ListItemText sx={{padding: 3, paddingLeft: 1}}>
                            <Typography variant="h6" color={'primary'}>
                                {" ·  ".concat(text)}
                            </Typography>
                        </ListItemText>
                        ))}
                </List >
                </CustomTabPanel>
                </div>
            </Drawer>

              <Grid container textAlign={'center'} alignItems={'center'}>          
                <Grid item xs={1} sx={{paddingTop: '45vh'}}>
                    <Button onClick={toggleDrawer('left', true)}>
                        <ArrowForwardIosIcon color='primary' fontSize='large'/>
                    </Button>
                </Grid>
                <Grid item xs={10} textAlign={'center'}>
                    {/* <Typography variant="h1" color='primary.contrastText'>Hello World</Typography> */}
                </Grid>
                <Grid item xs={1} sx={{paddingTop: '45vh'}}>
                    <Button onClick={toggleDrawer('right', true)}>
                        <ArrowBackIosIcon color='primary' fontSize='large'/>
                    </Button>
                </Grid>
              </Grid>  
        </Box>
            

    
    );
};

export default Moonwalk;