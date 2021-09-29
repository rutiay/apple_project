const macArray = [];

sortProductByCategory("Mac", macArray);

let macSection = document.getElementById("macSection");

printProduct(macArray, macSection, "mac");

let preMacBtn = document.getElementsByClassName("macPreviousButton");
let nextMacBtn = document.getElementsByClassName("macNextButton");
const macImgArray = document.getElementsByClassName("macImg");
const addMacToCartBtnArray = document.getElementsByClassName("macCartBtn");

addToCart(addMacToCartBtnArray, macArray);

nextImg(nextMacBtn, macImgArray, macArray);
PreviousImg(preMacBtn, macImgArray, macArray);
