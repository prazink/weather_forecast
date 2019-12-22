import React from "react";

const WeatherInformation = (props) => {
    const { weatherInformation, temperatureInformation } = props;
    const { temp, temp_min, temp_max} = temperatureInformation;
    const {city, weather } =  weatherInformation;
    const { icon, description } = weather[0];
    
    return ( city && description &&
        <div className= "container">
            <div className= "city">
                <div className= "temperature">
                    <h1 id="weatherInfoCity">{city}</h1>
                </div>
                {icon && <img src={icon} alt={city} />}
                <div className= "temperature" id="weatherInfoTemperature">
                    {`${temp}° C`}
                </div>
                <div className= "description" id="weatherInfoDescription">
                    {description}
                </div>
                <div className= "temperatureMin" id="weatherInfoTemperatureMinMax">
                    {`${temp_min}° C`} | {`${temp_max}° C`}
                </div>
            </div>
        </div>);
};


export default WeatherInformation;