var app = function(){
  var url = 'http://chargepoints.dft.gov.uk/api/retrieve/type/format/json';
  var button = document.getElementById('fetch-btn');

  button.addEventListener('click', function(){
    console.log("fetching...");
    makeRequest(url, requestComplete);
  });
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var points = JSON.parse(jsonString);
  populateList(points);
}

var populateList = function(points){
  var ul = document.getElementById('charging-list');

  points.forEach(function(point){
    var li = document.createElement('li');
    li.innerText = point.name;
    ul.appendChild(li);
  });

}

window.addEventListener('load', app);
