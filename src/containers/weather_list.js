import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;

    const list = (
      <div className="row" key={cityData.city.name}>
        <div className="col">
          <GoogleMap lat={lat} lon={lon} />
        </div>
        <div className="col">
          <Chart data={temps} color='green' />
        </div>
        <div className="col">
          <Chart data={pressures} color='red' />
        </div>
        <div className="col">
          <Chart data={humidities} color='blue' />
        </div>
      </div>
    );
    return list;
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            City
          </div>
          <div className="col">
            Temperature
          </div>
          <div className="col">
            Pression
          </div>
          <div className="col">
            Humidité
          </div>
        </div>
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
