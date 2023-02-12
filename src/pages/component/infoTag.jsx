import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded} from "@mui/icons-material"
const InfoTag = ({children})=>{
    return (
        <Typography variant="body1" color="black" sx={{textAlign:"left" ,  mt:1}}>
            {children}
            <KeyboardArrowLeftRounded sx={{verticalAlign:"bottom" , color:"hotpink" , marginRight:1}}/>
        </Typography>
    )
}
export default InfoTag;