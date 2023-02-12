import { Card , CardContent , Divider , Chip, Typography ,Box, Zoom ,Fade, CardMedia, CardActions, Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {DocumentScannerSharp , ShareRounded , FavoriteRounded} from "@mui/icons-material"
import { courses } from "../constants/courses"
import {Helmet} from "react-helmet-async"
import { useEffect, useState } from "react"
import { useTheme } from "@mui/material/styles"
import EllipsisText from "react-ellipsis-text";
import {grey} from "@mui/material/colors"
import css from "./component/style.module.css"
const Courses = ({helmetTitle})=>{
    const [loading , setLoading] = useState(false)
    const theme = useTheme()
    useEffect(()=>{
        setLoading(true)
    },[])
    return (
        <Card sx={{background:`url(${require("../assets/19.jpg")})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative", height:"100vh",
        pt:1,
        overflowY:"auto",
        overflowX:"hidden"}} >
            <div className={css.overlay2}></div>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
            <Fade  in={loading} style={{ transitionDelay: loading? '500ms' : '0ms' }}>
                      <Divider textAlign="center" sx={{"&::after,&::before":{borderColor:"warning.main"} , mb:4}}><Chip color="warning" label={<Typography color="text.primary" variant="h6">نمونه پروژه ها</Typography>} sx={{p:2.5}} icon={<DocumentScannerSharp/>} /></Divider>
            </Fade>

            <Grid container sx={{mx:3}}>
                {
                    courses.map((item , index) =>(
                        <Zoom in={loading}  style={{transitionDelay:loading?`${index+3}99ms`:"0ms"}}>
                            <Grid key={index} xs={12} sm={6} md={6} lg={4} xl={4} sx={{p:2 , mb:2 }}>
                            <Card className={css.card} sx={{maxWidth:325,backgroundColor:theme.palette.mode==="dark"?"rgb(75, 147, 194)":grey[100],transition:"0.2s ease-in-out" ,"&:hover":{transform:"translateY(-8px)"}}}>
                               <Box className={css.img}> <CardMedia sx={{height:250}} image={item.image} title={item.title} /> <div className={css.sub}></div></Box>
                                <CardContent>
                                    <Typography variant="h6" textAlign="center" sx={{mb:2}}> 
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{direction:"ltr"}}>
                                        <EllipsisText text={item.info} length="120"/>
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button href={item.link} sx={{minWidth:8}}><ShareRounded  fontSize="small" color="info"/> </Button>
                                    <Button href={item.link} sx={{minWidth:8}}><FavoriteRounded  fontSize="small" color="error"/></Button>
                                </CardActions>
                              </Card>
                            </Grid>
                        </Zoom>
                    ))
                }
            </Grid>
            </CardContent>
        </Card>
    )
}
export default Courses;