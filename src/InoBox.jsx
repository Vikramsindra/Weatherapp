import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css"
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}) {

const img = {
    init:"https://th.bing.com/th/id/OIP.mm-KrQLwphYeL0ldDjgF1gHaE8?w=284&h=189&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    hot:"https://tse2.mm.bing.net/th/id/OIP.Uu_txOtxtIIXOm3LIYSBEgHaEi?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    cold:"https://th.bing.com/th/id/OIP.QppyAuz6v0TPLGhHCZkx4gHaE8?w=272&h=182&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
    rain:"https://th.bing.com/th/id/OIP.E4brQoYpzoqVwlLPGOa3RwHaEJ?w=302&h=180&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3",
} 

const icon = {
}

const setImg = (img)=>{
      if (info.humidity>=80) {
        return img.rain;
      }else if (info.temp>15) {
        return img.hot;
      }else{
        return img.cold;
      }
}



  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ maxWidth: 345 }} style={{border:"2px solid black",borderRadius:"10px"}}>
        <CardMedia
          sx={{ height: 140 }}
          image={setImg(img)}
          title={info.weather}
          style={{height:"200px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city.toUpperCase()} &nbsp;
            
            {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={"span"} style={{fontSize:"1rem"}}> 
            <p>
                Temparature = {info.temp}&deg;C
                </p>
            <p>
                Humidity = {info.humidity}
            </p>
            <p>
                Min Tempature = {info.tempMin}&deg;C
            </p>
            <p>
                Max Tempature = {info.tempMax}&deg;C
            </p>
            <p>
               The Weather can be  describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
            </p>
        
          </Typography>
        </CardContent>
      </Card>
      </div>
      
    </div>
  );
}
