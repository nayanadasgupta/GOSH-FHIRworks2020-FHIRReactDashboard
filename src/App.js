import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";

import logo from './logo.svg';
import './App.css';
import Number from "./components/Number";
import ChartPie from "./components/PieChart";
import {
    disLifeGender, disLifeRace,
    findGenderProportions,
    findLanguageProportions,
    patientJSONtoList,
    qualLifeGender, qualLifeRace
} from "./utils";
import {findRaceProportions} from "./utils"
import {findPatientCount} from "./utils";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import ChartBar from "./components/ChartBar";
import ChartArea from "./components/ChartArea";
const https = require("https");

const options = {
    agent: new https.Agent({
        rejectUnauthorized: false
    })
};

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));


class App extends Component {
  constructor() {
      super();
      this.state = {
          patients: ['1', '2', '3']
      };
  }
  componentDidMount() {
    fetch("https://localhost:5001/api/Patient/",options)
        .then(response => response.json())
        .then(data => {
          this.setState(
              {patients: patientJSONtoList(data)}
              )
        })
    }

  render() {
    return(
        <div>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        FHIR Overview
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={3} >
                <Grid item xs ={3}>
                    <Paper padding={2} >
                        <Number data={findPatientCount(this.state.patients)}/>
                    </Paper>
                </Grid>
                <Grid item xs ={9}>
                    <Paper padding={2} >
                        <ChartBar dataName = "Race" data={findRaceProportions(this.state.patients)}/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper padding={2}>
                        <ChartPie dataName = "Gender" data={findGenderProportions(this.state.patients)}/>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper padding={2}>
                        <ChartBar dataName = "Average Quality Adjusted Life Years By Gender" data={qualLifeGender(this.state.patients)}/>
                    </Paper>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs = {12}>
                        <Paper padding={2}>
                            <ChartArea dataName = "Languages" data={findLanguageProportions(this.state.patients)}/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs = {12}>
                        <Paper padding={2}>
                            <ChartBar dataName = "Average Disability Adjusted Life Years By Gender" data={disLifeGender(this.state.patients)}/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs = {6}>
                        <Paper padding={2}>
                            <ChartArea dataName = "Average Disability Adjusted Life Years By Race" data={disLifeRace(this.state.patients)}/>
                        </Paper>
                    </Grid>
                    <Grid item xs = {6}>
                        <Paper padding={2}>
                            <ChartArea dataName = "Average Quality Adjusted Life Years By Race" data={qualLifeRace(this.state.patients)}/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>)
  }
}

export default App;
