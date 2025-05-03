
let city = document.getElementById(`city`);
let temp = document.getElementById(`temp`);
let humidity = document.getElementById(`humidity`);
let feel = document.getElementById(`feels`);
let wind = document.getElementById("wind");


async function checkWeather() {
    let inp = document.getElementById(`input`).value;
    const apiKey = "ebbda662c4a4a79a35bdaf8bfeb8744c";
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${inp}&appid=${apiKey}`;

    const response = await fetch(url);
    let data = await response.json();

    if (response.ok) {
        city.innerHTML = `${data.name}`;
        temp.innerHTML = `${data.main.temp}°C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;

        document.getElementById(`input`).value = ""
        // console.log(data);
    } else {

        city.innerHTML = "City not found!";
        temp.innerHTML = "";
        feel.innerHTML = "";
        humidity.innerHTML = "NOT FOUND";
        wind.innerHTML = "NOT FOUND";

    }


}

