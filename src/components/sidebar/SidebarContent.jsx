import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarFooter, SidebarTabs } from "./";

const SidebarContent = () => {
    return (
        <Box
            sx={{
                justifyContent: "center",
                textAlign: "center",
                height:"100vh",
                pt:1,
                overflowY:"auto",
                overflowX:"hidden"
            }}
        >
            <SidebarHeader />

            <Divider variant="middle" color={grey[900]} />

            <SidebarTabs />

            <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

            <SidebarFooter />
        </Box>
    );
};

export default SidebarContent;
