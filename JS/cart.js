let cart = document.getElementById("cartTable");
let sumOfProducts = document.getElementById("sum");
let shippingFee = document.getElementById("shipping");
let totalSum = document.getElementById("total");

function sum() {
    let sum = 0;
    for (const product of cartArray) {
        sum += product.price;
    }
    return sum;
}

function calculateShippingFee(sum) {
    if (sum > 2000) {
        return "Free";
    }
    return 179;
}

function calculateTotalSum(sum, shipping) {
    if (Number(shipping)) {
        return sum + shipping;
    }
    return sum;
}

for (let index = 0; index < cartArray.length; index++) {
    if (index == 0) {
        cart.innerHTML = `<tr><th colspan="2">Product</th><th>Discription</th><th>Price</th></tr>`
    }
    cart.innerHTML += `<tr id="${cartArray[index].id}">
    <td><img class="cartImg" src=${cartArray[index].pictures[0]}></td>
    <td>${cartArray[index].name}</td>
    <td>${cartArray[index].description}</td>
    <td>${cartArray[index].price}₪</td>
    <td><button onclick = "removeFromCart(${cartArray[index].id})" type="button" class="removeBtn">Remove</button></td>
    </tr>`
    sumOfProducts.innerText = `${sum()}₪`;
    shippingFee.innerText = `${calculateShippingFee(sum())}`
    totalSum.innerText = `${calculateTotalSum(sum(), calculateShippingFee(sum()))}₪`
}

const removeButtonArray = document.getElementsByClassName("removeBtn");

function removeFromCart(productId) {
    for (let index = 0; index < cartArray.length; index++) {
        if (cartArray[index].id == productId) {
            document.getElementById(productId).innerHTML = "";
            cartArray.splice(index, 1);
            sumOfProducts.innerText = `${sum()}₪`;
            if (Number(calculateShippingFee(sum()))) {
                shippingFee.innerText = `${calculateShippingFee(sum())}₪`
            }
            else{
                shippingFee.innerText = `${calculateShippingFee(sum())}`
            }
            totalSum.innerText = `${calculateTotalSum(sum(), calculateShippingFee(sum()))}₪`
        }
    }
}






