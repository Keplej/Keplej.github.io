import {Box, Card, CardActionArea, CardContent, CardMedia, Grid2, Typography} from "@mui/material";
import knowledgeData from '../../utils/knowledge_data.json';
import { Knowledge } from "../../utils/InterfaceData";

function Home() {
    const technologies: Knowledge[] = knowledgeData;

    // Group data by type
    const groupedTechnologies = technologies.reduce((acc: Record<string, Knowledge[]>, technology) => {
        acc[technology.type] = acc[technology.type] || [];
        acc[technology.type].push(technology);
        return acc;
    }, {});

    return (
        <div>
            <Box sx={{ flexGrow: 1, paddingRight: 50 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Home
                </Typography>
                <Typography
                variant="body2"
                gutterBottom
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <img src={"https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"} alt={"random image"}/>
            </Box>
            <Grid2>
                <Typography variant="h4" gutterBottom sx={{mt: 2, mb: 2}}>Technologies</Typography>
                {Object.entries(groupedTechnologies)
                    .sort(([typeA], [typeB]) => {
                        // Define the desired order
                        const order = ['Languages', 'Frameworks', 'Testing', 'Network & Communications', 'Cloud & Databases'];
                        return order.indexOf(typeA) - order.indexOf(typeB);
                    })
                    .map(([type, items]) => (
                    <Grid2 key={type}>
                        <Typography variant={"h5"} sx={{mt: 2, mb: 2, }}>{type}</Typography>
                        <Grid2 spacing={2} container={true}>
                            {items.map((item) => (
                                <Grid2 key={item.id} >
                                    <Card sx={{ borderRadius: "16px", width: 150, height: 120}}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                src={item.image}
                                                sx={{
                                                    width: '30%',
                                                    display: 'block',
                                                    margin: '0 auto',
                                                    marginTop: '10%',
                                                    objectFit: 'contain'
                                                }}
                                            />
                                            <CardContent>
                                                <Typography sx={{textAlign: "center"}}>{item.name}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grid2>
                ))}
            </Grid2>
        </div>
    )
}

export default Home