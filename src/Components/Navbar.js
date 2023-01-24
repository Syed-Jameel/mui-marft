import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Image } from "mui-image";
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    navbar: {
      background: "#F8F3EC !important",
      boxShadow: "unset !important",
      boxSizing: "border-box",
      padding: "0.5rem",
      position: "static",
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
        color: "#F6D88C",
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
      color: "#181817",
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
      width: "70% !important",
      paddingLeft: "2rem",
    },
    wrapper: {
      display: "flex",
      flexDirection: (props) => props.flexDirection,
      justifyContent: "left",
      alignItems: "center",
      width: "100%",
    },
  };
});

const Navbar = ({ flexDirection }) => {
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
  } = useStyles({ flexDirection: flexDirection });

  const [value, setValue] = useState();

  const them = useTheme();
  console.log(them);
  const isMatch = useMediaQuery(them.breakpoints.down("lg"));
  console.log(isMatch);

  // const PAGES = ["About us", "Service", "Blog", "Contact"];

  return (
    <>
      <AppBar className={navbar}>
        <Toolbar>
          {isMatch ? (
            <>
              <DrawerComponent />
              <Box className={brand_small_screen} component={Link} to="/mui-marft">
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
                <Box className={links_wrapper}>
                  <Tabs
                    className={tabs}
                    value={value}
                    onChange={(e, value) => setValue(value)}
                  >
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
                    <Tab
                      label="Blog"
                      component={Link}
                      to="/blog"
                      className={tab_style}
                    />
                    <Tab
                      label="Contact"
                      component={Link}
                      to="/contact"
                      className={tab_style}
                    />
                  </Tabs>
                </Box>

                <Box className={brand_wrapper} component={Link} to="/mui-marft">
                  <Typography className={brand}>Marft</Typography>
                  <Typography className={dot_style}>.</Typography>
                </Box>

                <Box className={icons_wrapper}>
                  <Box className={icons_box}>
                    <a target="_blank" href="https://www.facebook.com/">
                      <Image src="./images/facebook.png" className={icons} />
                    </a>
                    <a target="_blank" href="https://www.google.com/">
                      <Image src="../images/icon.png" className={icons} />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/">
                      <Image src="./images/instagram.png" className={icons} />
                    </a>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
