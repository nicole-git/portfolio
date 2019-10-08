import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme =>
  createStyles({
    card: {
      maxWidth: "100%",
      backgroundColor: "#fff",
      shadows: ["none"],
      margin: 20,
      color: "#C96880"
    },
    media: {
      minHeight: 200,
      height: "15vw"
    },
    tech: {
      marginTop: 5
    }
  })
);

const Project = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography
            className={classes.tech}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {"Technologies: " + props.tech}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Project;
