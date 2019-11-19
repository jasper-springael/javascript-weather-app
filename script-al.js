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


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + key + '&units=metric')
        .then(response => response.json())
        .then(data => {
            var tempValue = Math.floor(data['main']['temp']);
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var iconValue = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            var minTempValue = Math.floor(data['main']['temp_min']);
            var maxTempValue = Math.floor(data['main']['temp_max']);
            var windValue = data['wind']['speed'];

            main.innerHTML = nameValue;
            desc.innerHTML = "Description - " + descValue;
            temp.innerHTML = "Temperature - " + tempValue + "°";
            input.value = "";
            icon.setAttribute("src", iconValue);
            minMaxTemperature.innerHTML = 'min ' + minTempValue + '°' + '/' + 'max ' + maxTempValue + '°';
            windSpeed.innerHTML = 'windspeed: ' + windValue + ' m/s';
            console.log(data);
        })

        .catch(err => alert("Wrong city name!"));
})

//5 day forecast
document.querySelector(".forecast").addEventListener('click', function (name) {
                fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + key + '&units=metric')
                    .then(response => response.json())
                    .then(data => {
                        
                        console.log(data);
                    })
                });

                /*arrayTemp.push(res[i]['main']['temp']);
                arrayDesc.push(res[i]['weather'][0]['description']);
                arrayWind.push(res[i]['wind']['speed']);

                //temp.innerHTML = "Temperature - " + arrayTemp[1] + "°";
                desc.innerHTML = "Description - " + arrayDesc[1];
                windSpeed.innerHTML = 'windspeed: ' + arrayWind[1] + ' m/s';

                document.querySelector('.temp1').innerHTML = arrayTemp[0];
                document.querySelector('.temp2').innerHTML = arrayTemp[1];
                document.querySelector('.temp3').innerHTML = arrayTemp[2];
                document.querySelector('.temp4').innerHTML = arrayTemp[3];
                document.querySelector('.temp5').innerHTML = arrayTemp[4];

                document.querySelector('.date1').innerHTML = arrayTemp[0];
                document.querySelector('.date2').innerHTML = arrayTemp[1];
                document.querySelector('.date3').innerHTML = arrayTemp[2];
                document.querySelector('.date4').innerHTML = arrayTemp[3];
                document.querySelector('.date5').innerHTML = arrayTemp[4];
            }*/