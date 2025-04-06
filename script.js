const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
const apiKey = '954d96d2d20763e23c3ab2509041aa1c';
const weatherImage = document.querySelector("#weatherImage");
const weather = document.querySelector(".weather");
const error = document.querySelector("#error");
async function getWeather(city) {
    const info = await fetch(url + `&appid=${apiKey}` +`&q=${city}`);
    if(info.status == 404){
        error.style.display = 'block';
        weather.style.display = 'none'; 
        document.querySelector("#container").style.justifyContent = 'flex-start';
    }
    else{
    var infoObject = await info.json();
    console.log(infoObject);
    document.querySelector(".city").innerHTML = infoObject.name;
    document.querySelector("#temperature").innerHTML = `${Math.round(infoObject.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML = `${infoObject.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${infoObject.wind.speed} km/h`;
    
    if(infoObject.weather[0].main == 'Clear'){
        weatherImage.src = 'images/clear.png';
        document.querySelector("body").style.backgroundImage =  'url(background_image.jpg)';
        document.querySelector("body").style.backgroundSize = 'cover';
    }
    else if(infoObject.weather[0].main == 'Clouds'){
        weatherImage.src = 'images/clouds.png';
        document.querySelector("body").style.backgroundImage =  'url(Cloudbackground_image.jpg)';
        document.querySelector("body").style.backgroundSize = 'cover';
    }
    else if(infoObject.weather[0].main == 'Mist'){
        weatherImage.src = 'images/mist.png';
        document.querySelector("body").style.backgroundImage =  'url(Mistbackground_image.jpg)';
        document.querySelector("body").style.backgroundSize = 'cover';
    }
    else if(infoObject.weather[0].main == 'Drizzle'){
        weatherImage.src = 'images/drizzle.png';
        document.querySelector("body").style.backgroundImage =  'url(Drizzlebackground_image.jpg)';
        document.querySelector("body").style.backgroundSize = 'cover';
    }
    else if(infoObject.weather[0].main == 'Humidity'){
        weatherImage.src = 'images/humidity.png';
        document.querySelector("body").style.backgroundImage =  'url(Humiditybackground_image.jpg)';
        document.querySelector("body").style.backgroundSize = 'cover';
    }
    else if(infoObject.weather[0].main == 'Rain'){
        weatherImage.src = 'images/rain.png';
        document.querySelector("body").style.backgroundImage =  'url(Rainbackground_image.jpg)';
        document.querySelector("body").style.backgroundSize = 'cover';
    }
    weather.style.display = 'block';
    weather.style.visibility = 'visible';
    error.style.display = 'none';
}
   document.querySelector("#container input").blur();
};


const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
btn.addEventListener("click", ()=>{
    getWeather(search.value);
})
document.querySelector("body").addEventListener("keydown",(e)=>{
    if(e.key === 'Enter'){
    getWeather(search.value);
    }
})

const searchCity = document.querySelector("#searchCity").style.marginLeft = '2vh';