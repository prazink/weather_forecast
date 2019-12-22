import React from 'react';
import './sass/App.scss';
import data from './data';

import Header from './components/Header';
import CitySearch from "./components/CitySearch";


class App extends React.Component {
  constructor(props) {
    super(props);

    // Main App State
    this.state = {
      city: '',
      main: { 
        temp: 0,
        temp_min: 0,
        temp_max: 0,
        },
      weatherInformation: {
        city: '',
        weather:[{
        description: '',
        main: '',
        icon: '',
        }]
        },
      error: '',
    };
  }

  getWeatherInfo = () => {
    const { city } = this.state;
  
    const weatherInfo = data.find(d => d.name === city);
    const { name, weather, main } = weatherInfo;
    this.setState({
      weatherInformation: {
        city: name, 
        weather,
      },
      main,
      error: ''
    });
    
  };

  onCityUpdate = (event) => {
    this.setState({ city: event.target.value })
  }

  render () {
    const { onCityUpdate, state, getWeatherInfo } = this;
    const { city } = state;

    return (
      <div className= "wrapper">
        <div className= "mainWrapper">
          <div className= "innerWrapper">
            <div className= "WeatherDesc">
              <Header
                title="Weather Forecast"
                subTitle="Find out your current city, temperature and conditions" />
              <CitySearch
                onCityUpdateMethod={onCityUpdate}
                city={city} 
                getWeatherInfo={getWeatherInfo} />
            </div>
            
          </div>
        </div>
      </div>

    );
  }
}

export default App;
