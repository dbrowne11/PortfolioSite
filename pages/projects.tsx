import { Grid, Typography, Dialog, Button } from "@mui/material";
import styles from '../styles/Home.module.css';
import ProjectCard from "../components/ProjectCard";
import ProjectPaper from "../components/ProjectPaper";
import theme from "../theme/theme";
import MediaCard from "../components/MediaCard";

export default function Projects() {
    return (
        
        <Grid container>
            <Grid item md={6} textAlign={'center'}>
                <ProjectCard title={"Moonwalk Simulation"}
                             media={"/ProjectImgs/Moonwalk.PNG"}
                             summary={"A simulation environment built during my time at the Human Aware Robotic Exploration lab intended to modulate mental workload"}
                             open={false}>
                    <ProjectPaper>
                        <Grid container padding={4} textAlign={'center'}>
                            <Grid item md={12}>
                                <Typography variant="h1" color={theme.palette.primary.contrastText} paddingBottom={4}>
                                    Moonwalk Simulation
                                </Typography>
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant="body1" color={theme.palette.primary.main}>
                                    The Moonwalk Simulation is a Lunar Exploration challenge designed modulate cognitive load and allow for the collection of a cognitive load bioindicator database.  While the subject 
                                    traversed between beacons, they were simultaneously tasked with monitoring oxygen and fuel levels, managing CO2 levels and motor temperature, tracking a satelite position, and responding
                                    to communication prompts.  Each of these tasks had difficulty levels, and to validate the simulation difficulty yielded measureable results in I built and fit a random forest classifier to the collected
                                    dataset.  Additionally, subjectively validated the cognitive load modulations through NASA's Task Load Index survey. 
                                </Typography>
                            </Grid>
                            <Grid item xs={4} padding={2}>
                                <MediaCard title={"Sample Moonwalk gameplay"} media={"/ProjectImgs/MoonwalkDriving.gif"} caption={"Note all of the UI elements change to provide information for relevant tasks"}></MediaCard>
                            </Grid>
                        </Grid>
                    </ProjectPaper>
                </ProjectCard>
                <ProjectCard title={"CartPole Spiking Neural Network"}
                             media={"/ProjectImgs/CartPoleSNN.gif"}
                             summary={"A small spiking neural network traned using a simple evolutionary strategy and solving the admittadly simple CartPole Environment"}
                             open={false}>
                    <ProjectPaper>
                        <Grid container padding={4} textAlign={'center'}>
                            <Grid item md={12}>
                                <Typography variant="h1" color={theme.palette.primary.contrastText} paddingBottom={4}>
                                    Small Spiking Neural Networks can solve cartpole easily
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant="body1" color={theme.palette.primary.main} paddingBottom={4}>
                                    Cartpole is an easy environment to solve, so easy in fact, that numerous people have developed solutions that can solve it in the first training generation, either by 
                                    manually developing a policy, strong initial priors, or even just a lucky initialization in evolutionary search.  As this was my first foray into reinforcement learning 
                                    with spiking neural networks I wanted to keep it simple and with a prototype evolutionary algorithm my agent balances essentially indefinitely.
                                </Typography>
                            </Grid>
                        </Grid>
                    </ProjectPaper>

                </ProjectCard>
                <Typography variant="body1">
                    A simulation environment built during my time at the Human Aware Robotic Exploration lab intended to modulate mental workload
                </Typography>
            </Grid>
            <Grid item md={6}>
                <Typography variant="h3">
                    Retro Games
                </Typography>
                <Typography variant="body1">
                    A small software project I built early into my university to explore simple databases, encryption, and game programming
                </Typography>
            </Grid>
        </Grid>

    )}