# Weather App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Instructions to run the application

* Clone the solution

```git
    git clone https://github.com/prazink/WeatherApp.git
```

* Open in Visual Studio Code or preferred code editor

* Execute the following code in terminal

```node
    npm install

    npm run build

    npm run start
```

Navigate to http://localhost:3000/

![Application running](https://prazink.github.io/weather_forecast/blob/master/src/img/startpage.png)

Input the Australian city's name and hit enter or Press on `Get weather` button

Now the output will show the city's weather data from `data.js` file

![Show city weather successfully](https://prazink.github.io/weather_forecast/blob/master/src/img/validcityweatherforecast.png)

## Validation

City search field has couple of validations.

1. Required field validation

![No input city name](https://prazink.github.io/weather_forecast/blob/master/src/img/noinputdata.png)

2. City weather information not found

![City weather info not found](https://prazink.github.io/weather_forecast/blob/master/src/img/invalidinput.png)

## Test

To run the test execute:

```node
    npm run test
```

![Run test results](https://prazink.github.io/weather_forecast/blob/master/src/img/test.png)

## Packages used

1. React
2. Sass
3. PropTypes
3. Jest
4. Enzyme