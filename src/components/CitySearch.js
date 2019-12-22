import React from "react";


const CitySearch = props => {
    const { city, onCityUpdateMethod } = props;

    return (
      <div  className="CitySearch">
        <input
          id="cityInput"
          type="text"
          name="city"
          placeholder="Enter your City..."
          value={city}
          onChange={(event) => onCityUpdateMethod(event)}
         
        />
        <button 
          id="getWeather"
          >
            Get Weather
          </button>
      </div>
    )
  };

  export default CitySearch;