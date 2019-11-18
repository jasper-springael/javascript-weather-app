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
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + key + '&units=metric')
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
/*document.querySelector(".forecast").addEventListener('click', function (name) {
                fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + key + '&units=metric')
                    .then(response => response.json())
                    .then(data => {
                        
                        console.log(data);
                    })
                });
                */