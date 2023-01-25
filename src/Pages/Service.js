import React from 'react'
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Grid,
  Typography,
  Box,
  CardActions,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const useStyles = makeStyles((theme) => {
  return {
    main_wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
      padding: "7rem 0",
    },
    main: {
      // backgroundColor: "#F8F3EC",
      maxWidth: "100%",
      height:"100vh",
      backgroundColor: theme.palette.primary.background,
      [theme.breakpoints.down("lg", "md", "sm")]: {
        height: "100%",
        padding :"20px"
      },
    },
    mainhead: {
      textAlign: "center",
      padding: "100px",

    },
    head_text: {
      marginTop: "10px",
    },
    threecard: {
      display: "flex",
      [theme.breakpoints.up("lg")]: {
        display :"flex",
        justifyContent:"center"
      },
    },
    first_card: {
      height: "350px",
      padding: "20px",
      color: theme.palette.primary.cardTextColor,
      [theme.breakpoints.down("md")]: {},
    },
    first_card_content: {
      [theme.breakpoints.down("lg", "md", "sm")]: {
        justifyContent:"center",
        textAlign: "center"
      },
    },
    third_card: {
      height: "350px",
      padding: "20px",
      color: theme.palette.primary.cardTextColor,
      [theme.breakpoints.down("lg")]: {
        
      },
    },
    heading:{
      color: theme.palette.primary.textColor,
    }
  };
});
const Service = () => {

  const {
    main_wrapper,
    main,
    mainhead,
    head_text,
    threecard,
    first_card,
    third_card,
    first_card_content,
    heading
  } = useStyles();

  return (
    <>
    <Grid className={main}>
      <Box className={mainhead}>
        <Typography variant="h3" className={heading}>
          What we provide
        </Typography>
        <Box className={head_text}>
          <Typography color="text.secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem qui mollitia ipsa.
          </Typography>
          <Typography color="text.secondary">
            Non nisi tincidunt ut elementum turpis
          </Typography>
        </Box>
      </Box> 

      <Grid container spacing={3} className={threecard}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card  className={first_card}>
            <Grid sx={{ padding: "20px" }} className={first_card_content}>
              <Avatar src="./images/squar.png" />
            </Grid>
            <CardContent className={first_card_content}>
              <Typography variant="h3">Social</Typography>
              <Typography variant="h3">advertising</Typography>

              <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet  <br />
                Lorem ipsum dolor si.
              </Typography>
            </CardContent>
            <CardActions className={first_card_content}>
              <Button
                sx={{ fontWeight: "bold" }}
                size="small"
                variant="string"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card sx={{ backgroundColor: "#EAE4DC" }} className={third_card}>
            <Grid sx={{ padding: "20px" }}>
              <Avatar src="./images/circle.png" />
            </Grid>
            <CardContent className={first_card_content}>
              <Typography variant="h3">Partnership</Typography>
              <Typography variant="h3">Manager</Typography>
              <Box>
              <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet  <br />
                Lorem ipsum dolor si.
              </Typography>
              </Box>
            </CardContent>
            <CardActions className={first_card_content}>
              <Button
                sx={{ fontWeight: "bold" }}
                size="small"
                variant="string"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Card  className={third_card}>
            <Grid sx={{ padding: "20px" }}>
              <Avatar src="./images/triangle.png" />
            </Grid>
            <CardContent className={first_card_content}>
              <Typography variant="h3">Content</Typography>
              <Typography variant="h3">Creations</Typography>
              <Box>
              <Typography color="text.secondary" sx={{ marginTop: "15px" }}>
                Lorem ipsum dolor sit amet. <br />
                Lorem ipsum dolor sit amet  <br />
                Lorem ipsum dolor si.
              </Typography>
              </Box>
            </CardContent>
            <CardActions className={first_card_content}>
              <Button
                sx={{ fontWeight: "bold" }}
                size="small"
                variant="string"
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default Service
