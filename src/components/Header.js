import React from "react";
import { makeStyles, createStyles, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    link: {
      margin: theme.spacing(1),
      color: "#676767"
    },
    container: {
      display: "flex",
      justifyContent: "flex-end",
      backgroundColor: "f0f0f0"
    }
  })
);

const Header = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.container}>
      <Link variant="body2" className={classes.link}>
        Pops
      </Link>
      <Link variant="body2" className={classes.link}>
        Link
      </Link>
      <Link variant="body2" className={classes.link}>
        Link
      </Link>
    </Typography>
  );
};

export default Header;
