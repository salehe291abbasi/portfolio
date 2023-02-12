import { Card , CardContent , Divider , Chip, Typography ,Slide ,Fade , Grow } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {DocumentScannerRounded ,SchoolRounded , PendingActionsTwoTone , BackpackTwoTone , BackupTable} from "@mui/icons-material"
import { eduInfo ,exprienceInfo} from "../constants/details"
import {Timeline , TimelineItem , TimelineSeparator , TimelineDot , TimelineContent , TimelineConnector} from "@mui/lab"
import {Helmet} from "react-helmet-async"
import {useTheme} from "@mui/material/styles"
import { useEffect, useState } from "react"
import {grey} from "@mui/material/colors"
import css from "./component/style.module.css"
const Resome = ({helmetTitle})=>{
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
    },[])
    const theme = useTheme();
    return(
        <Card sx={{background:`url(${require("../assets/24.jpg")})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative", height:"100vh",
        pt:1,
        overflowY:"auto",
        overflowX:"hidden"}} >
            <div className={css.overlay2}></div>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Fade  in={loading} style={{ transitionDelay: loading? '500ms' : '0ms' }}>
                      <Divider textAlign="center" sx={{"&::after,&::before":{borderColor:"warning.main"} , mb:4}}><Chip color="warning" label={<Typography color="text.primary" variant="h6">رزومه</Typography>} sx={{p:2.5}} icon={<DocumentScannerRounded/>} /></Divider>
                </Fade>
                <Grid container>
                    <Grid xs={6} sx={{zIndex:"99"}}>
                         <Divider textAlign="center" sx={{"&::after,&::before":{borderColor:"info.main"} }}><Chip color="info" label={<Typography color="text.primary" variant="body2">راهنمای مسیر</Typography>} sx={{p:2}} icon={<BackpackTwoTone/>} /></Divider>
                        <Timeline position="alternate" sx={{direction:"ltr"}}>
                            {
                                eduInfo.map((item , index )=>(
                                    <Slide direction='up' in={loading} style={{transitionDelay:loading?`${index+3}99ms`:"0ms"}}>
                                        <TimelineItem key={index}>
                                        <TimelineSeparator sx={{mx:3}}>
                                            <TimelineDot variant="outlined" color="info">
                                            <PendingActionsTwoTone  color="info"/>
                                            </TimelineDot>
                                            {(eduInfo.length-1)===index ? null : <TimelineConnector sx={{height:"80px"}}/>}
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography variant="caption" color="gray">
                                                {item.year}
                                            </Typography>
                                            <Typography variant="body1" color="black">
                                                {item.field}
                                            </Typography>
                                            <Typography variant="body2" color="black">
                                                {item.uni}
                                            </Typography>
                                        </TimelineContent>
                                         </TimelineItem>
                                    </Slide>
                                ))
                            }
                        </Timeline>
                    </Grid>
                    <Grid xs={6}>
                         <Divider textAlign="center" sx={{"&::after,&::before":{borderColor:"success.main"} }}><Chip color="success" label={<Typography color="text.primary" variant="body2">تحصیلات</Typography>} sx={{p:2}} icon={<BackupTable/>} /></Divider>
                            <Timeline position="alternate" sx={{direction:"ltr"}}>
                                {
                                    exprienceInfo.map((item , index)=>(
                                        <Slide direction="up" in={loading} style={{transitionDelay:loading?`${index+3}99ms`:"0ms"}}>
                                            <TimelineItem key={index}>
                                            <TimelineSeparator sx={{mx:3}}>
                                                <TimelineDot variant="outlined" color="success">
                                                    <SchoolRounded  color="success"/>
                                                </TimelineDot>
                                                {index===exprienceInfo.length-1?null:<TimelineConnector sx={{height:"80px"}}/>}
                                            </TimelineSeparator>
                                            <TimelineContent>
                                                <Typography color={theme.palette.mode==="dark"?grey[400]:grey[500]} variant="caption">{item.year}</Typography>
                                                <Typography color="black" variant="body2">{item.field}</Typography>
                                                <Typography color="black" variant="body1">{item.uni}</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        </Slide>
                                    ))
                                }
                            </Timeline>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default Resome;