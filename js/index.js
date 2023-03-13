//
//
//
async function search(newResponse) {
  let response  = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=020fcbb049e646bf864140532232702&q=${newResponse}&days=3`);

  if (response.ok && 400 != response.status) {
    let newResponse = await response.json();

    console.log(newResponse.current);

    displayCurrent(newResponse.location, newResponse.current),
    displayAnother(newResponse.forecast.forecastday)
  }
}
document.getElementById("search").addEventListener("keyup", (newResponse) => {
  search(newResponse.target.value);
  
});

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function displayCurrent(newResponse, response) {
  if (null != response) {

    var e = new Date(response.last_updated.replace(" ", "T"));
    let n = `<div class="forecast today">
    <div class="forecast-header" id="today">
        <div class="day">${days[e.getDay()]}</div>
        <div class="date">${e.getDate() +" "+ monthNames[e.getMonth()]}</div>
    </div>
    <div class="forecast-contant" id="current">
        <div class="location">${newResponse.name}</div>
        <div class="degree">
            <div class="num">
            ${response.temp_c}
                <sup>o</sup>
                C
            </div>
            <div class="forecast-icon d-inline-block">
            <img src="https:${response.condition.icon}" alt="" width=90>
            </div>
            <div class="custom">${response.condition.text}</div>
            <span>
                <img src="img/icon-umberella.png" alt="">
                20%
            </span>
            <span>
                <img src="img/icon-wind.png" alt="">
                18 km/h
            </span>
            <span>
                <img src="img/icon-compass.png" alt="">
                East
            </span>
        </div>
    </div>
  </div> `;
    document.getElementById("forecast").innerHTML = n;
  }
}
function displayAnother(newResponse) {
  let t = "";
  for (let e = 1; e < newResponse.length; e++)
    t += `<div class="forecast">
    <div class="forecast-header">
        <div class="day">${days[new Date(newResponse[e].date.replace(" ", "T")).getDay()]}</div>
    </div>
    <div class="forecast-contant text-center">
        <div class="forecast-icon">
        <img src="https:${newResponse[e].day.condition.icon}" alt="" width=48>
        </div>
        <div class="degree">
        ${newResponse[e].day.maxtemp_c}
            <sup>o</sup>
            C
        </div>
        <small>
        ${newResponse[e].day.mintemp_c}
            <sup>o</sup>
        </small>
        <div class="custom">${newResponse[e].day.condition.text}</div>
    </div>
</div>`;
  document.getElementById("forecast").innerHTML += t;
}

search("Tanta");



