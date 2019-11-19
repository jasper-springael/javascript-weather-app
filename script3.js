let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button = document.querySelector('.submit');
let icon = document.querySelector(".icon");
let minMaxTemperature = document.querySelector(".minMaxTemp");
let windSpeed = document.querySelector(".windSpeed");
const key = '2bb393aebb088dea340a936c4e15a222';

button.addEventListener("click", function(){
    getWeather();
});

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/?q=' + input.value + '&appid=' + key + '&units=metric');
    const data = await response.json();
            //console.log(data);
            //console.log(data.list[0].main['temp']);
            //data.list.forEach(item => {
                //console.log(item.main['temp']);
                
            //});
            let arrayTemp = [];
            let arrayDesc = [];
            //let arrayMinTemp = [];
            //let arrayMaxTemp = [];
            let arrayWind = [];

            for (let i = 0; i < data.list.length; i+=8) {
                console.log(data.list[i]);

                arrayTemp.push(data.list[i]['main']['temp']);
                arrayDesc.push(data.list[i]['weather'][0]['description']);
                
                arrayWind.push(data.list[i]['wind']['speed']);
                temp.innerHTML = "Temperature - " + arrayTemp[1] + "°";
                desc.innerHTML = "Description - " + arrayDesc[1];
                windSpeed.innerHTML = 'windspeed: ' + arrayWind[1] + ' m/s';

                
            }
            }


