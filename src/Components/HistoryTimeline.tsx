import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Card, CardContent, Typography} from "@mui/material";
import {AboutData} from "../utils/InterfaceData.ts";
import aboutInfo from '../../src/utils/about_info.json';



function HistoryTimeline() {
    const abouts: AboutData[] = aboutInfo;

    return (
        <div>
            <Timeline position={"alternate"}>
                {abouts.map((about) => (
                    <TimelineItem key={about.id}>
                        <TimelineOppositeContent
                            // sx={{ m: 'auto 0' }}
                            align="right"
                            variant="h5"
                            color="text.secondary"
                        >
                            {about.year}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color={about.color}>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Card sx={{ backgroundColor: "#2a3547", borderRadius: "16px" }}>
                                <CardContent>
                                    <Typography variant={"h6"}>{about.title}</Typography>
                                    <Typography variant={"body1"}>
                                        {about.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
}

export default HistoryTimeline;