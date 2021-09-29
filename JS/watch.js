const watchArray = [];

sortProductByCategory("Apple Watch", watchArray);

let watchSection = document.getElementById("appleWatchSection");

for (let index = 0; index < watchArray.length; index++) {
    watchSection.innerHTML += `<article>
    <img class="appleWatchImg" src=${watchArray[index].pictures[0]}>
    <h1>${watchArray[index].name}</h1>
    <p>${watchArray[index].description}</p>
    <p>${watchArray[index].price}₪</p>
    <button type="button" class="watchCartBtn">Add To Cart</button>
    </article>` 
};
 
const watchImgArray = document.getElementsByClassName("appleWatchImg");

for (let index = 0; index < watchImgArray.length; index++) {
    watchImgArray[index].addEventListener("mouseover", () => {
        watchImgArray[index].src = watchArray[index].pictures[1];
    })
    watchImgArray[index].addEventListener("mouseout", () => {
        watchImgArray[index].src = watchArray[index].pictures[0];
    })
}

const addWatchToCartBtnArray = document.getElementsByClassName("watchCartBtn");

addToCart(addWatchToCartBtnArray, watchArray);