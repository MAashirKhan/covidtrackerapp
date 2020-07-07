import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// importing Logo
import logo from './Covid19-Tracker.svg';

// import App.css
import './App.css'

const useStyles = makeStyles( () => ({
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
      <AppBar position="static" spacing={3} style={{
        backgroundColor: "rgba(255,255,255, 0.6)",
        alignItems: "center",
        borderBottom: "2px solid black",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        boxShadow: "0 0 10px #000000",
      }}>
        <Toolbar >
                <img className="covidlogo" src={logo} alt="CovidLogo"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
