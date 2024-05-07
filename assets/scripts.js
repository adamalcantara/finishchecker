const input = document.getElementById("inputField");
const button = document.getElementById("submitBtn");

button.onclick = function getZip() { 
    let zipCode = input.value;
    console.log(zipCode)
    getWeather(zipCode);
}

function getWeather(zipCode) {
    console.log("This is the test: " + zipCode);
    let URL = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&appid=" + apiKey;
    
    fetch(URL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data);
            console.log("This is the humidity: " + data.main.humidity + "%");
        });
}
