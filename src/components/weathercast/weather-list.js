import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index';

class WeatherList extends Component {

    renderWeatherList(cityData) {
        const name = cityData.city.name;

        return (
            <tr key={naem}>
                <td>{name}</td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>temprature</th>
                        <th>Humidity</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeatherList) }
                </tbody>
            </table>
       );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);