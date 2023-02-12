import { useEffect, useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { Typography, useTheme  } from "@mui/material";
import { DrawerActionButton } from "../components/drawer";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/component/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import {Home , About, Resome , Courses , Comments, Contact} from "../pages"
import useMediaQuery from "@mui/material/useMediaQuery";


function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode , setMode] = useState("dark");
    const themes = useTheme()
    const isMdUp = useMediaQuery(themes.breakpoints.up("md"))
    useEffect(()=>{ setMode("dark")},[])
    useEffect(()=>{
        if(isMdUp){
            setDrawerOpen(false)
        }
    },[isMdUp])
    const handleToggleMode = ()=>{
        setMode(prevMode => prevMode==="dark"?"light":"dark")
    }
    const handlePageNumber = (event, newPage) => {
        console.log(newPage);
        setPageNumber(newPage);
    };

    return (
        <MainContext.Provider
            value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen  , handleToggleMode}}
        >
            <MainLayout mode={mode}>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <DrawerActionButton />
                <PagesContainer>
                    <SwipeableViews
                        axis={themes.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={pageNumber}
                        onChangeIndex={handlePageNumber}
                    >
                            <Page pageNumber={pageNumber} index={0} >
                                <Home helmetTitle="پورتفولیو صالحه عباسی | خانه"/>
                            </Page>
                            <Page pageNumber={pageNumber} index={1}>
                                <About helmetTitle="پورتفولیو صالحه عباسی | درباره من"/>
                            </Page>
                            <Page pageNumber={pageNumber} index={2}>
                                <Resome  helmetTitle="پورتفولیو صالحه عباسی | رزومه"/>
                            </Page>
                            <Page pageNumber={pageNumber} index={3}>
                                <Courses helmetTitle="پورتفولیو صالحه عباسی | پروژه های من"/>
                            </Page>
                            <Page pageNumber={pageNumber} index={4}>
                                <Comments helmetTitle="پورتفولیو صالحه عباسی | مزیت ها"/>
                            </Page>
                            <Page pageNumber={pageNumber} index={5}>
                                <Contact helmetTitle="پورتفولیو صالحه عباسی | ارتباط با من"/>
                            </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default AppContainer;
