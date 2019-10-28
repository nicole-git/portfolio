import React from "react";
import Header from "./components/Header";
import { makeStyles, createStyles, Grid, Typography } from "@material-ui/core";
import Project from "./components/Project";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(() =>
  createStyles({
    app: { backgroundColor: "f0f0f0" },
    top: {
      padding: "64px 24px",
      backgroundColor: "f0f0f0",
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center"
    },
    hi: {
      color: "#C96880",
      fontSize: 56,
      fontWeight: 700,
      textAlign: "center",
      fontFamily: "Petit Formal Script"
    },
    border: {
      width: 120,
      margin: 10,
      borderBottom: "2px solid #edd7ca",
      display: "inline block"
    },
    text: {
      fontFamily: "Raleway",
      fontSize: 22,
      color: "#9e6410",
      marginTop: 64,
      maxWidth: 1200,
      textAlign: "center"
    },
    bottom: {
      margin: "0 auto",
      width: "100%",
      maxWidth: 1200
    },
    dialogTitle: {
      fontFamily: "Raleway",
      fontSize: 22,
      color: "#C96880"
    },
    image: {
      width: "100%"
    },
    dog: {
      color: "#676767",
      cursor: "pointer",
      fontWeight: 500,
      textDecoration: "underline"
    },
    a: {
      textDecoration: "none"
    }
  })
);

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.app}>
      <Header></Header>
      <div className={classes.top}>
        <Typography className={classes.hi}>Hi, I'm Nicole</Typography>
        <div className={classes.border}></div>
        <Typography className={classes.text}>
          I'm a frontend developer / UI designer from Trondheim. This page
          contains different projects I've made in my free time to practice my
          web development skills. Offline, I like to read, draw, watch movies,
          cook, and walk my{" "}
          <span className={classes.dog} onClick={handleClickOpen}>
            dog
          </span>
          .
        </Typography>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className={classes.dialogTitle}>
            {"This is Willow"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + "/img/sir.jpg"}
                alt="This is Willow"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              NICE
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Grid container className={classes.bottom} spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <a className={classes.a} href="https://nubkweb.github.io/cv">
            <Project
              image={process.env.PUBLIC_URL + "/img/cvaf.png"}
              title="Curriculum Vitae"
              description="My detailed online CV."
              tech="HTML, CSS, Jekyll/Liquid Template"
            ></Project>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a className={classes.a} href="https://nubkweb.github.io/bubble-game">
            <Project
              image={process.env.PUBLIC_URL + "/img/bubbleaf.png"}
              title="Bubble Game"
              description="A bubble-clicking game. The more bubbles you hit consecutively, the higher your score will be."
              tech="HTML, CSS, JavaScript"
            ></Project>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a
            className={classes.a}
            href="https://nubkweb.github.io/pusheen-memory"
          >
            <Project
              image={process.env.PUBLIC_URL + "/img/pusheenaf.png"}
              title="Memory Game"
              description="A simple memory game where the player has to match all the cards to win."
              tech="HTML, CSS, JavaScript"
            ></Project>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a className={classes.a} href="#">
            <Project
              image={process.env.PUBLIC_URL + "/img/hiaf.png"}
              title="Online Portfolio"
              description="A collection of my projects."
              tech="React, React hooks, Material UI"
            ></Project>
          </a>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <a className={classes.a} href="https://dribbble.com/imnicole">
            <Project
              image={process.env.PUBLIC_URL + "/img/squashpattern.png"}
              title="Illustrations"
              description="A collection of my illustrations."
              tech="Affinity Designer"
            ></Project>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
