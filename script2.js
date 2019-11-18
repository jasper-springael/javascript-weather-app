let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');
const key = '2bb393aebb088dea340a936c4e15a222';
let urlForecast = `https://samples.openweathermap.org/data/2.5/forecast?q=`+input.value+`&appid=`+key;


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid='+key)
.then(response => response.json())
.then(data => {
         for(let i=0;i<data.list.length;i++) {
            console.log(data.list[i]);

            var tempValue = data.list[i]['main']['temp'];
            var nameValue = data.city['name'];
          //  var descValue = data.list[i]['weather'][i]['description'];
          
            main.innerHTML = nameValue;
           // desc.innerHTML = "Desc - "+descValue;
            temp.innerHTML = "Temp - "+tempValue;
            input.value ="";
         }
            
  console.log(data);
})

.catch(err => console.error(err));
})

const hallo = (data)=> {
    for (item of data){
        console.log(item);
    }
}

