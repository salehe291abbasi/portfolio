import Grid from "@mui/material/Unstable_Grid2";

const PagesContainer = ({ children }) => {
    return (
        <Grid
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
            sx={{ backgroundColor: "white" ,height:"100vh",overflowY:"hidden",overflowX:"hidden" }}
        >
            {children}
        </Grid>
    );
};

export default PagesContainer;
