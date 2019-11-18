function fetchWeather(cityID) {
    

    const apiKey = "2bb393aebb088dea340a936c4e15a222";
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`)
    .then(function(resp) {
        return resp.json() })
        .then(function(data) {
            console.log(data);
            let icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.querySelector(".icon").setAttribute("src", icon);
            console.log(icon);
            let temp = data.main.temp;
            document.querySelector("#temp").append(temp);

        })
        .catch(function() {
            console.log("error");
        });

}

document.getElementById("run").addEventListener("click", function(){
    fetchWeather(295582);
})