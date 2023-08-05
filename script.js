var API = "https://restcountries.com/v3.1/all";


var fet = fetch(API)
  .then((response) => response.json())
  .then((data) => {
    
    data.map((value) => {
      var spreadOperator = {
        ...value,
        name: value.name.common,
        flag: value.flags.png,
        code: value.cioc,
        capital: value.capital,
        region: value.region,
      
      };
      createcountry(spreadOperator);
      
      
     
        // console.log(value)
    })
  })
  
  
   
function createcountry({ name, flag, code, capital, region}) {
   
  document.body.innerHTML += 
  ` <div class="container">
    <div class="card"  >
    <h1 id="title" class="text-center">${name}</h1>
    <img src="${flag}" class="flag" alt="${name}'Flag image">
 
  <div class="card-body car" >
 <p><span>Captial :</span> ${capital}</p>
  <p><span>Region :</span> ${region}</p>
  <p><span>Country Code :</span>${code}</p>
  <a href="#" class="btn btn-primary" >Go to Weather</a>
 <div id=${name}>   </div>
  
 
  </div>
</div>
</div>
`
}



