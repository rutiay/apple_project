const iphoneArray = [];

sortProductByCategory("iPhone", iphoneArray);

let iphoneSection = document.getElementById("iphoneSection");

printProduct(iphoneArray, iphoneSection, "iphone");

let preIphoneBtn = document.getElementsByClassName("iphonePreviousButton");
let nextIphoneBtn = document.getElementsByClassName("iphoneNextButton");
const iphoneImgArray = document.getElementsByClassName("iphoneImg");
const addIphoneToCartBtnArray = document.getElementsByClassName("iphoneCartBtn");

addToCart(addIphoneToCartBtnArray, iphoneArray);

nextImg(nextIphoneBtn, iphoneImgArray, iphoneArray);
PreviousImg(preIphoneBtn, iphoneImgArray, iphoneArray);