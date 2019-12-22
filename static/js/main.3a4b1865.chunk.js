(this.webpackJsonpweather_forecast=this.webpackJsonpweather_forecast||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(2),s=a.n(r),o=(a(13),a(3)),m=a(4),c=a(6),d=a(5),l=a(7),p=[{coord:{lon:151.22,lat:-33.85},weather:[{id:800,main:"Clear",description:"clear sky",icon:"http://openweathermap.org/img/wn/01d@2x.png"}],base:"stations",main:{temp:26.83,feels_like:26.12,temp_min:23.89,temp_max:30,pressure:1019,humidity:44},visibility:1e4,wind:{speed:2.6,deg:170},clouds:{all:0},dt:1576804792,sys:{type:1,id:9599,country:"AU",sunrise:1576780812,sunset:1576832666},timezone:39600,id:2147714,name:"Sydney",cod:200},{coord:{lon:130.84,lat:-12.46},weather:[{id:801,main:"Clouds",description:"few clouds",icon:"http://openweathermap.org/img/wn/02d@2x.png"}],base:"stations",main:{temp:33.53,feels_like:36.38,temp_min:33,temp_max:33.89,pressure:1010,humidity:55},visibility:1e4,wind:{speed:3.6,deg:360},clouds:{all:20},dt:1576804738,sys:{type:1,id:9574,country:"AU",sunrise:1576788490,sunset:1576834773},timezone:34200,id:2073124,name:"Darwin",cod:200},{coord:{lon:149.1,lat:-35.3},weather:[{id:711,main:"Smoke",description:"smoke",icon:"http://openweathermap.org/img/wn/50d@2x.png"}],base:"stations",main:{temp:31.78,feels_like:25.14,temp_min:31.11,temp_max:32.78,pressure:1018,humidity:11},visibility:6e3,wind:{speed:6.2,deg:340},clouds:{all:90},dt:1576804934,sys:{type:1,id:9588,country:"AU",sunrise:1576781081,sunset:1576833414},timezone:39600,id:2172517,name:"Canberra",cod:200},{coord:{lon:144.96,lat:-37.81},weather:[{id:800,main:"Clear",description:"clear sky",icon:"http://openweathermap.org/img/wn/01d@2x.png"}],base:"stations",main:{temp:37.77,feels_like:31.18,temp_min:35.56,temp_max:40.56,pressure:1011,humidity:13},visibility:1e4,wind:{speed:7.7,deg:350},clouds:{all:1},dt:1576804932,sys:{type:1,id:9548,country:"AU",sunrise:1576781636,sunset:1576834848},timezone:39600,id:2158177,name:"Melbourne",cod:200},{coord:{lon:153.02,lat:-27.47},weather:[{id:800,main:"Clear",description:"clear sky",icon:"http://openweathermap.org/img/wn/01d@2x.png"}],base:"stations",main:{temp:30.72,feels_like:31.07,temp_min:27.22,temp_max:33.33,pressure:1016,humidity:40},visibility:1e4,wind:{speed:2.1,deg:120},clouds:{all:0},dt:1576804667,sys:{type:1,id:9481,country:"AU",sunrise:1576781332,sunset:1576831282},timezone:36e3,id:2174003,name:"Brisbane",cod:200},{coord:{lon:138.6,lat:-34.93},weather:[{id:761,main:"Dust",description:"dust",icon:"http://openweathermap.org/img/wn/50d@2x.png"}],base:"stations",main:{temp:40.76,feels_like:32.48,temp_min:37.22,temp_max:43.89,pressure:1006,humidity:13},visibility:7e3,wind:{speed:10.8,deg:330,gust:15.9},clouds:{all:0},dt:1576804667,sys:{type:1,id:9566,country:"AU",sunrise:1576783664,sunset:1576835873},timezone:37800,id:2078025,name:"Adelaide",cod:200},{coord:{lon:115.86,lat:-31.95},weather:[{id:802,main:"Clouds",description:"scattered clouds",icon:"http://openweathermap.org/img/wn/03d@2x.png"}],base:"stations",main:{temp:21.54,feels_like:20.81,temp_min:21,temp_max:22.22,pressure:1018,humidity:56},visibility:1e4,wind:{speed:2.1,deg:150},clouds:{all:40},dt:1576804666,sys:{type:1,id:9586,country:"AU",sunrise:1576789600,sunset:1576840856},timezone:28800,id:2063523,name:"Perth",cod:200},{coord:{lon:147.33,lat:-42.88},weather:[{id:802,main:"Clouds",description:"scattered clouds",icon:"http://openweathermap.org/img/wn/03d@2x.png"}],base:"stations",main:{temp:24.15,feels_like:19.85,temp_min:21.67,temp_max:27.22,pressure:1012,humidity:33},visibility:1e4,wind:{speed:5.1,deg:30},clouds:{all:40},dt:1576804895,sys:{type:1,id:9545,country:"AU",sunrise:1576780056,sunset:1576835290},timezone:39600,id:2163355,name:"Hobart",cod:200}];function u(e){var t=e.title,a=e.subTitle;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"titleHeader"},t),n.a.createElement("p",{className:"subTitle"},a))}u.defaultProps={title:"",subTitle:""};var h=u,y=function(e){var t=e.city,a=e.getWeatherInfo,i=e.onCityUpdateMethod;return n.a.createElement("div",{className:"citySearch"},n.a.createElement("input",{id:"cityInput",type:"text",name:"city",placeholder:"Enter your City...",value:t,onChange:function(e){return i(e)},onKeyPress:function(e){"Enter"===e.key&&a()}}),n.a.createElement("button",{id:"getWeather",onClick:a},"Get Weather"))};y.defaultProps={city:""};var w=y,f=function(e){var t=e.weatherInformation,a=e.temperatureInformation,i=e.error,r=a.temp,s=a.temp_min,o=a.temp_max;if(i)return n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"weatherInfoError"},i));var m=t.city,c=t.weather[0],d=c.icon,l=c.description;return m&&l&&n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"city"},n.a.createElement("div",{className:"cityName"},n.a.createElement("h1",{id:"weatherInfoCity"},m)),d&&n.a.createElement("img",{src:d,alt:m}),n.a.createElement("div",{className:"temperature",id:"weatherInfoTemperature"},"".concat(r,"\xb0 C")),n.a.createElement("div",{className:"description",id:"weatherInfoDescription"},l),n.a.createElement("div",{className:"temperatureMin",id:"weatherInfoTemperatureMinMax"},"".concat(s,"\xb0 C")," | ","".concat(o,"\xb0 C"))))};f.defaultProps={temperature:0,weatherInformation:{city:"",weather:[]},error:""};var g=f,v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).getWeatherInfo=function(){var e=a.state.city;if(e){var t=p.find((function(t){return t.name===e}));if(t){var i=t.name,n=t.weather,r=t.main;a.setState({weatherInformation:{city:i,weather:n},main:r,error:""})}else a.setState({error:"Couldn't find weather information for ".concat(e,"!")})}else a.setState({error:"Please enter a valid city name"})},a.onCityUpdate=function(e){a.setState({city:e.target.value})},a.state={city:"",main:{temp:0,temp_min:0,temp_max:0},weatherInformation:{city:"",weather:[{description:"",main:"",icon:""}]},error:""},a}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.onCityUpdate,t=this.state,a=this.getWeatherInfo,i=t.city,r=t.main,s=t.weatherInformation,o=t.error;return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"mainWrapper"},n.a.createElement("div",{className:"innerWrapper"},n.a.createElement("div",{className:"weatherDesc"},n.a.createElement(h,{title:"Weather Forecast",subTitle:"Find out your current city, temperature and conditions"}),n.a.createElement(w,{onCityUpdateMethod:e,city:i,getWeatherInfo:a})),n.a.createElement("div",{className:"weather_info"},n.a.createElement(g,{city:i,temperatureInformation:r,weatherInformation:s,error:o})))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3a4b1865.chunk.js.map