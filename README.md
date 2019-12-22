# Weather App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instructions to run the application

* Clone the solution

```git
    git clone https://github.com/prazink/weather_forecast
```

* Open in Visual Studio Code or preferred code editor

* Execute the following code in terminal

```node
    npm install

    npm run build

    npm run start
```

Navigate to http://localhost:3000/

![Application running](https://github.com/prazink/weather_forecast/blob/master/src/img/startpage.png)

Input the Australian city's name and hit enter or Press on `Get weather` button

Now the output will show the city's weather data from `data.js` file

![Show city weather successfully](https://github.com/prazink/weather_forecast/blob/master/src/img/validcityweatherforecast.png)

## Validation

City search field has four validations.

1. Required field validation with no input data

![No input city name](https://github.com/prazink/weather_forecast/blob/master/src/img/noinputdata.png)

2. City weather information not found

![City weather info not found](https://github.com/prazink/weather_forecast/blob/master/src/img/invalidinput.png)

3. Retrieve city information with different case search input

![City weather found](https://github.com/prazink/weather_forecast/blob/master/src/img/casesensitive.png)

4. Retrieve city information when city search input contains whitespace

![City weather info not found](https://github.com/prazink/weather_forecast/blob/master/src/img/whitespace.png)

## Test

To run the test execute:

```node
    npm run test
```

![Run test results](https://github.com/prazink/weather_forecast/blob/master/src/img/test.png)

## Packages used

1. React
2. Sass
3. PropTypes
3. Jest
4. Enzyme