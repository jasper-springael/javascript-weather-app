let input = document.querySelector('.input_text');
let button= document.querySelector('.submit');
const key = '2bb393aebb088dea340a936c4e15a222';
let day = getday

button.addEventListener('click', function(name){

  fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid='+key+'&units=metric')

.then(response => response.json())

.then(data => {
  
  (function addTitle(){
    document.querySelector("#header-city").innerHTML = `The weather for: ${input.value}`;
  })();

  for(let i=0;i<data.list.length;i+=8){
            console.log(data.list[i]);

            (function getTemp () {
              day= day++
              let newDiv = document.createElement("div");
              let temp =`${data.list[i]['main']['temp']}°`;
              let desc= `${data.list[i]['weather'][0]['description']}`;
              let newContent = document.createTextNode(temp+' '+desc);
              console.log(newContent);
              newDiv.appendChild(newContent);
              let currentDiv = document.querySelector(".container1");
              currentDiv.appendChild(newDiv);
            })();
        }
  console.log(data);

})

.catch(err => console.error(err));
})

function getTemp (temp) {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode(data.list[i]['main']['temp']);
  newDiv.appendChild(newContent);
  let currentDiv = document.querySelector(".container1");
  currentDiv.appendChild(newDiv);
}

// async solution to fetch
// button.addEventListener("click", () => {
//     getWeather()

// })
// async function getWeather(){
//     const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid='+key);
//     const data = await response.json();
// }


