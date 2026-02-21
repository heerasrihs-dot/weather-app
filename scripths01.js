function getWeather(){
let city=document.getElementById("city").value;
    
let apiKey="d5fe0a7b4ec664761995f3a04abb30a4";
    if(city===""){
        document.getElementById("result").iinerHTML="please enter a city name";
        return;
    }
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    document.getElementById("loader").style.display="block";
    document.getElementByid("result").innerHTML="";
fetch(url)
.then(response=>response.json())
.then(data=>{
    document.getElementById("loader").style.display="none";
    if(data.cod !==200){
        document.getElementById("result").innerHTML="city not found";
        return;
 }
let iconCode=data.weather[0].icon;
    let iconUrl=`https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    let description=data.weather[0].description;
    description=description.charAt(0).toUpperrCase()+description.slice(1);
document.getElementById("result").innerHTML=
`<h3>${data.name}</h3>
<img src="${iconUrl}" alt="weather icon"><br>
Temperature:${data.main.temp}°C<br>
weather:${description}`;
})
.catch(error=>{
    document.getElentById("loader").style.display="none";
document.getElementById("result").innerHTML="city not found!";
});

}

