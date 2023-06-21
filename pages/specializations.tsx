import { Typography, Grid, Link } from "@mui/material";
import theme from "../theme/theme";
import BasePaper from "../components/BasePaper";
import MediaCard from "../components/MediaCard";

import vae_training from "../public/ProjectImgs/VAE_MNIST_train.gif"

export default function Specializations() {
  return (
    <Grid container margin={4} padding={4}>
      <Grid item xs={12} textAlign={'center'}>
        <BasePaper>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" sx={{color:theme.palette.primary.contrastText}}>
                Machine Learning
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
                Machine Learning is a massive field and my coursework hardly scratched the surface.  I took both Applied Machine Learning and Artificial intelligence,
                both of which are capstone classes at UCSC.  And through this coursework I developed a foundation and a love for machine learning.  Applied machine learning 
                covered topics from feature engineering and linear regression to more complex methods including support vector machines and convolutional neural networks.  Similarly, AI 
                covered topics including constraint satisfaction, Markov Decision Processes, and Q-learning.  Since these classes, I've explored generative models, model-based reinforcement learning,
                transformer based architectures, and spiking neural networks.
              </Typography> 
            </Grid>
            <Grid item xs={4} paddingBottom={2}>
              <MediaCard title={"VAE training on MNIST"} media={"/ProjectImgs/VAE_MNIST_train.gif"} caption={"These plots were generated to validate the VAE that I built before applying it to the CarRacing Task"}/>
            </Grid>
            <Grid item xs={4}>
              <MediaCard title={"Spiking Neural Network Solves Cartpole"} media={"/ProjectImgs/CartPoleSNN.gif"} caption={"A small (96 parameter) SNN trained through a simple evolutionary search algorithm solving the cartpole environment"}></MediaCard>
            </Grid>
            <Grid item xs={4} paddingLeft={1} paddingRight={1}>
              <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
                I love machine learning and have continued to explore it through both dissecting and implementing academic and implementing my own ideas and models. For instance, I developed the Cartpole Spiking 
                Neural Network from relative scratch (that isn't to say that no one has done anything similar, just that I developed both the evolvable model and the evolutionary strategy).  Additionally, I have 
                been working on implementing the model described in <Link href={"https://worldmodels.github.io/"}>'World Models'</Link>. On the right is the reconstructed image from the visual component of my 
                trained world model
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <MediaCard title={"Car Racing Image Reconstruction"} media={"/ProjectImgs/CarRacingRecons.png"} caption={"A VAE built and trained following the World Models visual component architecture"}></MediaCard>
            </Grid>
          </Grid>
        </BasePaper>
      </Grid>
      <Grid item xs={12} textAlign={'center'} paddingTop={5}>
        <BasePaper>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h1" sx={{color:theme.palette.primary.contrastText}}>
                Parallel Processing and High Performance Computing
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <Typography variant="body1" paddingBottom={2} sx={{color:theme.palette.primary.main}}>
              My courses in parallel processing, distributed systems, and compiler design have taught me concepts that have become integral to my programming. One example comes from the lunar simulation I built with the 
              HARE lab.  In this simulation, the subject drive a rover around the moon, and future work would equip this rover with autonomous capabilities.  We wanted a realistic assisted driving system, so I had to simulate
              a LIDAR scanner and additionally the scanner had to run in real time on the CPU.  Without multiprocessesing this would have been impossible.  Similarly when training reinforcement learning agents it is essential to 
              parallelize environment evaluations since they dominate the training cost.  This again is slightly trickier than it seems as for optimal performance you can leverage multiple forms of parallelism.  An optimal implementation
              must not only run the environments in parallel, but also parallelize the model calls.  This makes the training loop more complex but I was able to roughly 10x performance on my 6 core (12 virtual core) system.
            </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1" sx={{color:theme.palette.primary.main}}>
                Compiler Design was particularly interesting with regards to high performance computing as we covered Domain Specific Languages (DSLs) which are highly optimized programming languages for specific tasks. 
                For instance I used TVM which is a machine learning compiler that allows you to explore a wide range of optimizations effeciently and achieve major speedups.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <MediaCard title={"runtime of a @ b + c"} media={"/ProjectImgs/TVMGraph.png"} caption={"Time taken for a @ b + c on NxN matrices"}></MediaCard>
            </Grid>
          </Grid>
        </BasePaper>
      </Grid>
      <Grid item xs={12} justifyContent={'center'} paddingTop={5}>
        <BasePaper>
        <Typography variant="h1" sx={{color:theme.palette.primary.contrastText}}>
          Data Structures and Algorithms
        </Typography>
        <Typography variant="body1" paddingBottom={2} sx={{color:theme.palette.primary.main}}>
           I've excelled at algorithms since I began programming.  After taking Data Structures and Algorithms, I began a position as a tutor and grader for the class.  This position helped me to solidify many algorithmic concepts
           as well as gain a lot of practical experience reading and debugging C/C++ code (as I worked to teach students C and C++ principles while clarifying relevant concepts).  Additionally, taking a graduate level analysis
           of algorthms course has strengthened my ability to digest complex problems and identify optimal problem solving strategies and data structures.
        </Typography>
        </BasePaper>
      </Grid>


    </Grid>
  )}