'use strict';

//Global variable for total amount of times each image has been chosen

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

new CatalogImages('Bag','/img/bag.jpg');
new CatalogImages('Banana','/img/banana.jpg');
new CatalogImages('Bathroom','/img/bathroom.jpg');
new CatalogImages('Boots','/img/boots.jpg');
new CatalogImages('Breakfast','img/breakfast.jpg');
new CatalogImages('Bubblegum','img/bubblegum.jpg');
new CatalogImages('Chair','img/chair.jpg');
new CatalogImages('Cthulhul','img/cthulhu.jpg');
new CatalogImages('Dog','img/dog-duck.jpg');
new CatalogImages('Dragon','img/dragon.jpg');
new CatalogImages('Pen','img/pen.jpg');
new CatalogImages('Pet','img/pet-sweep.jpg');
new CatalogImages('Scissors','img/scissors.jpg');
new CatalogImages('Shark','img/shark.jpg');
new CatalogImages('Sweep','img/sweep.png');
new CatalogImages('TaunTaun','img/tauntaun.jpg');
new CatalogImages('Unicorn','img/unicorn.jpg');
new CatalogImages('USB','img/usb.gif');
new CatalogImages('WaterCan','img/water-can.jpg');
new CatalogImages('Wine Glass','img/wine-glass.jpg');

function randomProductgen() {
  return Math.floor(Math.random() * imageInfo.length); 
}



//Linking the image elements on index.html 
var firstRandoImg = document.getElementById('firstRandoImg');
var secondRandoImg = document.getElementById('secondRandoImg');
var thirdRandoImg = document.getElementById('thirdRandoImg');
// var container = document.getElementById('container');



// Function to generate the three random images to be displayed 
function genRandomImage() {
  var randomIndex = [];
  randomIndex[0] = (randomProductgen());
  randomIndex[1] = (randomProductgen());

  // while loop to determine whether there is a double, return new random image if there is a double
  while (randomIndex[0] === randomIndex[1]) {
    randomIndex[1] = randomProductgen();
    console.log('Duplicate');
  }
  randomIndex[2] = randomProductgen();

  while (randomIndex[2] === randomIndex[0] || randomIndex[2] === randomIndex[1]) {
    randomIndex[2] = randomProductgen();
    console.log('Duplicate Image');

  }


  firstRandoImg.src = imageInfo[randomIndex[0]].imgPath;
  secondRandoImg.src = imageInfo[randomIndex[1]].imgPath;
  thirdRandoImg.src = imageInfo[randomIndex[2]].imgPath;
  firstRandoImg.title = imageInfo[randomIndex[0]].imgName;
  secondRandoImg.title = imageInfo[randomIndex[1]].imgName;
  thirdRandoImg.title = imageInfo[randomIndex[2]].imgName;
  imageInfo[randomIndex[0]].totalTimesShown++;
  imageInfo[randomIndex[1]].totalTimesShown++;
  imageInfo[randomIndex[2]].totalTimesShown++;

  genRandomImage();


}
genRandomImage();