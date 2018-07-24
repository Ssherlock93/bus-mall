'use strict';

//Global variable for total amount of times each image has been chosen

//var totalClicks = 0;
var imageInfo = [];

//Constructor function to add all of the image data 

function CatalogImages(imgName, imgPath) {
  this.imgName = imgName;
  this.imgPath = imgPath;
  this.imgTotalClicks = 0;
  this.totalTimesShown = 0;
  imageInfo.push(this);
}


// Creating a new instance for each of the images in the img folder

new CatalogImages('Bag','img/bag.jpg');
new CatalogImages('Banana','img/banana.jpg');
new CatalogImages('Bathroom','img/bathroom.jpg');
new CatalogImages('Boots','img/boots.jpg');
new CatalogImages('Breakfast','img/breakfast.jpg');
new CatalogImages('Bubblegum','img/bubblegum.jpg');
new CatalogImages('Chair','img/chair.jpg');
new CatalogImages('Cthulhul','img/cthulhul.jpg');
new CatalogImages('Dog','img/dog.jpg');
new CatalogImages('Dragon','img/dragon.jpg');
new CatalogImages('Pen','img/pen.jpg');
new CatalogImages('Pet','img/pet.jpg');
new CatalogImages('Scissors','img/scissors.jpg');
new CatalogImages('Shark','img/shark.jpg');
new CatalogImages('Sweep','img/sweep.jpg');
new CatalogImages('TaunTaun','img/tauntaun.jpg');
new CatalogImages('Unicorn','img/unicorn.jpg');
new CatalogImages('USB','img/usb.gif');
new CatalogImages('WaterCan','img/water-can.jpg');
new CatalogImages('Wine Glass','img/wine-glass.jpg');




//Linking the image elements on index.html 
// var firstRandoImgEl = document.getElementById('firstRandoImg');
// var secondRandoImgEl = document.getElementById('secondRandoImg');
// var thirdRandoImgEl = document.getElementById('thirdRandoImg');

// Function to generate the three random images to be displayed 
function genRandomImage() {
  var randomImage1 = Math.floor(Math.random() * imageInfo.lenth);
  var randomImage2 = Math.floor(Math.random() * imageInfo.length);
  var randomImage3 = Math.floor(Math.random() * imageInfo.length);
  console.log(randomImage1, randomImage2, randomImage3);
  console.log(genRandomImage);

}

genRandomImage();