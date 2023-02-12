import { Avatar, Typography, Box, IconButton } from "@mui/material";
import { useState } from "react";
import avatar from "../../assets/icons/salehe2.jpg"
import { RandomReveal } from 'react-random-reveal'
import { alphabetPersian } from "../../constants/alphabetPersian"
import { Instagram, Telegram, WhatsApp, GitHub } from "@mui/icons-material"
import ActionButton from "../ThemeActionButton";
import { useTheme } from "@mui/material/styles";
import {grey} from "@mui/material/colors"
const SidebarHeader = () => {
    const theme = useTheme();
    const [start, setStart] = useState(false)
    return (
        <>
            <ActionButton />
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 130,
                    width: 130,
                    margin: "20px auto 0px",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                }}
            >
                YG
            </Avatar>
            <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h6" sx={{ mx: 2 }} color={theme.palette.mode==="dark"?grey[100]:grey[900]}>{"{"}</Typography>
                <Typography variant="h6" color={theme.palette.mode==="dark"?grey[100]:grey[900]}>
                    صالحه عباسی
                </Typography>
                <Typography variant="h6" sx={{ mx: 2 }} color={theme.palette.mode==="dark"?grey[100]:grey[900]}>{"}"}</Typography>
            </Box>

            <Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="caption" sx={{ mx: 1 }} color="gray">{"["}</Typography>
                <Typography variant="caption" color={theme.palette.mode==="dark"?grey[500]:grey[800]}>
                    توسعه دهنده ی فول استک
                </Typography>
                <Typography variant="caption" sx={{ mx: 1 }} color="gray">{"]"}</Typography>
            </Box>
            <Box component="div" sx={{ display: "flex", alignItems: "center", justifyContent: "space-around"  , width:0.4,margin:"0 auto"}}>
                <IconButton aria-label="Github" size="small">
                    <a href="https://github.com/salehe291abbasi" rel="noopener noreferrer" target="_blank"><GitHub sx={{ color:theme.palette.mode==="dark" ?grey[500] :grey[900]}} /></a>
                </IconButton>
                <IconButton aria-label="Telegram" size="small"> 
                    <a href="https://web.telegram.org/?legacy=1#/im" rel="noopener noreferrer" target="_blank"><Telegram sx={{ color:theme.palette.mode==="dark" ?grey[500] :grey[900]}} /></a>
                </IconButton>
                <IconButton aria-label="Instagram" size="small">
                    <a href="https://www.instagram.com/saleheabbasi_/" rel="noopener noreferrer" target="_blank"><Instagram sx={{ color:theme.palette.mode==="dark" ?grey[500] :grey[900]}} /></a>
                </IconButton>
                <IconButton aria-label="Whatsapp" size="small">
                    <a href="https://whatsapp.com" rel="noopener noreferrer" target="_blank"><WhatsApp sx={{ color:theme.palette.mode==="dark" ?grey[500] :grey[900]}} /></a>
                </IconButton>
            </Box>
        </>
    );
};

export default SidebarHeader;
