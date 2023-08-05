import { Grid, Typography, Dialog, Button, Link } from "@mui/material";
import styles from '../styles/Home.module.css';
import ProjectCard from "../components/ProjectCard";
import ProjectPaper from "../components/ProjectPaper";
import theme from "../theme/theme";
import MediaCard from "../components/MediaCard";

import cartpolegif from "../public/ProjectImgs/CartPoleSNN.gif"

export default function Projects() {
    return (
        <Grid container padding={2} spacing={2}>
            {/* Moonwalk Card And Popup */}
            <Grid item sm={12} md={6}>
                <ProjectCard title={"Moonwalk Simulation"}
                             media={"/ProjectImgs/Moonwalk.PNG"}
                             summary={"A simulation environment built during my time at the Human Aware Robotic Exploration lab intended to modulate mental workload"}
                             open={false}>
                    <ProjectPaper>
                        <Grid container padding={4}>
                            <Grid item sm={12} textAlign={'center'}>
                                <Typography variant="h1" color="primary.contrastText" paddingBottom={4} >
                                Moonwalk virtual reality simulation built with Unity
                                </Typography>
                            </Grid>
                            <Grid item md={7} sm={12} sx={{display: 'inline-grid', alignItems:'flex-end'}}>

                                <Grid item sm={12}>
                                    <Typography variant="h4" color={"primary.main"} textAlign={'center'}>
                                        Features
                                    </Typography>
                                </Grid>
                                <Grid item sm={12}>
                                    <Typography variant="body1" color={"primary.main"}>
                                    Primary Objective <br/>
                                    ·  Navigation/Path Planning in a low-traction rover <br/>
                                    Mental Workload Variable Tasks <br/>
                                    ·  Antenna Tracking <br/>
                                    ·  Oxygen and Energy Monitoring<br/>
                                    ·  CO2 Dumping <br/>
                                    ·  Radio Responses <br/>

                                    </Typography>
                                </Grid>

                            </Grid>
                            <Grid item md={4} sm={12}>
                                <MediaCard title={"Moonwalk Tutorial (no VR)"} media={"/Moonwalk.gif"} caption={"The tutorial explaining game mechanics we gave to subjects prior to their trial."}></MediaCard>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="body1" color={"primary.main"}>
                                Miscellaneous <br/>
                                ·  Integration with a 6-DOF motion platform using the SimRacingStudio API <br/>
                                ·  Simulated LIDAR scanner <br/>
                                ·  Survey and tutorial VR interfaces <br/>
                                Data Collection and Communication <br/>
                                ·  Socket based communication between simulation compute (Windows) and data processing (Linux) <br/>
                                ·  Structures for game state data, pupillometric data, and survey responses based in ROS messages <br/>
                                ·  Integrates the participant’s live biodata into the relevant simulation tasks <br/>

                                </Typography>

                            </Grid>

                            
                        </Grid>
                    </ProjectPaper>
                </ProjectCard>
            </Grid>
            {/* OceanAI Card And Popup */}
            <Grid item sm={12} md={6}>
                <ProjectCard title={"Website for UCSC AI for Oceans Program"}
                             media={'/ProjectImgs/AIforOceans.PNG'}
                             summary={"A simple website using a NextJS and MongoDB to display information about the program, as well as allow for dataset downloads from a centralized location"}
                             open={false}>
                                <ProjectPaper>
                                    <Grid container spacing={2} padding={2}>
                                        <Grid item xs={12} >
                                            <Typography variant="h6" color='primary.contrastText'>
                                                Full Stack Website for UCSC associated AI for Oceans Program
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <Typography color={theme.palette.primary.main}>
                                                This project was built for my Software Engineering Capstone class, and as such, despite being reletively simple project, it was transformative to 
                                                my programming journey.  This was built over a 10 week class in a 3 person group, and my group was lucky enough to get the experience of working with a 'client' - the AI 
                                                for Oceans program at UCSC.  Working with a client exposed my group to some realities of software engineering we were unprepared for, such as unclear instructions and a client who
                                                seemed to be unsure of what they wanted us to accomplish.  All code, as well as the write ups and reports required by the class are available at the <Link color="primary.contrastText" href={'https://github.com/dbrowne11/AI-For-Oceans'}>GitHub repository</Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <MediaCard title="Final Burnup Chart" 
                                            media="/ProjectImgs/JiraSprintReport.PNG"
                                            caption="The inital flat part of this graph consists of both time finding my group and time meeting with the client to 
                                            fully determine and understand scope. Additionally a large jump in the scope can be observerd around Nov 18. This jump aligned with our third sprint start where 
                                            we began work on the websites backend, and prior to that we had not accurately estimated or established scope for the backend of this website"/>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body1" color="primary.main">
                                                In addition to learning to work with a client, we implemented the SCRUM methodology for team management.  We definitely faced challenges especially since we
                                                effectively started the project late. This led to tasks rolling over into successive sprints, which when combined with the changing client requirements led to 
                                                a challenging development experience.  Despite this, we delivered our minimum viable product, a full-stack website for a university research group, in roughly 8 weeks.
                                                More details and documentation of the project, and specific sprint details are available in the linked repository.

                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </ProjectPaper>
                             </ProjectCard>
            </Grid>
            {/* CartPole SNN Card And Popup */}
            <Grid item xs={12} md={6}>
                <ProjectCard title={"CartPole Spiking Neural Network"}
                             media={"/CartPoleSNN.gif"}
                             summary={"A small spiking neural network trained using a simple evolutionary strategy and solving the admittedly simple CartPole Environment"}
                             open={false}>
                    <ProjectPaper>
                        <Grid container padding={4}>
                            <Grid item sm={12}>
                                <Typography variant="h1" color={theme.palette.primary.contrastText} paddingBottom={4}>
                                    Small Spiking Neural Networks solve Cartpole
                                </Typography>
                            </Grid>
                            <Grid item sm={12}>
                                <Typography variant="body1" color={theme.palette.primary.main} paddingBottom={4}>
                                    Cartpole is an easy environment to solve. So easy in fact, that numerous people have developed solutions that can solve it in the first training generation, (or without training)
                                    either by manually developing a policy, strong initial priors, or even just a lucky initialization in evolutionary search.  Since this was my first foray into reinforcement learning 
                                    with spiking neural networks I wanted to keep it simple. With a policy evolved by a custom evolutionary algorithm, my agent completely solves the environment.
                                </Typography>
                                <Typography variant="body1" color={theme.palette.primary.main}>
                                    The cartpole environment observation is a 4 element vector consisting of position, velocity, pole angle, and angular velocity.  I used a simple MLP with a single hidden layer
                                    and leaky integrate and fire neurons. In order to train this network, I developed an extremely simple evolutionary algorithm (EA). Evolutionary Algorithms are defined by a few key operations: selection, mutation, crossover.  These operations are inspired by their biological 
                                    equivalents and the key distinctions between EAs are often in their mutation and crossover procedures.  For instance the EA Neuroevolution of Augmenting Topologies (NEAT) mutates the
                                    network architecture in addition to the weights and biases.  Covariance matrix adaptation (CMA) implements the evolutionary search as a multivariate statistical optimization and learns a 
                                    distribution of parameters, while leaving the architecture unchanged. Finally a particularly interesting ES I plan to implement in the near future are Weight Agnostic Neural Networks (WANN)
                                    which have achieved impressive results by generating an architecture that works regardless of the network weight (Yes, weight: singular.  The proposing authors managed to solve the gymnasium
                                    cartpole environment with a network in which every weight and bias had the same (random) value.) I write all this to put into perspective just how simple my mutation strategy was. 
                                    A selected agent got one of three possible mutations:  a small, random shift to every parameter in a random layer, a random change to a single parameter, or a randomly generated mask would
                                    set parameters to 0 in a dropout style regularization.  This was enough to solve the cartpole environment, and my next spiking challenge will be tackling CarRacing with a WANN which may not work
                                    as it has not been done before as far as I can tell.
                                </Typography>
                            </Grid>
                        </Grid>
                    </ProjectPaper>

                </ProjectCard>
            </Grid>
            <Grid item xs={12} md={6}>
            <ProjectCard title={"Retro Games and Login Authentication"}
                             media={"/ProjectImgs/Login.PNG"}
                             summary={"A simple project built early in my university time using tkinter, pygame, and SQLite"}
                             open={false}>
                    <ProjectPaper>
                        <Grid container padding={4}>
                            <Grid item md={12}>
                                <Typography variant="h1" color={theme.palette.primary.contrastText} paddingBottom={4}>
                                    A first portfolio project
                                </Typography>
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant="body1" color={theme.palette.primary.main} paddingBottom={4}>
                                    I initially developed this project after my freshman year at UCSC, as such
                                    its content is much simpler than the other projects here.  One of the future plans
                                    for this website is to reimplement this project so users can play retro games, or interact with
                                    my other projects, and login to save progress where applicable.  Code is available at <Link href={'https://github.com/dbrowne11/LoginAuth'}>https://github.com/dbrowne11/LoginAuth </Link>
                                </Typography>
                                <Typography variant="body1" color={theme.palette.primary.main}>
                                    The only aspect of this project of particular note is that I used a database for the login system and utilized RSA encryption to secure the database.
                                    Looking back, I'm sure the security was lacking, but it was still a great introduction to working with a simple databases.
                                </Typography>
                            </Grid>
                            <Grid item md={4}>
                                <MediaCard title="Snake Gameplay" media="/ProjectImgs/Snake.gif" 
                                caption="One of the two atari games I recreated in pygame to put behind the login."></MediaCard>
                            </Grid>
                        </Grid>
                    </ProjectPaper>

                </ProjectCard>
            </Grid>
        </Grid>

    )}