import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Box, Button,Container } from "@mui/material";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => {
  return {
    main_wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height:"100vh",
      backgroundColor:"#181817",
      padding:"6rem 0"
    },
    main: {
      display: "flex",
      justifyContent: "space-between",
      alignItems:"center",
      [theme.breakpoints.down("md")]: {
        textAlign: "center",
      },
      [theme.breakpoints.down("sm", "xs")]: {
        display: "inline",
        textAlign: "center",
        padding: 20,
      },
    },
    Img_main: {
      position: "relative",

      [theme.breakpoints.up("xs", "sm")]: {
        padding: 22,
      },
      [theme.breakpoints.down("xs")]: {
        padding: 22,
      },
    },
    img_big: {
      position: "absolute",
      top: "30%",
      left: "60%",

      [theme.breakpoints.down("md")]: {
        width: "350px",
      },

      [theme.breakpoints.down("sm")]: {
        top: "40%",
        left: "44%",
        width: 230,
      },
      [theme.breakpoints.down("xs")]: {
        top: "40%",
        left: "44%",
        width: 120,
      },
    },
    big_img: {
      width: "90%",
    },
    about_text: {
      color:"white",
      [theme.breakpoints.down("xs", "sm",'md')]: { padding: 22 },
    },
    circle_text: {
      display: "flex",
      marginTop: "20px",
    },
    men_laptop_img: {
      backgroundImage: `url("./images/men-img.png")`,
      backgroundRepeat: "no-repea",
      backgroundSize: "cover",
      backgroundPosition: "center",
      maxwidth: "100%",
      height: "100vh",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      [theme.breakpoints.down("md", "sm")]: {
        width: "100%",
      },
    },
    btn_aboutus:{
       backgroundColor:"white !important",
       color:"#181817 !important",
       fontSize:"1rem",
       fontWeight:"bold",
       fontSize:"0.9rem !important",
       borderRadius:"0.5rem !important",
       padding:"1rem 2rem"
    },
    men_Circle_one: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
  };
});
const AboutUs = () => {
  const {
    main_wrapper,
    main,
    Img_main,
    img_big,
    about_text,
    circle_text_main,
    circle_text,
    text_head,
    big_img,
    men_laptop_img,
    men_Circle_one,
    btn_aboutus
  } = useStyles();

  return (
    <>
     <Container className={main_wrapper} maxWidth="100vw">
     <Container maxWidth="lg">
        <Box className={main}>
          <Box className={Img_main}>
            <img src="./images/big-mobile.png" alt="" className={big_img} />
            <img src="./images/small-mobile.png" className={img_big} alt="" width={305} />
          </Box>
          <Box className={about_text}>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h3">Take your social</Typography>
              <Typography variant="h3">media marketing to</Typography>
              <Typography variant="h3">the next level </Typography>
            </Box>
            <Box className={circle_text_main}>
              <Box className={circle_text}>
                <img src="./images/bullet-img.png" alt="" />
                <Typography sx={{ marginLeft: "20px" }}>
                  Leo erat magna feugiat non enim
                </Typography>
              </Box>
              <Box className={circle_text}>
                <img src="./images/bullet-img.png" alt="" />
                <Typography sx={{ marginLeft: "20px" }}>
                  Leo erat magna feugiat
                </Typography>
              </Box>
              <Box className={circle_text}>
                <img src="./images/bullet-img.png" alt="" />
                <Typography sx={{ marginLeft: "20px" }}>
                  Leo erat magna non enim
                </Typography>
              </Box>
            </Box>
            <Box className={text_head}>
              <Typography sx={{ my: "50px" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br></br>
                Aspernatur, Lorem ipsum, dolor sit amet ipsum,<br></br>{" "}
                consectetur adipisicing elit. Aspernatur adipisicing .
              </Typography>
            </Box>
            <Box>
              <Button variant="contained" className={btn_aboutus} component={Link} to="/marft">About Us</Button>
            </Box>
          </Box>
        </Box>
      </Container>
     </Container>

      <Box className={men_laptop_img}>
        <Box>
          <Box className={men_Circle_one}>
            <img src="./images/btn-circle.png" alt="one" />
            <Box sx={{ marginLeft: "-85PX", marginTop: "10px" }}>
              <img src="./images/btn-arrow.png" alt="two" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutUs;
