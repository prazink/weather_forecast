import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Weather from './WeatherInformation';

configure({ adapter: new Adapter() });

describe('Weather', () => {
    let props;

    beforeEach(() => {
        props = {
            temperatureInformation: {temp_min: '25', temp_max: '45'},
            weatherInformation: {
                city: 'Melbourne',
                weather: [{
                icon: '',
                description: 'It\'s a scorcher'
            }],
            },
            error: ''
        }
    });

    it('renders error information when error is not empty', () => {
        // Arrange 
        props.error = 'Couldn\'t find weather information for Sydney!';
        
        //Act
        const component = mount(
            <Weather
                {...props} />
        );

        // Assert
        expect(component.find("#weatherInfoError").length).toBe(1);
        expect(component.find("#weatherInfoError").text()).toBe('Couldn\'t find weather information for Sydney!');
        expect(component.find("#weatherInfoCity").length).toBe(0);
    });


    it('renders weather information successfully when error is empty and valid weather information is provided', () => {
        // Arrange & Act
        const component = mount(
            <Weather
                {...props} />
        );

        // Assert
        const city = component.find("#weatherInfoCity");
        const temperature = component.find("#weatherInfoTemperatureMinMax");
        const descritption = component.find("#weatherInfoDescription");

        expect(component.find("#weatherInfoError").length).toBe(0);
        expect(city.length).toBe(1);
        expect(city.text()).toBe('Melbourne');
        expect(temperature.length).toBe(1);
        expect(temperature.text()).toBe('25° C | 45° C');
        expect(descritption.length).toBe(1);
        expect(descritption.text()).toBe('It\'s a scorcher');
    });
});