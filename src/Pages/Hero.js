import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    main_wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "100%",
      padding: "7rem 0",
    },
  };
});
const Hero = () => {

  const {
    main_wrapper,
  } = useStyles();

  return (
    <div className={main_wrapper}>
      <h1>Hero Component</h1>
    </div>
  )
}

export default Hero
