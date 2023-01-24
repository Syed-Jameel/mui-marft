import React from "react";
import { Box, Container, Typography, Link, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Image } from "mui-image";

const useStyles = makeStyles((theme) => {
  return {
    footer_style: {
      marginTop: "calc(10% + 60px)",
      width: "100%",
      position: "fixed",
      bottom: 0,
      maxWidth: "100%",
      backgroundColor:"#181817 !important",
      color:"white !important",
    },
    footer_wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding:"1.5rem 0.5rem",
      color:"#6F6F6F",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        minwWidth: "100%",
        padding:"0.5rem 0.5rem",
      },
  
    },
   
  };
});

const Read = () => {
  const { footer_style, footer_wrapper } = useStyles();

  return (
    <Paper className={footer_style} component="footer">
      <Container maxWidth="lg">
        <Box className={footer_wrapper}>
          <Box>
            <Typography variant="subtitle2" >
              ©Marft 2021. All rights reserved.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">
              Privacy Policy | Terms Of Conditions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Read;
