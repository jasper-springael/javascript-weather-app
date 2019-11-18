// function weatherBalloon( cityID ) {
//     const key = '2bb393aebb088dea340a936c4e15a222';
//     fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
//     .then(function(resp) { return resp.json() }) // Convert data to json
//     .then(function(data) {
//       drawWeather(data);
//     })
//     .catch(function() {
//       // catch any errors
//     });
//   }
  
//   window.onload = function() {
//     weatherBalloon( 707860 );
//   }

//   function drawWeather( d ) {
// 	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
// 	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
// 	document.getElementById('description').innerHTML = d.weather[0].description;
// 	document.getElementById('temp').innerHTML = celcius + '&deg;';
// 	document.getElementById('location').innerHTML = d.name;
// }

let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');
const key = '2bb393aebb088dea340a936c4e15a222';


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+key)
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})