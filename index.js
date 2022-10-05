const cards=[
    {
        id:"card_0",
        img: "/img/2.1.jpg",
        stars: "stars-num-icon-4-5",
        about: "Outdoor Tactical Backpack,Mountaineering Backpack,75L Large Capacity Waterproof… ",
        votes: 357,
        price: "$29.99",
        icon: "price-icon"
        
        
    },
    {
        id:"card_1",
        img: "/img/2.2.jpg",
        stars: "stars-num-icon-4-5",
        about: "WUDON Men Travel Backpack, Genuine Leather-Waxed Canvas Shoulder Hiking… ",
        votes: 3.516,
        price: "$28.99",
        icon: "price-icon"
        
    },
    {
        id:"card_2",
        img: "/img/2.3.jpg",
        stars: "stars-num-icon-4-5",
        about: "Domke Backpack, Camouflage, Large ",
        votes: 116,
        price: "$78.99",
        icon: "price-icon"
    },
    {
        id:"card_3",
        img: "/img/2.4.jpg",
        stars: "stars-num-icon-4-5",
        about: "Vertx Gamut 2.0 Backpack, Heather Reef/Colonial Blue, 21 Inch.",
        votes: 118,
        price: "$109.99",
        icon: "price-icon"
    },
    {
        id:"card_4",
        img: "/img/2.5.jpg",
        stars: "stars-num-icon-4-5",
        about: "Champion Advocate Backpack",
        votes: 2528,
        price: "$203.99",
        icon: "price-icon"
    },
    {
        id:"card_5",
        img: "/img/2.6.jpg",
        stars: "stars-num-icon-4",
        about: "ATHLIO Gym Bag Backpack - External Ball & Equipment Pocket | For Sports Workout & T.",
        votes: 197,
        price: "$95.34",
        icon: "price-icon"
        
    },
   
];

const card = document.querySelector(".carousle_main-all-cards");

function addInnerHtml(arr){
    let cardInfo = ``;
    for(let i=0; i<arr.length; i++){

        let info = `<div id="${arr[i].id}" class="carousle_main-card" >
        <img src="${arr[i].img}" alt="" srcset="">
        <div class="description"><p>${arr[i].about}</p></div>
        <div class="stars-num"><div class="${arr[i].stars}"></div><p>${arr[i].votes}</p></div>
        <div class="card-price">${arr[i].price}<div class="${arr[i].icon}"></div></div>
        </div>`;

        cardInfo += info;
    }
    return cardInfo;
}


const cardInfo=addInnerHtml(cards);
card.innerHTML += cardInfo;

//! added an item to the cart

function clickOn(){   
    let num = document.querySelector("#card-num"); 
    let value= num.innerHTML;
    value++;
    document.querySelector("#card-num").innerHTML = value;
}