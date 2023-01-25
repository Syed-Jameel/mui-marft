import { Star, Title } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Button, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AboutUs from "./AboutUs";
import Service from "./Service";
import Blog from "./Blog";
import Contact from "./Contact";


const useStyles = makeStyles((theme) => {
  return {
    main_wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
      height: "100vh",
      // backgroundColor: "#F8F3EC",
      backgroundColor: theme.palette.primary.background,
      color: theme.palette.primary.textColor,

      [theme.breakpoints.down("lg")]: {
        width: "100vw",
      },
      [theme.breakpoints.down("md")]: {
        width: "100vw",
      },
    },
    Heropage_content: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F8F3EC",
      [theme.breakpoints.down("lg")]: {
        width: "100vw",
      },
      [theme.breakpoints.down("md")]: {
        width: "100vw",
      },
    },
    details_box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "40px",
      paddingBottom: "40px",
      fontFamily: "Darker Grotesque",
      width: "100%",
      maxWidth: "1200px",
      gap: "120px",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      [theme.breakpoints.down("lg")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "70px",
      },
    },
    title: {
      fontSize: "55px",
      lineHeight: "50px",
      [theme.breakpoints.down("lg")]: {
        fontSize: "40px",
        lineHeight: "33px",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "40px",
        lineHeight: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        lineHeight: "30px",
      },
    },
    para: {
      fontSize: "17px",
      marginTop: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
    Hero_text: {
      width: "380px",
      [theme.breakpoints.down("lg")]: {
        width: "280px",
      },
      [theme.breakpoints.down("md")]: {
        width: "320px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "230px",
      },
    },
    detail_right_box: {
      textAlign: "start",
    },
    image_container: {
      display: "flex",
      gap: "10px",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      },
      [theme.breakpoints.down("lg")]: {
        display: "flex",
        flexDirection: "center",
        justifyContent: "center",
      },
    },
    img: {
      [theme.breakpoints.down("lg")]: {
        width: "220px",
      },
    },
    box_Details: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
      marginBottom: "20px",
      [theme.breakpoints.down("lg")]: {
        display: "block",
      },
      [theme.breakpoints.down("md")]: {
        display: "flex",
        marginBottom: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        display: "block",
        marginBottom: "0px",
      },
    },
    rating_box: {
      display: "flex",
      height: "45px",
      padding: "2px",
      [theme.breakpoints.down("lg")]: {
        display: "flex",
        justifyContent: "left",
        alignItems: "start",
      },
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "left",
        alignItems: "start",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
        display: "flex",
        justifyContent: "left",
        alignItems: "start",
      },
    },
    rating_count: {
      display: "flex",
      marginTop: "12px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "20px",
        marginTop: "0px",
      },
    },
  };
});
const Hero = () => {
  const {
    main_wrapper,
    Heropage_content,
    details_box,
    detail_right_box,
    start_Button,
    rating_box,
    box_Details,
    img,
    image_container,
    Hero_text,
    rating_count,
    title,
    para,
  } = useStyles();

  return (
    <>
    {/* hero */}
    <Box className={main_wrapper}>
      <Box className={details_box}>
        <Box className={detail_right_box}>
          <Box className={Hero_text}>
            <p className={title}>Increase your performance on social media</p>
            <p className={para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor.{" "}
            </p>
          </Box>
          <Box className={box_Details}>
            <Box>
              <Button
                sx={{
                  backgroundColor: "#F6D88C",
                  padding: "10px",
                  borderRadius: "10px",
                  color: "#181817",
                }}
              >
                GET STARTED
              </Button>
            </Box>

            <AvatarGroup max={4} className={rating_box}>
              <Avatar alt="Remy Sharp" src="./Image/avatar-1.jpeg" />
              <Avatar alt="Travis Howard" src="./Image/avatar-2.jpeg" />
              <Avatar alt="Cindy Baker" src="./Image/avatar-3.jpeg" />
              <Avatar alt="Agnes Walker" src="./Image/avatar-4.jpeg" />
              <Avatar alt="Trevor Henderson" src="./Image/avatar-1.jpeg" />
            </AvatarGroup>

            <Box className={rating_count}>
              <Star sx={{ color: "#F6D88C" }} />
              Rating
              <br /> 5.00
            </Box>
          </Box>
        </Box>
        <Box className={image_container}>
          <Box>
            <img src="./images/hero01.png" className={img} />
          </Box>
          <Box>
            <img src="./images/hero02.png" className={img} />
          </Box>
        </Box>
      </Box>
    </Box>
    
    {/* about */}
    <AboutUs/>

    {/* Service */}
    <Service/>

    {/* Blog */}
    <Blog/>

    {/* contact */}
    <Contact/>


    </>
  );
};

export default Hero;
