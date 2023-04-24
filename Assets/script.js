var APIKey = "93f9d7b6a911ae94c5877f3de5caa46e";
var city = "El Paso" //need to make empty string
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch (queryURL, {
    method: "GET"
})
    .then(function(resonse) {
        return resonse.json();
})
    .then(function(data) {
        console.log(data);
})


