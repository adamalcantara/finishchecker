let URL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a8413cba25605a4ae619a572d1557fb5";

fetch(URL)
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
        console.log("This is the humidity: " + data.main.humidity + "%");
    })

console.log(URL);
