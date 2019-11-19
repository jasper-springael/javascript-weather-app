let input = document.querySelector('.input_text');
let button = document.querySelector('.submit');
let container1 = document.querySelector(".container1");
const key = '2bb393aebb088dea340a936c4e15a222';
let today = new Date();
today = today.toLocaleDateString('en-US',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});


button.addEventListener("click", function(){
    getWeather();
});

async function getWeather() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast/?q=' + input.value + '&appid=' + key + '&units=metric');
    const data = await response.json();
    const res = data.list;
            console.log(res);
            let headerCity = document.createElement("h1");
            container1.appendChild(headerCity);
            headerCity.innerHTML = `The weather for: ${input.value}`;
            let dateHeader = document.createElement("h2");
            headerCity.append(dateHeader);
            dateHeader.innerHTML = `Today's date is: ${today}`;

            
            //for loop
            for (let i = 0; i < res.length; i+=8) {
                console.log(res[i]);

                (function makeElement() {
                    
                    let temp = `${res[i]['main']['temp']}°`;
                    let desc = `${res[i]['weather'][0]['description']}`;
                    let icon = `http://openweathermap.org/img/w/${res[i]['weather'][0].icon}.png`;
                    let wind = `${res[i]['wind']['speed']}`;
                    let date = `${res[i]['dt_txt']}`;
                    date = date.toString();
                    console.log(typeof date);
                    
                    let newDiv = document.createElement("div");
                    let dateP = document.createElement("span");
                    let newContent = document.createTextNode(' Temperature: '+ temp+ ' '+desc);
                    let iconImage = document.createElement("img");
                    iconImage.src = icon;
                    let windSpeed = document.createTextNode('Windspeed: ' +wind + ' m/s ');
                    
                    dateP.innerHTML= date.slice(0,10);
                    newDiv.append(dateP);
                    
                    newDiv.appendChild(newContent);
                    newDiv.append(iconImage);
                    newDiv.append(windSpeed);
                    
                    container1.appendChild(newDiv);
                })();//end of makeElement function
            }//end of for loop
        };//end of getWeather function


