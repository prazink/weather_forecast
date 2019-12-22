import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
    beforeEach(() => {

    });

  it('Can render App successfully', () => {
      // Arrange & Act
      const component = mount(
          <App />
      );

    // Assert
    expect(component.find('Header').length).toBe(1);
    expect(component.find('CitySearch').length).toBe(1);
    expect(component.find('WeatherInformation').length).toBe(1);
  });

  it('updates city name on input change', () => {
      // Arrange
      const component = mount(
          <App />
      );
    
    // Act & Assert
    expect(component.instance().state.city).toBe('');

    const cityInput = component.find("#cityInput");
    cityInput.simulate('change', { target: { value: 'Perth' } });

    expect(component.instance().state.city).toBe('Perth');
  });

  describe('getWeatherInfo', () => {
      it('updates the state with weather information when city\'s weather information is present in data', () => {
          // Arrange
      const component = mount(
          <App />
      );
    
    // Act & Assert
    expect(component.instance().state.city).toBe('');

    const cityInput = component.find("#cityInput");
    const getWeatherInfoButton = component.find("#getWeather");
    
    cityInput.simulate('change', { target: { value: 'Perth' } });
    getWeatherInfoButton.simulate('click');


    expect(component.instance().state.city).toBe('Perth');
    expect(component.instance().state.weatherInformation).toEqual({
            city: 'Perth',
            weather: [{
             id:802,
             main:"Clouds",
             description:"scattered clouds",
             icon:"http://openweathermap.org/img/wn/03d@2x.png"
          }],
      });
    });

          it('updates the error property in state when weather information is not found in data', () => {
          // Arrange
      const component = mount(
          <App />
      );
    
    // Act & Assert
    expect(component.instance().state.city).toBe('');

    const cityInput = component.find("#cityInput");
    const getWeatherInfoButton = component.find("#getWeather");
    
    cityInput.simulate('change', { target: { value: 'New York' } });
    getWeatherInfoButton.simulate('click');


    expect(component.instance().state.error).toBe('Couldn\'t find weather information for New York!');
    });
  });
});
