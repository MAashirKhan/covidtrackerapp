import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// importing Logo
import logo from './Covid19 Tracker.png';

// import App.css
import './App.css'

const useStyles = makeStyles( (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Appbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={
          {
          backgroundColor: "rgba(0,0,0,0.6)",
          alignItems: "center",
          }
        }>
        <Toolbar >
                <img className="covidlogo" src={logo} alt="CovidLogo"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
