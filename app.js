//https://api.openweathermap.org/data/2.5/weather?q=London&appid=2d3d9b08456ff5f60b87cd00a283d967&units=metric

const metric = "&units=metric"
const apiKey = "&appid=2d3d9b08456ff5f60b87cd00a283d967";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBtn = document.querySelector('.search button')
const searchInput = document.querySelector('.search input')

const det = document.getElementById("det")



async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}${apiKey}${metric}`)
    let data = await response.json()

    det.classList.add('.show')

    
    let icon = data.weather[0].main.toLowerCase()
    switch (icon){
        case 'rain':
            document.querySelector(".weather-icon").src = "./image/rain.png";
            break;
        case 'clouds':
            document.querySelector(".weather-icon").src = "./image/clouds.png";
            break;
        case 'clear':
            document.querySelector(".weather-icon").src = "./image/clear.png";
            break;
        case 'drizzle':
            document.querySelector(".weather-icon").src = "./image/drizzle.png";
            break;
        case 'mist':
            document.querySelector(".weather-icon").src = "./image/mist.png";
            break;
        case 'snow':
            document.querySelector(".weather-icon").src = "./image/snow.png";
            break;
        default:
            document.querySelector(".weather-icon").alt = "Sorry";
    }

    

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp);
    document.querySelector(".humidity").innerText = `${data.main.humidity}%`;
    document.querySelector(".wind").innerText = `${Math.round(data.wind.speed)}Km/h`;
    document.querySelector(".city").innerText = data.name;
    
    
}

searchBtn.addEventListener('click', () => {

    checkWeather(searchInput.value)
})

