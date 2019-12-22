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

  onCityUpdate = (event) => {
    this.setState({ city: event.target.value })
  }

  render () {
    const { onCityUpdate, state } = this;
    const { city } = state;

    return (
      <>
      
      <Header
        title="Weather Forecast"
        subTitle="Find out your current city, temperature and conditions" />
      <CitySearch
        onCityUpdateMethod={onCityUpdate}
        city={city} />

      </>
    );
  }
}

export default App;
