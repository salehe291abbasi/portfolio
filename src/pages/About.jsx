import { Card , CardContent , Divider , Chip, Avatar, Typography ,Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {CodeRounded , Face2} from "@mui/icons-material"
import InfoTag from "./component/infoTag"
import avatar from "../assets/icons/salehe6.jpg"
import Skills from "./component/Skills"
import { devSkills } from "../constants/skillData"
import { useState , useEffect } from "react"
import {Helmet} from "react-helmet-async"
import {useTheme} from "@mui/material/styles"
import css from "./component/style.module.css"
const About = ({helmetTitle})=>{

    const [jsVal , setJsVal] = useState(0);
    const [cssVal , setCssVal ] = useState(0);
    const [reactVal , setReactVal] = useState(0);
    const [nodeVal , setNodeVal ] = useState(0);
    const [gitVal , setGitVal] = useState(0); 
    const [htmlVal , setHtmlVal] = useState(0);

    const theme = useTheme()
    const {htmlSkill , cssSkill , reactSkill , nodeSkill , jsSkill , gitSkill} = devSkills;

    useEffect(()=>{
        const timer = setInterval(()=>{
            setHtmlVal(prevVal =>{
                let randNum = Math.random()*10;
                return Math.min(prevVal+Math.floor(randNum) , htmlSkill.valSkill);
            })
            setJsVal(prevVal =>{
                let randNum = Math.random()*10;
                return Math.min(prevVal+Math.floor(randNum) , jsSkill.valSkill);
            })
            setReactVal(prevVal =>{
                let randNum = Math.random()*10;
                return Math.min(prevVal+Math.floor(randNum) , reactSkill.valSkill);
            })
            setGitVal(prevVal =>{
                let randNum = Math.random()*10;
                return Math.min(prevVal+Math.floor(randNum) , gitSkill.valSkill);
            })
            setCssVal(prevVal =>{
                let randNum = Math.random()*10;
                return Math.min(prevVal+Math.floor(randNum) , cssSkill.valSkill);
            })
            setNodeVal(prevVal =>{
                let randNum = Math.random()*10;
                return Math.min(prevVal+Math.floor(randNum) , nodeSkill.valSkill);
            })
        },80)

        return ()=>{
            clearTimeout(timer)
        }
    },[]);
    return (
            <Box sx={{  background:`url(${require("../assets/8.jpg")}) , rgba(0,0,0,0.6)`,backgroundSize:"cover",backgroundPosition:"center"}}>
                 <Card  sx={{position:"relative", height:"100vh",background:"none",
        pt:1,
        overflowY:"auto",
        overflowX:"hidden"}} >
             <div className={css.overlay2}></div>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent >
                <Grid container >
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8} sx={{paddingLeft:5,zIndex:"99"}}>
                    <Divider textAlign="right" sx={{mb:2}}><Chip sx={{"&::before , &::after":{borderColor:"primary.main"} , p:3}} color="info" icon={<CodeRounded />} label={<Typography variant="body1" color="text.primary" sx={{textAlign:"center"}}>فرانت اند دولوپر ریکت و مدرس</Typography>} /></Divider>

                            <Grid container>
                                {/* <Grid xs={4} sm={4} md={4} lg={4} xl={4} sx={{textAlign:"center",display:{xs:"none" , sm:"block" ,md:"block",lg:"block"}}}>
                                    {
                                        devInfo.map((item , index)=>(
                                            
                                                <Box key={index} component="div" sx={{width:"100%" , mt:1}}>
                                                   <Tooltip placement="right" arrow title={item.toltipTitle}>
                                                        <Chip icon={item.icon} sx={{p:2 ,width:0.8, backgroundColor:item.color , textAlign:"center"}} label={
                                                            <Typography variant="body1" color="whitesmoke">
                                                                <CountUp start={0} end={item.total} duration={2}/>
                                                            </Typography>
                                                        }/>
                                                    </Tooltip>
                                                </Box>
                                            
                                        ))
                                    }
                                </Grid> */}
                                <Grid xs={12} sm={12} md={12} lg={12} xl={12}  sx={{background:"rgba(255,255,255,0.7)"}}>
                                    <InfoTag>نام و نام خانوادگی : صالحه عباسی</InfoTag>
                                    <InfoTag>آدرس : تهران - شهرری</InfoTag>
                                    <InfoTag>شغل : طراح سایت و مدرس</InfoTag>
                                    <InfoTag>saleheabbasi313@gmail.com : آدرس ایمیل</InfoTag>
                                    
                                </Grid>
                            </Grid>
                    </Grid>
                    <Grid sx={0} sm={0} md={4} lg={4} xl={4}>
                        <Avatar src={avatar}  variant="rounded" sx={{width:250 , height:250 , margin:"0px auto" , display:{
                            xs:"none",
                            sm:"noen",
                            md:"block",
                            lg:"block",
                            xl:"block"
                        }}}/>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid width={1} sx={{mt:1,zIndex:"99"}}>
                        <Divider sx={{textAlign:"center" , mb:2}}><Chip color="secondary" label={<Typography variant="body1" color="text.primary" sx={{textAlign:"center"}}>میزان مهارت</Typography>} sx={{p:3}} icon={<Face2 backgroundColor="text.primary" />}/></Divider>
                        <Skills percent={htmlVal} name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color}/>
                        <Skills percent={cssVal} name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color}/>
                        <Skills percent={nodeVal} name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color}/>
                        <Skills percent={jsVal} name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color}/>
                        <Skills percent={gitVal} name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color}/>  
                        <Skills percent={reactVal} name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color}/>  
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
            </Box>
    )
}
export default About ;