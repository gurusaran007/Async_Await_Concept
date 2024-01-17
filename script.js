
// Rest countriesd task

var container  =  document.createElement("div");
container.className ="container"

var row = document.createElement("div");
row.className = "row"


async function get_data() {
  var f1 = await fetch("https://restcountries.com/v3.1/all");
  var res = await f1.json();
  
  for(let i=0;i<res.length;i++)
  {
    var country_name = res[i].name.common;
    var capital= res[i].capital;
    var latlng = res[i].latlng;
    open_data(country_name,...latlng,capital);
  }

}

get_data();



async function open_data(country_name,lat,lng,capital)
{
  try{
    if(lat==undefined)
    {
      throw new Error("Invalid data lost");
    }
    
    var result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b31b64989f8d9bc869d9b0e245134eb2`);
    var final_result = await result.json();
    var col  = document.createElement("div");
    col.className = "col-md-4" 
    col.innerHTML+= 
    `<div class="card" style="width: 18rem;">
    
    <div class="card-body">
    <p class="card-text"><b>Country name</b>: ${country_name}</p>
    <p class="card-text"><b>Capital</b>:${capital}</p>
    <p class="card-text"><b>temp</b>:${final_result.main.temp}</p>
    </div>
  </div>`
   row.append(col);
   container.append(row);
   document.body.append(container);
    
  }
  catch(error)
  {
      console.log("error"+error.message);
  }

    
}





