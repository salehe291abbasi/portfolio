import {Fab ,Box} from "@mui/material"
import {LightModeRounded , BedtimeRounded} from "@mui/icons-material" 
import { useTheme } from "@mui/material/styles"
import {useContext} from "react"
import MainContext from "../context";

const ActionButton = ()=>{
    const theme = useTheme();
    const {handleToggleMode} = useContext(MainContext); 

    return (
        <Box sx={{position:"absolute" , mt:0.2 ,ml:0.8 , borderRadius:"50%"}}>
            <Fab aria-label="change-mode" size="small" sx={{backgroundColor:theme.palette.mode==="light"?"rgba(247,247,0,0.5)":"rgba(255,255,255,0.2)" , "&:hover":{backgroundColor:theme.palette.mode==="light"?"rgb(245, 280, 1,0.7)":"rgba(255,255,255,.4)" },color:"white"}} onClick={handleToggleMode}>
                {theme.palette.mode==="dark"?<BedtimeRounded  fontSize="small"/> :<LightModeRounded fontSize="small"/>}
            </Fab>
        </Box>
    )
}
export default ActionButton