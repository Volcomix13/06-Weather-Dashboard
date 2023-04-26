var APIKey = "93f9d7b6a911ae94c5877f3de5caa46e";
var inputCity = document.querySelector("#city-name");

var searchForm = document.querySelector(".btn");
var weatherData = document.querySelector(".card-body");

var cityName = document.querySelector(".city-name and date"); //can I do this? LOL
cityName.textContent = inputCity;


//grabs data from openweathermap
 
function showWeather(event){
    event.preventDefault();
    
  
    var city = inputCity.value;
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey + "&units=imperial";
        fetch (queryURL)
            .then(function(response) {
                return response.json();
        })
            .then(function(data) {
                console.log(data);
                for(i=0; i<6; i++){ //loop to display 6 days of data
                    var tempElement = document.querySelector(".temperature1" +  (i+1));
                    console.log(data.list[i*8]);
                    var temp1 = data.list[i*8].main.temp;
                    tempElement.textContent = "temperature1" + temp1;

                    var humidityElement = document.querySelector(".humidity" + (i+1));
                    var humi1 = data.list[i*8].main.humidity;
                    humidityElement.textContent = "humidity1" + humi1;

                    

                }

        })
};

searchForm.addEventListener("click", showWeather);


