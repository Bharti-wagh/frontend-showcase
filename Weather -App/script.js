const apiKey = "461e754163c02064635475d5b6efab27";

async function getWeather(){

    const city = document.getElementById("city").value;

    if(city===""){
        alert("Please enter city name");
        return;
    }

    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response=await fetch(url);

        const data=await response.json();

        if(data.cod!="200"){
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerHTML=data.name;

        document.getElementById("temperature").innerHTML=
        Math.round(data.main.temp)+"°C";

        document.getElementById("description").innerHTML=
        data.weather[0].description;

        document.getElementById("humidity").innerHTML=
        "Humidity : "+data.main.humidity+"%";

        document.getElementById("wind").innerHTML=
        "Wind : "+data.wind.speed+" km/h";

    }
    catch(error){

        alert("Something went wrong.");

    }

}