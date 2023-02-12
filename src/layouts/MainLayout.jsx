import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import Grid from "@mui/material/Unstable_Grid2";

import { LightTheme , DarkTheme } from "./theme";

//NOTE Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children  , mode}) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={mode==="dark"?DarkTheme :LightTheme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی یونس قربانی</title>
                    </Helmet>
            
                    <Grid container sx={{ height: "100vh" ,overflowY:"hidden" , overflowX:"hidden"}}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
