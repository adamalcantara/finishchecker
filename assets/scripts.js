// Get HTML elements
const input = document.getElementById("inputField");
const select = document.getElementById("countries")
const button = document.getElementById("submitBtn");
const infoSection = document.getElementById("informationSection");

// Function to get the zip code from the HTML input
button.onclick = function getZip() { 
    infoSection.innerHTML = "";
    let zipCode = input.value;
    let countryCode = select.value;

    if (zipCode === "" || countryCode === "") {
        console.log("Fields cannot be left blank");
        let validation = document.createElement("p");
        validation.append("Fields cannot be left blank");
        infoSection.append(validation);
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
            // Create p tag and append it to the info section
            let p = document.createElement("p");
            infoSection.append(p);
            // Check if any data is returned
            if (data.cod === '404') {
                console.log("Error thrown");
                p.append("City not found. Please try again.");
            } else {
                console.log(data);
                console.log("This is the humidity in " + data.name + ": " + data.main.humidity + "%");
    
                
                // Declare variables using the data
                let cityName = data.name;
                let humidity = data.main.humidity;
    
                // Append data to p tag created above
                p.append("The humidity in " + cityName + " is: " + humidity + "%");
                
    
                // Create an element for the determination
                let determination = document.createElement ("p");
    
                // Verify whether or not the conditions are correct for spraying material
                if (humidity >= 65) {
                    determination.append("Conditions are not suitable for spraying");
                } else {
                    determination.append("Conditions are suitable for spraying");
                }
                infoSection.append(determination);
            }

        });
}
