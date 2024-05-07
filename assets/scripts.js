let zip = "34787";


let URL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=" + apiKey;

fetch(URL)
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        console.log("This is the humidity: " + data.main.humidity + "%");
    });