import { useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import { grey , orange } from "@mui/material/colors";
import {useTheme} from "@mui/material/styles"
import MainContext from "../../context";
import { tabsData } from "../data/tabsData.sidebar";
import "./style.css"
const SidebarTabs = () => {
    const { pageNumber, handlePageNumber, setDrawerOpen } =
        useContext(MainContext);
    const theme = useTheme()
    const data = tabsData();
    

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            allowScrollButtonsMobile
            value={pageNumber}
            onChange={handlePageNumber}
            // indicatorColor="secondary"
            // textColor="secondary"
           className={theme.palette.mode==="light"?"light-mode" :""}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={tab.icon}
                    iconPosition="start"
                    sx={{
                        backgroundColor:theme.palette.mode==="dark"?grey[800]:grey[500],
                        color:theme.palette.mode==="dark"?grey[400]:grey[800],
                        borderRadius: 2,
                        my: 0.5,
                        mx: 1,
                        "&.MuiTab-root": {
                            minHeight: 6,
                        },
                    }}
                    onClick={() => setDrawerOpen(false)}
                    {...tab}
                />
            ))}
        </Tabs>
    )
};

export default SidebarTabs;
