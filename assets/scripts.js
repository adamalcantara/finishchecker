// Get HTML elements
const input = document.getElementById("inputField");
const select = document.getElementById("countries")
const button = document.getElementById("submitBtn");

// Function to get the zip code from the HTML input
button.onclick = function getZip() { 
    let zipCode = input.value;
    let countryCode = select.value;

    if (zipCode === "" || countryCode === "") {
        console.log("Fields cannot be left blank")
    } else {
    // Log the results in the console
    console.log(countryCode);
    console.log(zipCode);

    // Concatinate the zip code and country code with a comma to follow the formatting
    let result = zipCode + "," + countryCode;
    console.log(result);

    // Call the function to get the weather
    getWeather(result);

    // Set the value of the input and select to the default
    input.value = "";
    select.value = "";
    }
}

// Function to get the weather statistics
function getWeather(result) {
    console.log("This is the test: " + result);
    let URL = "https://api.openweathermap.org/data/2.5/weather?zip=" + result + "&appid=" + apiKey;
    
    fetch(URL)
        .then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data);
            console.log("This is the humidity: " + data.main.humidity + "%");
        });
}
