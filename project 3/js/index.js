// Your API key is: 09bffd907d844db49920d588128a02af
// 3d2fff6da19e457a819ba5288cfc27f1
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6c3373620c2c44a5bb75533a1fea2602
console.log("this is news website");
// let accordion = document.getElementById("accordion");
// // make the httpobject
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=6c3373620c2c44a5bb75533a1fea2602", true);

// xhr.onload = function() {
//   if(this.status === 200){
//     let json = JSON.parse(this.responseText);
//     console.log(json);
//   }
//   else
//   {
//     console.log("some error are occred")
//   }
// }
// xhr.send()
let newsaccordion = document.getElementById("newsaccordion");
let accordion = document.getElementById("accordion")
fetch("https://api.covid19api.com/summary").then((apidata) => {
  console.log(apidata);
  return apidata.json();
}).then((actualdata) => {
  const data = actualdata.Countries;
  console.log(data)
  let newhtml = '';
  data.forEach(function(element) {
    let news = ` <div class="card">
    <div class="card-header" id="heading">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ${element.Country}
        </button>
      </h5>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
      <p>CountryCode: ${element.CountryCode}</p>
      <hr>
      <p>Slug: ${element.Slug}</p>
      <hr>
      <p>NewConfirmed: ${element.NewConfirmed}</p>
      <hr>
      <p>TotalConfirmed: ${element.TotalConfirmed}</p>
      <hr>

      </div>
    </div>
  </div>`
  newhtml += news;

    
  });
  newsaccordion.innerHTML = newhtml;

}).catch((error) => {
  console.log(error);
})