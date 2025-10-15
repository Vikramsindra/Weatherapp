import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Alert from '@mui/material/Alert';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error,setError] = useState(false);
  
  let gecoderurl = `https://api.openweathermap.org/data/2.5/weather?`;

  let API_KEY = "07d80d3cbe2f0362a8c96c5430faa1d3";

  let getWeatherInfo = async (city) => {
      try {
        let reponse = await fetch(`${gecoderurl}q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse = await reponse.json();
        let result = {
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feelsLike:jsonresponse.main.feels_like,
        weather:jsonresponse.weather[0].description,
        city:city,
      };
      setError(false)
      return result;
      } catch (err) {
        throw err;
      }
      
  }

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
    console.log(city);
    let result = await  getWeatherInfo(city);
    updateInfo(result);
    setCity("");
    } catch (err) {
       setError(true);
    }
  };
  return (
    <>
      <div className="SearchBox">
        <h2>Search Weather for your City</h2>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            style={{width:"350px"}}
          />
          <br />
          <br />
          <br />
          <Button variant="contained" type="submit">
            Search
          </Button>
          <br />
          <br />
          {error? <Alert severity="error">Enter A Valid City Name .</Alert>:null}
        </form>
      </div>
    </>
  );
}
