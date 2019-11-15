import React, { Component } from "react";
import Header from "../Header/Header";
import { Table } from "react-bootstrap";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
      weatherReport: ""
    };
  }

  async componentDidMount() {
    let currentIP = await fetch(`https://api.ipify.org/?format=json`, {
      method: "GET"
    });
    let ip = await currentIP.json();
    let response = await fetch(
      `https://weatherstack.com/ws_api.php?ip=${ip.ip}`,
      {
        method: "GET"
      }
    );
    const weatherReport = await response.json();
    this.setState({ weatherReport, ip: ip.ip });
  }
  render() {
    return (
      <div>
        <Header isAuthenticated={this.state.isAuthenticated} />
        <h1>Weather Report</h1>
        <p>
          Location
          <span>
            {this.state.weatherReport &&
              this.state.weatherReport.location &&
              this.state.weatherReport.location.name}
          </span>
        </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>*</th>
              <th>*</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CURRENT IP:</td>
              <td>{this.state.ip}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>
                {this.state.weatherReport &&
                  this.state.weatherReport.location.name}
              </td>
            </tr>
            <tr>
              <td>LAT</td>
              <td>
                {this.state.weatherReport &&
                  this.state.weatherReport.location.lat}
              </td>
            </tr>
            <tr>
              <td>LAT</td>
              <td>
                {this.state.weatherReport &&
                  this.state.weatherReport.location.lon}
              </td>
            </tr>
            <tr>
              <td>CloudCover</td>
              <td>
                {this.state.weatherReport &&
                  this.state.weatherReport.current.cloudcover}
              </td>
            </tr>
            <tr>
              <td>Feelslike</td>
              <td>
                {this.state.weatherReport &&
                  this.state.weatherReport.current.feelslike}
              </td>
            </tr>
            <tr>
              <td>humidity</td>
              <td>
                {this.state.weatherReport &&
                  this.state.weatherReport.current.humidity}
              </td>
            </tr>
            <tr>
              <td>Wind Direction</td>
              <td>
                {this.state.weatherReport &&
                  this.state.weatherReport.current.wind_dir}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Weather;
