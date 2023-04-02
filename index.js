

let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener('click',(e)=>{
  e.preventDefault();
  getWeather(searchInput.value);
  searchInput.value=' ';


})

const getWeather=async(city)=>{

try{
  const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=07c110cd1d5d704aeae36e70c4501b6e`)

 
  const weatherDeta=await response.json();
  console.log(weatherDeta);

  const{name}=weatherDeta;
  const{feels_like}=weatherDeta.main;
  const{id,main}=weatherDeta.weather[0];

  loc.textContent=name;
  climate.textContent=main;
  tempValue.textContent=Math.round(feels_like-273);

  if(id<300 && id>200)
          {
            tempicon.src="./images/clouds.png"
          }

          else if(id<400 && id>300)
          {
            tempicon.src="./images/clouds.png"
          }

         else if(id<600 && id>500)
          {
            tempicon.src="./images/rain.png"
          }

          else if(id<700 && id>600)
          {
            tempicon.src="./images/snow.png"
          }
          else if(id<800 && id>700)
          {
            tempicon.src="./images/clouds.png"
          }
          else if(id==800)
          {
            tempicon.src="./images/clear.png"
          }



}
catch(erroe)
{
  alert('city not found');
}


};





window.addEventListener("load", () => {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=07c110cd1d5d704aeae36e70c4501b6e`;

      fetch(api)
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          const { name } = data;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];

          loc.textContent = name;
          climate.textContent = main;
          tempValue.textContent = Math.round(feels_like - 237);

          if(id<300 && id>200)
          {
            tempicon.src="./images/clouds.png"
          }

          else if(id<400 && id>300)
          {
            tempicon.src="./images/clouds.png"
          }

         else if(id<600 && id>500)
          {
            tempicon.src="./images/rain.png"
          }

          else if(id<700 && id>600)
          {
            tempicon.src="./images/snow.png"
          }
          else if(id<800 && id>700)
          {
            tempicon.src="./images/clouds.png"
          }
          else if(id==800)
          {
            tempicon.src="./images/clear.png"
          }

          console.log(data);
        });
    });
  }
});





