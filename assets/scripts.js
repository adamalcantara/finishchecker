// Get HTML elements
const input = document.getElementById("inputField");
const select = document.getElementById("countries")
const button = document.getElementById("submitBtn");

// Function to get the zip code from the HTML input
button.onclick = function getZip() { 
    let zipCode = input.value;
    let countryCode = select.value;
    console.log(countryCode);
    console.log(zipCode);
    getWeather(zipCode);
    input.value = "";
}

// Function to get the weather statistics
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
