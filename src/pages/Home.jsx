import {Box , Typography} from "@mui/material"
import firstBg from "../assets/7.jpg"
import Typed from "typed.js"
import { useEffect , useRef } from "react"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links2} from "../constants/particles"
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async"; 
import { useState } from "react";
const Home = ({helmetTitle})=>{
    const [index , setIndex] = useState(0)
    const nameEl = useRef(null);
    // const infoEl = useRef(null);
    const strings = [
        "  فرانت اند دولوپر هستم ",
        " تولید کننده ی محتوا هستم ",
        " مدرس برنامه نویسی هستم ",
        " فول استک کار هستم ",
    ]

   

    useEffect(()=>{
        const typedName = new Typed(nameEl.current , {
            strings:[" صالحه عباسی "],
            typeSpeed:80,
            backSpeed:20,
            loop:false,
            backDelay:10,
            showCursor:false
        })
        // const typedInfo = new Typed(infoEl.current , {
        //     strings:strings,
        //     typeSpeed:80,
        //     backSpeed:50,
        //     startDelay:1500,
        //     backDelay:20,
        //     loop:true,
        //     showCursor:false
        // })
        const intervalId = setInterval(()=>{
            setIndex(prev =>prev+1)
        },3000)
        return()=>{
            // typedInfo.destroy()
            clearInterval(intervalId)
            typedName.destroy()
        }
    },[])

    const particlesInit = useCallback(async loadFireworksPreset => {
        console.log(loadFireworksPreset);
        await loadFull(loadFireworksPreset);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
            <>
                              <Box sx={{
                                background:`url(${firstBg})`,
                                backgroundPosition:"center" , 
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover",
                                height:"100vh",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                flexDirection:"column"
                                }}>
                                    <Box sx={{width:1,height:1,background:"rgba(0,0,0,0.5)",position:"absolute",zIndex:"0"}}></Box>
                                  <Helmet>
                                    <title>{helmetTitle}</title>
                                  </Helmet>
                                  <Particles
                                        id="tsparticles"
                                        init={particlesInit}
                                        loaded={particlesLoaded}
                                        options={links2}
                                    />
                                    <Box component="div" sx={{display:'flex' ,zIndex:"10"}}>
                                    <Typography  variant="h3" sx={{   color:"white" ,mx:2}}>{" { "}</Typography>
                                    <Typography ref={nameEl}  variant="h3" sx={{   color:"white" }}></Typography>
                                    <Typography  variant="h3" sx={{   color:"white" ,mx:2}}>{" } "}</Typography>
                                    </Box> 
                                    <Box component="div" sx={{display:"flex" , zIndex:"10"}}>
                                        <Typography  variant="h4" sx={{color:"white" }}>
                                            <TextTransition springConfig={presets.wobbly}>
                                                {strings[index%strings.length]}
                                            </TextTransition>
                                        </Typography>
                                        <Typography variant="h4" sx={{color:"white" , mr:1}}>
                                                من یک {" "} 
                                        </Typography>
                                    </Box>
                                  
                                  
                                    
                                
                                </Box>
            </>
        )
    }
export default Home;