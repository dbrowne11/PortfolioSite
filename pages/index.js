import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import ProjectPaper from '../components/ProjectPaper';
import ProjectDisplay from '../components/ProjectPaper';
import Moonwalk from '../components/Moonwalk';
import { Grid, Link, Typography, Button, Icon, Tooltip, Tabs, Tab } from '@mui/material';
import theme from '../theme/theme';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Home() {
  return (
    <div>
      <Header className={styles.header}></Header>
      <main className='pageScroll'>
        {/* Landing */}
        <section className={styles.pageSection1}>
          <Grid container className={styles.container} alignSelf={'center'} alignContent={'center'} margin={3} padding={4}>
            <Grid item xs={9} >
              <Typography variant="h1" sx={{color:theme.palette.primary.contrastText}}>
                I'm Daniel Browne 
              </Typography>
            </Grid>
            <Grid item xs={1} >
              <Tooltip title="Visit my LinkedIn">
                <Link color='primary.contrastText' href={'https://www.linkedin.com/in/daniel-browne-cs11'}>
                  <LinkedInIcon></LinkedInIcon>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item xs={1} >
              <Tooltip title="Visit my Github">
                <Link color='primary.contrastText' href={'https://github.com/dbrowne11'}>
                  <GitHubIcon></GitHubIcon>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item xs={1} >
              <Tooltip title="Email me">
                <Link color='primary.contrastText' href={'mailto:danielsbrowne11@gmail.com'}>
                  <EmailIcon></EmailIcon>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item xs={12} marginLeft={8}>
              <Typography variant="h3" sx={{color:theme.palette.primary.main, lineHeight:1.167*2}}>
                Software Engineer
              </Typography>
            </Grid>
            <Grid item xs={12} paddingBottom={4}>
              <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
                I recently graduated with  a B.S in Computer Science from the University of California, Santa Cruz (UCSC). Now I am looking to land my first software engineering position.  
                Through my time at UCSC I took numerous capstone and graduate level classes including, Software Engineering, Applied Machine Learning, Artificial Intelligence, 
                Distributed Systems, Compiler Design, and Analysis of Algorithms.  In addition to solid my theoretical foundation, my two years as a researcher at UCSC's Human Aware Robotics Exploration Lab 
                substantially built my practical experience as I was the primary programmer for the human factors experiment we ran.
              </Typography>

            </Grid>
            <Grid item xs={12} paddingBottom={4}>
              <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
                I'd love discuss how I can help you  solve technical challenges and utilize data for business improvements.
                Please feel free to contact me if you have an questions or need additional information.

              </Typography>
            </Grid>
          </Grid>

        </section>
        {/* Projects */}
        <section className={styles.pageSection2}>
          <Moonwalk></Moonwalk>
              {/* <Grid container textAlign={'center'}>          
                <Grid item xs={1} sx={{paddingTop: '45vh'}}>
                  <
                  <ArrowBackIosIcon color='secondary' fontSize='large'/>
                </Grid>
                <Grid item xs={10} textAlign={'center'}>
                    <Typography variant="h1" color='primary.contrastText'>Hello World</Typography>
                </Grid>
                <Grid item xs={1}>
                    <ArrowForwardIosIcon color='primary'/>
                </Grid>
              </Grid>   */}

            


        </section>
      </main>
      </div>

  )
}
