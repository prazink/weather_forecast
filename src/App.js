import React from 'react';
import data from './data';
import Header from './components/Header';
import CitySearch from "./components/CitySearch";
import WeatherInformation from "./components/WeatherInformation";


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
    if(!city){
      this.setState({error: 'Please enter a valid city name'});
      return;
    }
    
    const weatherInfo = data.find(d => 
      d.name.toLowerCase() === city.toLowerCase().trim());

    if(weatherInfo){
      const { name, weather, main } = weatherInfo;
      this.setState({
        weatherInformation: {
          city: name, 
          weather,
        },
        main,
        error: ''
      });
      } else{
        this.setState({
          error: `Couldn't find weather information for ${city}!`
        });
      }
    
  };

  onCityUpdate = (event) => {
    this.setState({ city: event.target.value })
  }

  render () {
    const { onCityUpdate, state, getWeatherInfo } = this;
    const { city, main, weatherInformation, error } = state;

    return (
      <div className= "wrapper">
        <div className= "mainWrapper">
          <div className= "innerWrapper">
            <div className= "weatherDesc">
              <Header
                title="Weather Forecast"
                subTitle="Find out your current city, temperature and conditions" />
              <CitySearch
                onCityUpdate={onCityUpdate}
                city={city}
                getWeatherInfo={getWeatherInfo} />
            </div>
            <div className="weather_info">
              <WeatherInformation
                city={city}
                temperatureInformation={main}
                weatherInformation={weatherInformation}
                error={error}
              />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
