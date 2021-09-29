const ipadArray = [];

sortProductByCategory("iPad", ipadArray);

let ipadSection = document.getElementById("ipadSection");

printProduct(ipadArray, ipadSection, "ipad");

let preIpadBtn = document.getElementsByClassName("ipadPreviousButton");
let nextIpadBtn = document.getElementsByClassName("ipadNextButton");
const ipadImgArray = document.getElementsByClassName("ipadImg");
const addIpadToCartBtnArray = document.getElementsByClassName("ipadCartBtn");

addToCart(addIpadToCartBtnArray, ipadArray);

nextImg(nextIpadBtn, ipadImgArray, ipadArray);
PreviousImg(preIpadBtn, ipadImgArray, ipadArray);