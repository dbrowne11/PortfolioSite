import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LinkCard from '../components/LinkCard';
import { Grid, Link, Typography, Button, Icon, Tooltip } from '@mui/material';
import theme from '../theme/theme';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel's Portfolio</title>
      </Head>
      
      <Grid container>
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
            Software Engineer and Educator
          </Typography>
        </Grid>
        <Grid item xs={12} paddingBottom={4}>
          <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
            I recently graduated with highest honors and a B.S in Computer Science from the University of California, Santa Cruz (UCSC). Now I am looking to land my first software engineering position.  
             Through my time at UCSC I took numerous capstone and graduate level classes including, Software Engineering, Applied Machine Learning, Artificial Intelligence, 
             Distributed Systems, Compiler Design, and Analysis of Algorithms.  In addition to solid my theoretical foundation, my two years as a researcher at UCSC's Human Aware Robotics Exploration Lab 
             substantially built my practical experience as I was the primary programmer for the human factors experiment we ran.
          </Typography>

        </Grid>
        <Grid item xs={12} paddingBottom={4}>
          <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
            I'd love discuss how I can help you  solve technical challenges, utilize data for business improvements, or develop your skills in programming and machine learning.
             Please feel free to contact me if you have an questions or need additional information.
          
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign={'center'}>
          <Typography variant="h6" sx={{color:theme.palette.primary.main}} paddingBottom={2}>
            Curious to know more?
          </Typography>
        </Grid>
        <Grid item md={6} textAlign={'center'}>
          <Link href='/projects' color={'primary.contrastText'}>
            <Typography>
              Explore some of my projects
            </Typography>
            
          </Link>
        </Grid>
        <Grid item md={6} textAlign={'center'}>
          <Link href='/specializations' color={'primary.contrastText'}>
            <Typography variant='body1' >
              Find out my favorite areas of computer science
            </Typography>
          </Link>
        </Grid>

        {/* <Grid container paddingLeft={15} paddingRight={15} spacing={5}>
          <Grid item md={6}>
            <LinkCard link={"/specializations"} title={"Specializations"} sentence={"Where have I started to specialize and how I've gained that knowledge"}/>
          </Grid>
          <Grid item md={6} gap={4}>
            <LinkCard link={"/projects"} title={"Projects"} sentence={"Check out some of my projects"}/>
          </Grid>
          <Grid item md={12} gap={4}>
            <LinkCard link={"/contact"} title={"Contact Me"} sentence={"Feel free to reach out to me with any inquiries"}/>
          </Grid>


        </Grid> */}
        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </Grid>



      {/* <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
