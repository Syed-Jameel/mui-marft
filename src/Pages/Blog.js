import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Image } from "mui-image";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => {
  return {
    main_wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "100%",
      padding: "7rem 0",
      [theme.breakpoints.down("lg")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minwWidth: "100%",
      },
    },
    left_box: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "50%",
      paddingRight: "1rem",
      [theme.breakpoints.down("lg")]: {
        maxWidth: "100%",
        paddingRight: "0rem",
      },
    },
    right_box: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "50%",
      paddingLeft: "1rem",
      [theme.breakpoints.down("lg")]: {
        maxWidth: "100%",
        paddingLeft: "0rem",
      },
    },
    btn_wrapper: {
      display: "flex",
      justifyContent: "center",
      maxWidth: "100%",
    },
    img_style: {
      maxHeight: "250px",
      padding: "2rem 0",
    },
    btn_read: {
      backgroundColor: "#181817 !important",
    },
    heading: {
      paddingBottom: "2rem",
      fontFamily: "Darker Grotesque",
      fontStyle: "normal",
      fontWeight: "900",
      fontSize: "2rem",
      lineHeight: "2rem",
      display: "flex",
      alignItems: "flex-end",
      [theme.breakpoints.down("sm")]: {
        paddingBottom: "0.5rem",
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
      },
    },
    text_wrapper: {
      display: "flex",
      justifyContent: "left",
      flexDirection: "column",
    },
    date: {
      color: "#F29764",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "1rem",
      lineHeight: "30px",
    },
    para: {
      color: "#6E6E6E",
      paddingBottom:"1rem",
    },
    read_more: {
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "1.2rem",
      lineHeight: "1.9rem",
      display: "flex",
      alignItems: "flex-end",
      textTransform: "uppercase",
      color: "#181817",
      padding: "1rem 0",
    },
  };
});

const Blog = () => {
  const {
    main_wrapper,
    left_box,
    right_box,
    btn_wrapper,
    img_style,
    btn_read,
    heading,
    text_wrapper,
    date,
    para,
    read_more,
  } = useStyles();

  return (
    <Container maxWidth="lg">
      <Box className={main_wrapper}>
        <Box className={left_box}>
          <Box sx={{ height: "100px" }}>
            <Typography variant="h4" className={heading}>
              Read Our Blogs
            </Typography>
            <Typography variant="string">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              unde.
            </Typography>
          </Box>
          <Image src="./images/Readimg01.png" className={img_style} />
          <Typography variant="string" className={date}>
            April 30, 2020{" "}
          </Typography>
          <Typography variant="h6">
            How to collaborate with companies
          </Typography>
          <Typography variant="string" className={para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error
            in temporibus consequatur. Quae, corporis.
          </Typography>
          <Link color="inherit" className={read_more}  to="/mui-marft">
            READ MORE
          </Link>
        </Box>
        <Box className={right_box}>
          <Box className={btn_wrapper}>
            <Box
              sx={{
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Button variant="contained" size="large" className={btn_read} component={Link} to="/mui-marft">
                READ ALL BlOGS
              </Button>
            </Box>
          </Box>
          <Box className={text_wrapper}>
            <Image src="./images/Readimg02.png" className={img_style} />
            <Typography variant="string" className={date}>
              April 30, 2020{" "}
            </Typography>
            <Typography variant="h6">About social media advertising</Typography>
            <Typography variant="string" className={para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              error in temporibus consequatur. Quae, corporis.
            </Typography>
            <Link to="/mui-marft" color="inherit" className={read_more} >
              READ MORE
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Blog;
