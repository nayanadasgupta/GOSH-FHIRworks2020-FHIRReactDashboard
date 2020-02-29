import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Number from "./components/Number";
import {patientJSONtoList} from "./utils";

const https = require("https");

const options = {
    agent: new https.Agent({
        rejectUnauthorized: false
    })
};

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
    return(<Number allPatients={this.state.patients}/>)
  }
}

export default App;
