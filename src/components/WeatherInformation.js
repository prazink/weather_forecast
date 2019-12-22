import React from "react";
import PropTypes from 'prop-types';

const WeatherInformation = (props) => {
    const { weatherInformation, temperatureInformation, error } = props;
    const { temp, temp_min, temp_max} = temperatureInformation;
    // Error message when input value is not valid or empty
    if(error){
        return (<div className= "container">
            <div  id="weatherInfoError">
                {error}
            </div>
        </div>);
    }

    const {city, weather } =  weatherInformation;
    const { icon, description } = weather[0];

    return ( city && description &&
        <div className= "container">
            <div className= "city">
                <div className= "cityName">
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


WeatherInformation.propTypes = {
    city: PropTypes.string,
    temperature: PropTypes.number,
    weatherInformation: PropTypes.shape({
        city: PropTypes.string,
        weather: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            description: PropTypes.string
        })
    ),
    }),
    error: PropTypes.string,
};

WeatherInformation.defaultProps = {
    temperature: 0,
    weatherInformation: {
        city: '',
        weather: []
    },
    error: ''
}

export default WeatherInformation;