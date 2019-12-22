import React from "react";


const CitySearch = props => {
    const { city, getWeatherInfo, onCityUpdateMethod } = props;

    return (
      <div  className="CitySearch">
        <input
          id="cityInput"
          type="text"
          name="city"
          placeholder="Enter your City..."
          value={city}
          onChange={(event) => onCityUpdateMethod(event)}
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

  export default CitySearch;