import SearchBox from "./SearchBox";
import InfoBox from "./InoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo ,setWeatherInfo] = useState({feelsLike: 35.29,
    humidity: 62,
    temp: 30.97,
    tempMax: 30.97,
    tempMin: 30.97,
    weather: "haze",
    city:'navi mumbai'
});

let updateinfo = (res)=>{
    setWeatherInfo(res);
}

    return (
        <div >
            <h1 style={{textAlign:"center"}}>
                Weather App 
            </h1>
            <SearchBox updateInfo={updateinfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}