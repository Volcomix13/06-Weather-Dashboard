var APIKey = "93f9d7b6a911ae94c5877f3de5caa46e";
var city = "El Paso";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;




//grabs data from openweathermap

fetch (queryURL, {
    method: "GET"
})
    .then(function(resonse) {
        return resonse.json();
})
    .then(function(data) {
        console.log(data);
})
showWeather();

function showWeather (resonse){
    console.log(resonse);
    var row = document.querySelector(".card");
    var html = `<img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="city-name and date">City Name</h5>
                </div>
                <ul class="list-group list-group-flush">
                 <li class="temperature">Temperature</li>
                    <li class="humidity">Humidity</li>
                    <li class="wind-speed">Wind Speed</li>
                </ul>`;
}
