// 
// 
// 

async function search (newResponse){
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=020fcbb049e646bf864140532232702&q=${newResponse}&days=3`);
    if (response.ok && 400 != response.status) {

    let newResponse = await response.json();

    console.log(newResponse.current);
    }
}

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function displayCurrent (newResponse , response){
   if (null != response){
    let e = new Date (response.last_updated.response(" ", "T"))
   }

}





search();
