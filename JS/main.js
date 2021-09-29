var productsArray = [
    {
        id: 1,
        name: "iPhone Xr",
        price: 2300,
        description: "Black",
        category: "iPhone",
        pictures: ["../media/img/iphone-xr-black-select-201809.jpg", "../media/img/black_xr-2.png"]
    },
    {
        id: 2,
        name: "iPhone Xr",
        price: 2300,
        description: "Blue",
        category: "iPhone",
        pictures: ["../media/img/iphone-xr-blue-select-201809.jpg", "../media/img/blue_xr-2.png"]
    },
    {
        id: 3,
        name: "iPhone Xr",
        price: 2300,
        description: "Coral",
        category: "iPhone",
        pictures: ["../media/img/iphone-xr-coral-select-201809.jpg", "../media/img/coral_xr.png"]
    },
    {
        id: 4,
        name: "iPhone Xr",
        price: 2300,
        description: "Yellow",
        category: "iPhone",
        pictures: ["../media/img/iphone-xr-yellow-select-201809.jpg", "../media/img/yellow_xr.png"]
    },
    {
        id: 5,
        name: "iPhone Xr",
        price: 2300,
        description: "White",
        category: "iPhone",
        pictures: ["../media/img/iphone-xr-white-select-201809.jpg", "../media/img/white_xr.png"]
    },
    {
        id: 6,
        name: "iPhone 12 Pro",
        price: 4099,
        description: "Graphite",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-pro-graphite-hero.png", "../media/img/iphone-pro-gra-2.webp",
            "../media/img/iphone-pro-gra-3.jpg"]
    },
    {
        id: 7,
        name: "iPhone 12 Pro",
        price: 4099,
        description: "Silver",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-pro-silver-hero.png", "../media/img/iphone-pro-silver-2.webp",
            "../media/img/iphone-pro-silver-3.webp"]
    },
    {
        id: 8,
        name: "iPhone 12 Pro",
        price: 4099,
        description: "Gold",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-pro-gold-hero.png", "../media/img/iphone-pro-gold-2.webp",
            "../media/img/iphone-pro-gold-3.webp"]
    },
    {
        id: 9,
        name: "iPhone 12 Pro",
        price: 4099,
        description: "Pacific Blue",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-pro-blue-hero.png", "../media/img/iphone-pro-blue-2.webp",
            "../media/img/iphone-pro-blue-3.jpg"]
    },
    {
        id: 10,
        name: "iPhone 12",
        price: 3049,
        description: "White",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-white-select-2020.png", "../media/img/iphone-12-white-2.webp",
            "../media/img/iphone-12-white-3.webp"]
    },
    {
        id: 11,
        name: "iPhone 12",
        price: 3049,
        description: "Black",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-black-select-2020.png", "../media/img/iphone-12-black-2.png",
            "../media/img/iphone-12-black-3.jpg"]
    },
    {
        id: 12,
        name: "iPhone 12",
        price: 3049,
        description: "Blue",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-blue-select-2020.png", "../media/img/iphone-12-blue-2.png",
            "../media/img/iphone-12-blue-3.jpg"]
    },
    {
        id: 13,
        name: "iPhone 12",
        price: 3049,
        description: "Green",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-green-select-2020.png", "../media/img/iphone-12-green-2.png",
            "../media/img/iphone-12-green-3.jpg"]
    },
    {
        id: 14,
        name: "iPhone 12",
        price: 3049,
        description: "Purple",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-purple-select-2021.png", "../media/img/iphone-12-purple-2.webp",
            "../media/img/iphone-12-purple-3.webp"]
    },
    {
        id: 15,
        name: "iPhone SE",
        price: 2099,
        description: "White",
        category: "iPhone",
        pictures: ["../media/img/iphone-se-white-select-2020.png", "../media/img/iphone-se-white-2.webp"]
    },
    {
        id: 16,
        name: "iPhone SE",
        price: 2099,
        description: "Black",
        category: "iPhone",
        pictures: ["../media/img/iphone-se-black-select-2020.png", "../media/img/apple-iphone-se-black-2.jpeg"]
    },
    {
        id: 17,
        name: "iPhone SE",
        price: 2099,
        description: "Red",
        category: "iPhone",
        pictures: ["../media/img/iphone-se-red-select-2020.png", "../media/img/iphone-se-red-2.jpg"]
    },
    {
        id: 18,
        name: "iPad Pro",
        price: 3500,
        description: "11-inch display - Space Gray",
        category: "iPad",
        pictures: ["../media/img/ipad-pro-11-select-cell-spacegray-202104.jpg",
            "../media/img/ipad-pro-11-select-cell-spacegray-1.jpeg"]
    },
    {
        id: 19,
        name: "iPad Pro",
        price: 3500,
        description: "11-inch display - Silver",
        category: "iPad",
        pictures: ["../media/img/ipad-pro-11-select-cell-silver-202104.jpg",
            "../media/img/ipad-pro-11-select-cell-silver-1.jpeg"]
    },
    {
        id: 20,
        name: "iPad Pro",
        price: 3900,
        description: "12.9-inch display - Space Gray",
        category: "iPad",
        pictures: ["../media/img/ipad-pro-12-select-cell-spacegray-202104.jpg",
            "../media/img/SpaceGrey_Apple_iPadPro_02.webp"]
    },
    {
        id: 21,
        name: "iPad Pro",
        price: 3900,
        description: "12.9-inch display - Silver",
        category: "iPad",
        pictures: ["../media/img/ipad-pro-12-select-cell-silver-202104.jpg",
            "../media/img/Silver_Apple_iPadPro_02.webp"]
    },
    {
        id: 22,
        name: "iPad Air",
        price: 2450,
        description: "Space Gray",
        category: "iPad",
        pictures: ["../media/img/ipad-air-select-wifi-spacegray-202009.png",
            "../media/img/iPad_Air_Wi-Fi_Space_Gray_2-up_Screen.jpeg"]
    },
    {
        id: 23,
        name: "iPad Air",
        price: 2450,
        description: "Silver",
        category: "iPad",
        pictures: ["../media/img/ipad-air-select-wifi-silver-202009.png",
            "../media/img/iPad_Air_Wi-Fi_Silver_2-up_Screen.jpeg"]
    },
    {
        id: 24,
        name: "iPad Air",
        price: 2450,
        description: "Rose Gold",
        category: "iPad",
        pictures: ["../media/img/ipad-air-select-wifi-gold-202009.png",
            "../media/img/iPad_Air_Wi-Fi_Rose_Gold_2-up_Screen.jpeg"]
    },
    {
        id: 25,
        name: "iPad Air",
        price: 2450,
        description: "Green",
        category: "iPad",
        pictures: ["../media/img/ipad-air-select-wifi-green-202009.png",
            "../media/img/iPad_Air_Wi-Fi_Green_2-up_Screen.jpeg"]
    },
    {
        id: 26,
        name: "iPad Air",
        price: 2450,
        description: "Sky Blue",
        category: "iPad",
        pictures: ["../media/img/ipad-air-select-wifi-blue-202009.png",
            "../media/img/iPad_Air_Wi-Fi_Sky_Blue_2-up_Screen.jpeg"]
    },
    {
        id: 27,
        name: "iPad",
        price: 3049,
        description: "Space Gray",
        category: "iPad",
        pictures: ["../media/img/ipad-2020-hero-space-wifi-select.png", "../media/img/ipad-2020-sg-2.jpg"]
    },
    {
        id: 28,
        name: "iPad",
        price: 3049,
        description: "Silver",
        category: "iPad",
        pictures: ["../media/img/ipad-2020-hero-silver-wifi-select.png", "../media/img/ipad-2020-silver-2.jpg"]
    },
    {
        id: 29,
        name: "iPad",
        price: 3049,
        description: "Gold",
        category: "iPad",
        pictures: ["../media/img/ipad-2020-hero-gold-wifi-select.png", "../media/img/ipad-2020-gold-2.jpg"]
    },
    {
        id: 30,
        name: "Magic Keyboard",
        price: 600,
        description: "Magic Keyboard for iPad Pro 12.9‑inch (5th generation) - Black",
        category: "iPad",
        pictures: ["../media/img/Magic-Keyboard-black-1.jpg", "../media/img/Magic-Keyboard-black-2.jpg",
            "../media/img/Magic-Keyboard-black-3.jpg"]
    },
    {
        id: 31,
        name: "Magic Keyboard",
        price: 600,
        description: "Magic Keyboard for iPad Pro 12.9‑inch (5th generation) - White",
        category: "iPad",
        pictures: ["../media/img/Magic-Keyboard-white-1.jpg", "../media/img/Magic-Keyboard-white-2.jpg",
            "../media/img/Magic-Keyboard-white-4.jpg", "../media/img/Magic-Keyboard-white-5.jpg"]
    },
    {
        id: 32,
        name: "Apple Pencil (2nd generation)",
        price: 700,
        description: "2nd generation",
        category: "iPad",
        pictures: ["../media/img/ApplePencil-(2nd-generation)-1.jpg",
            "../media/img/ApplePencil-(2nd-generation)-2.jpg"]
    },
    {
        id: 33,
        name: "Apple Pencil (1st generation)",
        price: 500,
        description: "1st generation",
        category: "iPad",
        pictures: ["../media/img/ApplePencil-(1st-generation)-1.jpg",
            "../media/img/ApplePencil-(1st-generation)-2.jpg",
            "../media/img/ApplePencil-(1st-generation)-3.jpg"]
    },
    {
        id: 34,
        name: "Keyboard Case",
        price: 650,
        description: "Logitech Combo Touch Keyboard Case with Trackpad for iPad Pro 11-inch (3rd generation)",
        category: "iPad",
        pictures: ["../media/img/Keyboard-Case-1.jpg", "../media/img/Keyboard-Case-2.jpg",
            "../media/img/Keyboard-Case-3.jpg", "../media/img/Keyboard-Case-4.jpg",
            "../media/img/Keyboard-Case-5.jpg", "../media/img/Keyboard-Case-6.jpg"]
    },
    {
        id: 35,
        name: "MacBook Pro",
        price: 6500,
        description: "MacBook Pro 13‑inch - Space Gray",
        category: "Mac",
        pictures: ["../media/img/mbp-spacegray-1.jpg", "../media/img/mbp-spacegray-2.jpg",
            "../media/img/mbp-spacegray-3.jpg", "../media/img/mbp-spacegray-4.jpg"]
    },
    {
        id: 36,
        name: "24” iMac",
        price: 5500,
        description: "Blue",
        category: "Mac",
        pictures: ["../media/img/imac-24-blue-1.jpg", "../media/img/imac-24-blue-2.jpg",
            "../media/img/imac-24-blue-3.jpg"]
    },
    {
        id: 37,
        name: "24” iMac",
        price: 5500,
        description: "Pink",
        category: "Mac",
        pictures: ["../media/img/imac-24-pink-1.jpg", "../media/img/imac-24-pink-2.jpg",
            "../media/img/imac-24-pink-3.jpg"]
    },
    {
        id: 38,
        name: "24” iMac",
        price: 5500,
        description: "Silver",
        category: "Mac",
        pictures: ["../media/img/imac-24-silver-1.jpg", "../media/img/imac-24-silver-2.jpg",
            "../media/img/imac-24-silver-3.jpg"]
    },
    {
        id: 39,
        name: "24” iMac",
        price: 5500,
        description: "Yellow",
        category: "Mac",
        pictures: ["../media/img/imac-24-yellow-1.jpg", "../media/img/imac-24-yellow-2.jpg",
            "../media/img/imac-24-yellow-3.jpg"]
    },
    {
        id: 40,
        name: "24” iMac",
        price: 5500,
        description: "Purple",
        category: "Mac",
        pictures: ["../media/img/imac-24-purple-1.jpg", "../media/img/imac-24-purple-2.jpg",
            "../media/img/imac-24-purple-3.jpg"]
    },
    {
        id: 41,
        name: "27” iMac",
        price: 7000,
        description: "27‑inch iMac with Retina 5K display",
        category: "Mac",
        pictures: ["../media/img/imac-27-gallery-1.jpg", "../media/img/imac-27-gallery-2.jpg",
            "../media/img/imac-27-gallery-3.jpg", "../media/img/imac-27-gallery-4.jpg"]
    },
    {
        id: 42,
        name: "Pro Display XDR",
        price: 5800,
        description: "32-inch Retina 6K display",
        category: "Mac",
        pictures: ["../media/img/pro-display-gallery1-201909.jpg",
            "../media/img/pro-display-gallery2-201909.jpg", "../media/img/pro-display-gallery3-201909.jpg",
            "../media/img/pro-display-gallery4-201909.jpg", "../media/img/pro-display-gallery5-201909.jpg"]
    },
    {
        id: 43,
        name: "MacBook Air",
        price: 3560,
        description: "Gold",
        category: "Mac",
        pictures: ["../media/img/macbook-air-gold-1.jpg", "../media/img/macbook-air-gold-2.jpg"]
    },
    {
        id: 44,
        name: "MacBook Air",
        price: 3560,
        description: "Space Gray",
        category: "Mac",
        pictures: ["../media/img/macbook-air-spacegray-1.jpg", "../media/img/macbook-air-spacegray-2.jpg",
            "../media/img/macbook-air-spacegray-3.jpg"]
    },
    {
        id: 45,
        name: "MacBook Air",
        price: 3560,
        description: "Silver",
        category: "Mac",
        pictures: ["../media/img/macbook-air-silver-1.jpg", "../media/img/macbook-air-silver-2.jpg",
            "../media/img/macbook-air-silver-3.jpg"]
    },
    {
        id: 46,
        name: "Mac mini",
        price: 2400,
        description: "Space Gray",
        category: "Mac",
        pictures: ["../media/img/mac-mini-spacegray-1.jpg", "../media/img/mac-mini-spacegray-2.jpg",
            "../media/img/mac-mini-spacegray-3.jpg", "../media/img/mac-mini-spacegray-4.jpg"]
    },
    {
        id: 47,
        name: "Mac mini",
        price: 2400,
        description: "Silver",
        category: "Mac",
        pictures: ["../media/img/mac-mini-1.jpg", "../media/img/mac-mini-2.jpg", "../media/img/mac-mini-3.jpg",
            "../media/img/mac-mini-4.jpg"]
    },
    {
        id: 48,
        name: "Mac Pro",
        price: 5090,
        description: "Silver",
        category: "Mac",
        pictures: ["../media/img/mac-pro-2019-1.jpg", "../media/img/mac-pro-2019-2.jpg",
            "../media/img/mac-pro-2019-3.jpg", "../media/img/mac-pro-2019-4.jpg",
            "../media/img/mac-pro-2019-5.jpg"]
    },
    {
        id: 49,
        name: "Magic Keyboard",
        price: 250,
        description: "Magic Keyboard with Touch ID and Numeric Keypad for Mac models with Apple silicon",
        category: "Mac",
        pictures: ["../media/img/Magic-Keyboard-for-Mac-1.jpg", "../media/img/Magic-Keyboard-for-Mac-2.jpg",
            "../media/img/Magic-Keyboard-for-Mac-3.jpg"]
    },
    {
        id: 50,
        name: "Magic Trackpad",
        price: 199,
        description: "White",
        category: "Mac",
        pictures: ["../media/img/Magic-Trackpad-1.jpg", "../media/img/Magic-Trackpad-2.jpg",
            "../media/img/Magic-Trackpad-3.jpg", "../media/img/Magic-Trackpad-4.jpg"]
    },
    {
        id: 51,
        name: "Magic Mouse",
        price: 149,
        description: "White",
        category: "Mac",
        pictures: ["../media/img/Magic-Mouse-1.jpg", "../media/img/Magic-Mouse-2.jpg",
            "../media/img/Magic-Mouse-3.jpg", "../media/img/Magic-Mouse-4.jpg"]
    },
    {
        id: 52,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Space Grey Aluminium Case with Sport Band - Cantaloupe Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Cantaloupe-1.jpg", "../media/img/watch-Cantaloupe-2.jpg"]
    },
    {
        id: 53,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Space Grey Aluminium Case with Sport Band - Capri Blue Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Capri-Blue-1.jpg", "../media/img/watch-Capri-Blue-2.jpg"]
    },
    {
        id: 54,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Space Grey Aluminium Case with Sport Band - Mallard Green Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Mallard-Green-1.jpg", "../media/img/watch-Mallard-Green-2.jpg"]
    },
    {
        id: 55,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Space Grey Aluminium Case with Sport Band - Pink Sand Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Pink-Sand-1.jpg", "../media/img/watch-Pink-Sand-2.jpg"]
    },
    {
        id: 56,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Space Grey Aluminium Case with Sport Band - White Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-White-1.jpg", "../media/img/watch-White-2.jpg"]
    },
    {
        id: 57,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Space Grey Aluminium Case with Sport Band - Black Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Black-1.jpg", "../media/img/watch-Black-2.jpg"]
    },
    {
        id: 58,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Silver Aluminium Case with Solo Loop - Pistachio Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Pistachio-1.jpg", "../media/img/watch-Pistachio-2.jpg"]
    },
    {
        id: 59,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Silver Aluminium Case with Solo Loop - Plum Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Plum-1.jpg", "../media/img/watch-Plum-2.jpg"]
    },
    {
        id: 60,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Silver Aluminium Case with Solo Loop - Kumquat Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Kumquat-1.jpg", "../media/img/watch-Kumquat-2.jpg"]
    },
    {
        id: 61,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Silver Aluminium Case with Solo Loop - Pink Citrus Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Pink-Citrus-1.jpg", "../media/img/watch-Pink-Citrus-2.jpg"]
    },
    {
        id: 62,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Silver Aluminium Case with Solo Loop - Ginger Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Ginger-1.jpg", "../media/img/watch-Ginger-2.jpg"]
    },
    {
        id: 63,
        name: "Apple Watch Series 6",
        price: 1999,
        description: "Silver Aluminium Case with Solo Loop - Tomales Blue Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Tomales-Blue-1.jpg", "../media/img/watch-Tomales-Blue-2.jpg"]
    },
    {
        id: 64,
        name: "Apple Watch Series 6",
        price: 2100,
        description: "Silver Aluminium Case with Braided Solo Loop - Pride Edition Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Pride-Edition-1.jpg", "../media/img/watch-Pride-Edition-2.jpg"]
    },
    {
        id: 65,
        name: "Apple Watch Series 6",
        price: 2700,
        description: "Gold Stainless Steel Case with Leather Link - California Poppy Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-California-Poppy-1.jpg", "../media/img/watch-California-Poppy-2.jpg"]
    },
    {
        id: 66,
        name: "Apple Watch Series 6",
        price: 2049,
        description: "Silver Stainless Steel Case with Modern Buckle - Saddle Brown Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Saddle-Brown-1.jpg", "../media/img/watch-Saddle-Brown-2.jpg"]
    },
    {
        id: 67,
        name: "Apple Watch Series 6",
        price: 1970,
        description: "Silver Aluminium Case with Nike Sport Loop - Spruce Aura Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Spruce-Aura-1.jpg", "../media/img/watch-Spruce-Aura-2.jpg"]
    },
    {
        id: 68,
        name: "Apple Watch Series 6",
        price: 2999,
        description: "Silver Stainless Steel Case with Attelage Double Tour - Fauve Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Fauve-1.jpg", "../media/img/watch-Fauve-2.jpg"]
    }
];

