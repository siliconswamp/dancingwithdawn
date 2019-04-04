var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.uploadcare.com/files/?stored=true&limit=100",
  "method": "GET",
  "headers": {
    "Authorization": "Uploadcare.Simple ed80130d4b7b3182afd0:0a0d8dd9513261f7a185"
  }
}

$.ajax(settings).done(function (response) {


  let imgArray = new Array(response.results.length);
  for(var i = 0; i < response.results.length; i++){
  
  imgArray[i] = "https://ucarecdn.com/" + response.results[i].uuid + "/-/scale_crop/300x200/-/quality/best/";

}



var container = document.getElementById("wrapper");

for( i=0; i<response.results.length; i++){
  //container.insertAdjacentHTML('beforeend', '<img src="'+imgArray[i]+'">');

  var img = document.createElement("img");
img.src = imgArray[i];

var src = document.getElementById("foto");
src.appendChild(img);

//   var img = new Image();
// var div = document.getElementByClassName('x');
 
 
// img.onload = function() {
 
//   div.innerHTML += '<img src="'+imgArray[i]+'" />'; 
 
// };
}



}); 

