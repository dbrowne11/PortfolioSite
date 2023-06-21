import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LinkCard from '../components/LinkCard';
import { Grid, Typography } from '@mui/material';
import theme from '../theme/theme';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel's Portfolio</title>
      </Head>
      
      <Grid container  justifyContent="flex-start">
        <Grid item xs={12} >
          <Typography variant="h1" sx={{color:theme.palette.primary.contrastText}}>
            I'm Daniel Browne
          </Typography>
        </Grid>
        <Grid item xs={6} marginLeft={8}>
          <Typography variant="h3" sx={{color:theme.palette.primary.main, lineHeight:1.167*2}}>
            Software Engineer
          </Typography>
        </Grid>
        <Grid item xs={12} paddingBottom={4}>
          <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
            I recently graduated with a B.S in Computer Science from the Universify of California, Santa Cruz and am looking to land my first software engineering position.  Through my time at university
             I was trying to race my way into academia and as such took numerous capstone and graduate level classes including, Software Engineering, Applied Machine Learning, Artificial Intelligence, 
             Distributed Systems, Compiler Design, and Analysis of Algorithms.  In addition to my theoretical foundation, I've gained a substantial skills and experience through the academic and internship positions 
             I've held
          </Typography>
        </Grid>

        <Grid container paddingLeft={15} paddingRight={15} spacing={5}>
          <Grid item md={6}>
            <LinkCard link={"/specializations"} title={"Specializations"} sentence={"Where have I started to specialize and how I've gained that knowledge"}/>
          </Grid>
          <Grid item md={6} gap={4}>
            <LinkCard link={"/projects"} title={"Projects"} sentence={"Check out some of my projects"}/>
          </Grid>
          <Grid item md={12} gap={4}>
            <LinkCard link={"/contact"} title={"Contact Me"} sentence={"Feel free to reach out to me with any inquiries"}/>
          </Grid>


        </Grid>
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
