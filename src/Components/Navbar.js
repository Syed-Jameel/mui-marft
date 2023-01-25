import React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import { useTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import { ColorModeContext } from "../App";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  useMediaQuery,
  Container,
} from "@mui/material";

import { Image } from "mui-image";
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";

const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      background: theme.palette.primary.main,
      boxShadow: "unset !important",
      boxSizing: "border-box",
      padding: "0.5rem",
      position: "static",
      borderBottom: "1.5px solid #6F6F6F",
    },
    links_wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "33.33%",
    },
    tabs: {
      textColor: "#6F6F6F",
    },
    tab_style: {
      textTransform: "initial !important",
      fontSize: "1rem !important",
      "&:hover": {
        color: theme.palette.primary.linkTextColor,
      },
    },
    brand_wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "33.33%",
      textDecoration: "none",
    },
    brand: {
      fontFamily: "Darker Grotesque",
      fontStyle: "normal",
      fontWeight: "600 !important",
      fontSize: "2.2rem !important",
      lineHeight: "5rem",
      color: theme.palette.primary.logoTextColor,
    },
    brand_small_screen: {
      marginLeft: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
    },
    dot_style: {
      fontSize: "2.5rem !important",
      color: "#F6D88C !important",
    },
    icons_wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "33.33%",
    },
    icons_box: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "100%",
    },
    icons: {
      color: theme.palette.primary.logoTextColor,
      border: "1px solid #6F6F6F",
      borderRadius: "50%",
      padding: "8px",
      margin: "10px",
    },
    wrapper: {
      display: "flex",
      flexDirection: (props) => props.flexDirection,
      justifyContent: "left",
      alignItems: "center",
      width: "100%",
    },
    border:{}
  };
});

const Navbar = ({ flexDirection, obj , toggleColorMode}) => {

  const mode = useContext(ColorModeContext);
  const {
    tabs,
    brand,
    navbar,
    links_wrapper,
    brand_wrapper,
    icons_wrapper,
    icons_box,
    dot_style,
    icons,
    tab_style,
    brand_small_screen,
    wrapper,
    links_Logo_wrapper,
    border
  } = useStyles({ flexDirection: flexDirection });

  // const [value, setValue] = useState();

  const theme = useTheme();
  // console.log(them);
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  // console.log(isMatch);

  // const PAGES = ["About us", "Service", "Blog", "Contact"];

  return (
    <>
      {" "}
      <Container maxWidth="lg" className={border}>
        <AppBar className={navbar}>
          <Toolbar>
            {isMatch ? (
              <>
                <DrawerComponent />
                <Box
                  className={brand_small_screen}
                  component={Link}
                  to="/"
                >
                  <Typography variant="h5" className={brand}>
                    Marft
                  </Typography>
                  <Typography variant="h5" className={dot_style}>
                    .
                  </Typography>
                </Box>
              </>
            ) : (
              <>
                <Box className={wrapper}>
                  {obj?.first === "logo" ? (
                    <Logo />
                  ) : obj?.first === "links" ? (
                    <Links />
                  ) : null}
                  {obj?.second === "logo" ? (
                    <Logo />
                  ) : obj?.second === "links" ? (
                    <Links />
                  ) : null}

                  <Box className={icons_wrapper}>
                    <Box className={icons_box}>
                    
        
          
                      <a target="_blank" href="https://www.facebook.com/">
                        {/* <Image src="./images/facebook.png" className={icons} /> */}
                        <FacebookIcon className={icons} />
                      </a>
                      <a target="_blank" href="https://www.google.com/">
                        {/* <Image src="./images/google.png" className={icons} /> */}
                        <PublicIcon className={icons} />
                      </a>
                      <a target="_blank" href="https://www.instagram.com/">
                        {/* <Image src="./images/instagram.png" className={icons} /> */}
                        <InstagramIcon className={icons} />
                      </a>
                    </Box>
                  </Box>

                  {mode} mode
                  <IconButton sx={{ ml: 1 }} onClick = {() => toggleColorMode()}>
                  {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                  </IconButton>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Navbar;

const Links = () => {
  const { tabs, links_wrapper, tab_style } = useStyles();

  return (
    <Box className={links_wrapper}>
      <Tabs className={tabs}>
        <Tab
          label="About Us"
          component={Link}
          to="/about-us"
          className={tab_style}
        />
        <Tab
          label="Service"
          component={Link}
          to="/service"
          className={tab_style}
        />
        <Tab label="Blog" component={Link} to="/blog" className={tab_style} />
        <Tab
          label="Contact"
          component={Link}
          to="/contact"
          className={tab_style}
        />
      </Tabs>
    </Box>
  );
};
const Logo = () => {
  const { brand, brand_wrapper, dot_style } = useStyles();

  return (
    <Box className={brand_wrapper} component={Link} to="/">
      <Typography className={brand}>Marft</Typography>
      <Typography className={dot_style}>.</Typography>
    </Box>
  );
};
