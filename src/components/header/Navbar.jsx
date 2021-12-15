import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(92),
    display: "flex",
  },
  bgColorNavbar: {
    color: "#fff",
    backgroundColor: "#0b112e",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  logoLink: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(20),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

const Navbar = () => {
  
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.bgColorNavbar}>
      <CssBaseline />
      <Toolbar>
        <Link to="/" className={classes.logoLink}>
          <Typography variant="h4" className={classes.logo}>
             Movies App
          </Typography>   
        </Link>
        
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/favourites" className={classes.link}>
              Favourites
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
