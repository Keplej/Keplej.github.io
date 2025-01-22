import {Button, Card, CardHeader, CardMedia, Grid2, Typography} from "@mui/material";
import { Project } from "../../utils/InterfaceData.ts";
import projectData from '../../utils/project_data.json';
import Tilt from 'react-parallax-tilt';

function Projects() {
    const projects: Project[] = projectData;

    return (
        <div>
            <Typography variant="h4" sx={{ pb: 1 }}>
                Projects
            </Typography>
            <Grid2 container={true} spacing={4}>
                {projects.map((project) => (
                    <Grid2 key={project.id} size={4}>
                        <Tilt
                            tiltMaxAngleX={1}
                            tiltMaxAngleY={1}
                            scale={1.01}
                            transitionSpeed={250}>
                            <Card sx={{ borderRadius: "16px"}} >
                                <CardHeader title={project.project_name} sx={{ textAlign: "center"}}/>
                                <CardMedia
                                    component="img"
                                    src={project.image}
                                    sx={{
                                    width: '90%',
                                    display: 'block',
                                    margin: '0 auto',
                                    objectFit: 'contain'
                                }}/>
                                {/*<Typography>{project.project_name}</Typography>*/}
                                <Typography sx={{ paddingLeft: 1, paddingTop: 2 }}>{project.description}</Typography>
                                <Button>Project Code</Button>
                                {/*Add a ternary operator if the project is hosted somewhere so the user can see the demo*/}
                                <Button>Demo</Button>
                            </Card>
                        </Tilt>
                    </Grid2>
                ))}
            </Grid2>
            <Typography variant="h4" sx={{ pt: 1, pb: 1 }}>
                Learning
            </Typography>
            <Typography>
                Frontend
            </Typography>
            <Typography component={"li"}>Svelte</Typography>
        </div>
    )
}

export default Projects