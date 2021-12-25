const API_KEYS = '078bda30d89a392ef88684e4d3b31c16'

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`
    console.log(url)
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:last-child')

        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name
    })
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)