const cartArray = [
    {
        id: 6,
        name: "iPhone 12 Pro",
        price: 4099,
        description: "Graphite",
        category: "iPhone",
        pictures: ["../media/img/iphone-12-pro-graphite-hero.png", "../media/img/iphone-pro-gra-2.webp",
            "../media/img/iphone-pro-gra-3.jpg"]
    },
    {
        id: 68,
        name: "Apple Watch Series 6",
        price: 2999,
        description: "Silver Stainless Steel Case with Attelage Double Tour - Fauve Band",
        category: "Apple Watch",
        pictures: ["../media/img/watch-Fauve-1.jpg", "../media/img/watch-Fauve-2.jpg"]
    },
    {
        id: 30,
        name: "Magic Keyboard",
        price: 600,
        description: "Magic Keyboard for iPad Pro 12.9‑inch (5th generation) - Black",
        category: "iPad",
        pictures: ["../media/img/Magic-Keyboard-black-1.jpg", "../media/img/Magic-Keyboard-black-2.jpg",
            "../media/img/Magic-Keyboard-black-3.jpg"]
    },
    {
        id: 20,
        name: "iPad Pro",
        price: 3900,
        description: "12.9-inch display - Space Gray",
        category: "iPad",
        pictures: ["../media/img/ipad-pro-12-select-cell-spacegray-202104.jpg",
            "../media/img/SpaceGrey_Apple_iPadPro_02.webp"]
    },
    {
        id: 38,
        name: "24” iMac",
        price: 5500,
        description: "Silver",
        category: "Mac",
        pictures: ["../media/img/imac-24-silver-1.jpg", "../media/img/imac-24-silver-2.jpg",
            "../media/img/imac-24-silver-3.jpg"]
    }
];

