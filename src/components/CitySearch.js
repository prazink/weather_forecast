import React from "react";
import PropTypes from 'prop-types';


const CitySearch = props => {
    const { city, getWeatherInfo, onCityUpdate } = props;

    return (
      <div className="citySearch">
        <input
          id="cityInput"
          type="text"
          name="city"
          placeholder="Enter your City..."
          value={city}
          onChange={(event) => onCityUpdate(event)}
          onKeyPress={e => { 
            if(e.key === 'Enter'){
              getWeatherInfo();
            }
          }
        }
        />
        <button 
          id="getWeather"
          onClick={getWeatherInfo}
          >
            Get Weather
          </button>
      </div>
    )
  };

  CitySearch.propTypes = {
    city: PropTypes.string,
    getWeatherInfo: PropTypes.func.isRequired,
    onCityUpdate: PropTypes.func.isRequired
  };
  
  CitySearch.defaultProps = {
    city: ''
  };
  
  export default CitySearch;