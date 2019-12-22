import React from 'react';
import Header from './components/Header';
import CitySearch from "./components/CitySearch";


class App extends React.Component {

  render () {
    return (
      <>
      
      <Header
        title="Weather Forecast"
        subTitle="Find out your current city, temperature and conditions" />
      <CitySearch />
      </>
    );
  }
}

export default App;
