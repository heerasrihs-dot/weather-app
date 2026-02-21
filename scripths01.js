function getWeather(){
let city=document.getElementById("city").value;
let apiKey="d5fe0a7b4ec664761995f3a04abb30a4";
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(url)
.then(response=>response.json())
.then(data=>{
    if(data.cod !==200){
        document.getElementById("result").innerHTML="city not found";
        return;
 }
    let weather=data.weather[0].main;
    let icon="🔆";
    if(weather==="Clouds")icon="☁️";
    if(weather==="Rain")icon="🌧️";
    if(weather==="BrokenCloud")icon="⛈️";
document.getElementById("result").innerHTML=
`<h3>${data.name}</h3>
Temperature:${data.main.temp}°C<br>
weather:${data.weather[0].description}`;
})
.catch(error=>{
document.getElementById("result").innerHTML="city not found!";
});
}