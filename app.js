const submitBnt = document.getElementById('submit-btn');
document.addEventListener('click',function(){
    const inputBtn = document.getElementById('input-btn').value;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=2fa1b6dfc56cb318ee8e46106013b450')
    .then(response => response.json())
    .then( data =>{
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem - 273.15;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const iconLink ="https://openweathermap.org/img/w/"+icon+".png";
        document.getElementById('weather_icon').src = iconLink;
        document.getElementById('show_city').innerText = cityName;
        document.getElementById('show_temperature').innerText = temp.toFixed(1);
        document.getElementById('weather_status').innerText = description;
    

    })
    // .catch( error => alert(" please enter a valid city name!!"))
})