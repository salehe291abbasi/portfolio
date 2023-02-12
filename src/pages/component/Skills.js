import {Typography , Box , Chip , Divider , LinearProgress, Badge } from "@mui/material"
export const Skills = ({percent , color , icon , name})=>{
    return(
        <>
            <Divider textAlign="right" sx={{"&::after,&::before":{borderColor:`${color}.main`} , my:2}}><Chip color={color} label={<Typography color="black" variant="body2">{name}</Typography>} sx={{p:2}} icon={<Box component="img" src={icon} sx={{height:15}}/>} /></Divider>
            <Box sx={{display:"flex",alignItems:"center"}}>
                <Box color={color} sx={{minWidth:35 , mr:2}}><Badge color={color} badgeContent={<Typography color="black" variant="p">{`${percent}%`}</Typography>}/></Box>
                <Box sx={{width:1 , mr:1}}>
                    <LinearProgress color={color} variant="determinate" value={percent} sx={{height:10 , borderRadius:2}}/>
                </Box>
            </Box>
        </>
    )
}
export default Skills;