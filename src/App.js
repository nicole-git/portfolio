import React from "react";
import Header from "./components/Header";
import { makeStyles, createStyles, Link, Typography } from "@material-ui/core";
import Project from "./components/Project";

const useStyles = makeStyles(theme =>
  createStyles({
    top: {
      margin: theme.spacing(1),
      backgroundColor: "f0f0f0",
      height: 275,
      padding: 50
    },
    hi: {
      color: "#C96880",
      fontSize: 48,
      fontWeight: 700,
      display: "flex",
      justifyContent: "flex-start"
    },
    bottom: {
      display: "flex",
      backgroundColor: "#d78da0",
      borderTopRightRadius: "7vw",
      borderTopLeftRadius: "7vw",
      padding: "5vw",
      justifyContent: "space-between"
    }
  })
);

function App() {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <div className={classes.top}>
        <Typography className={classes.hi}>Hi, I'm Nicole</Typography>
        <Typography>Here's some text</Typography>
      </div>
      <div className={classes.bottom}>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </div>
    </div>
  );
}

export default App;