function sortProductByCategory(category, newArray) {
    for (let i = 0; i < productsArray.length; i++) {
        if (productsArray[i].category == category) {
            newArray.push(productsArray[i]);
        }
    }
}

function printProduct(productsArray, section, productName) {
    for (let index = 0; index < productsArray.length; index++) {
        section.innerHTML += `<article>
        <button class="${productName}PreviousButton">&#8249;</button>
        <img class="${productName}Img" src=${productsArray[index].pictures[0]}>
        <button class="${productName}NextButton">&#8250;</button>
        <h1>${productsArray[index].name}</h1>
        <p>${productsArray[index].description}</p>
        <p>${productsArray[index].price}₪</p>
        <button type="button" class="${productName}CartBtn">Add To Cart</button>
        </article>`
    }
}

function nextImg(nextButtonArray, imgArray, productsArray) {
    for (let index = 0; index < nextButtonArray.length; index++) {
        let imgCounter = 0;
        nextButtonArray[index].addEventListener("click", () => {
            imgCounter = ++imgCounter % productsArray[index].pictures.length;
            imgArray[index].src = productsArray[index].pictures[imgCounter]
        })
    }
}

function PreviousImg(previousButtonArray, imgArray, productsArray) {
    for (let index = 0; index < previousButtonArray.length; index++) {
        let imgCounter = 0;
        previousButtonArray[index].addEventListener("click", () => {
            imgCounter = ++imgCounter % productsArray[index].pictures.length;
            imgArray[index].src = productsArray[index].pictures[imgCounter]
        })
    }
}

function addToCart(arrayOfButtons, arrayOfProducts) {
    for (let index = 0; index < arrayOfButtons.length; index++) {
        arrayOfButtons[index].addEventListener("click", () => {
            cartArray.push(arrayOfProducts[index]);
            console.log(cartArray);
        })
    }
}

