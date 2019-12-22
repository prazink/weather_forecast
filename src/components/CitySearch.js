import React from "react";


const CitySearch = () => {
    return (
      <div  className="mCitySearch">
        <input
          id="cityInput"
          type="text"
          name="city"
          placeholder="Enter your City..."
          value=''
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