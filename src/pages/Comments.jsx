import { Card , CardContent , Divider , Box , Avatar , Chip, Typography  ,Fade  } from "@mui/material"
import {Face3Rounded} from "@mui/icons-material"
import { userComments } from "../constants/details"
import {Helmet} from "react-helmet-async"
import Slider from "react-slick";
import { useEffect, useState } from "react"
import {css, useTheme} from "@mui/material/styles"
import {grey} from "@mui/material/colors"
const Comments = ({helmetTitle})=>{ 
    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
    },[])
    const options = {
        dots:true,
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        infinite:true,
        pauseOnHover:true,
        cssEase:"linear"

    }
    const theme = useTheme()
    return (
        <Card sx={{background:`url(${require("../assets/24.jpg")})`,backgroundSize:"cover",backgroundPosition:"center",position:"relative", height:"100vh",
            p:1,
            overflowY:"scroll",
            overflowX:"hidden"}} >
                <Helmet>
                    <title>{helmetTitle}</title>
                </Helmet>
                <CardContent>
                <Fade  in={loading} style={{ transitionDelay: loading? '500ms' : '0ms' }}>
                      <Divider textAlign="center" sx={{"&::after,&::before":{borderColor:"info.main"} , mb:4}}><Chip color="info" label={<Typography color="text.primary" variant="h6">نظرات دانشجویان</Typography>} sx={{p:2.5}} icon={<Face3Rounded/>} /></Divider>
                </Fade>
                    <Slider {...options} sx={{width:"60%" }}>
                 
                   {
                        userComments.map((item , index)=>(

                            
                                <Card sx={{background:"transparent", border:'none',outline:"none",boxShadow:"none" , pb:10,pt:10}}>
                                    <CardContent>
                                    <Box key={index} component="div" sx={{ backgroundColor:theme.palette.mode==="dark"?grey[500]:grey[200],pb:2,boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.35) 0px 50px 100px -20px, rgba(0, 0, 0, 0.4) 0px 30px 60px -30px",width:"80%" ,pt:1 , display:'flex',alignItems:"center",justifyContent:"center" , flexDirection:"column" , mx:"auto"}} >
                                       <Box className={css.img}> <Avatar src={item.prof} sx={{width:100 , height:100  }} /><div className={css.sub}></div></Box>
                                        <Typography variant="body2" color={theme.palette.mode==="dark"?grey[800]:grey[500]} sx={{my:1}} >{item.jobTitle}</Typography>
                                        <Box component="div" color="black" sx={{borderRadius:1 , backgroundColor:theme.palette.mode==="dark"?"rgba(0,0,0,0.5)":"rgba(0,0,0,0.01)", width:"75%" , direction:"ltr",fontFamily:"tanha"  , p:"20px 50px" , mt:1 }}>
                                            <Typography variant="body2" color={theme.palette.mode==="dark"?grey[300]:grey[600]}>
                                                {item.comment}
                                            </Typography>
                                        </Box>
                                    
                                     </Box>
                                    </CardContent>
                                </Card>
                              
                        ))
                    }
                  
                    </Slider>
                </CardContent>
        </Card>
    )
}
export default Comments;