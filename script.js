let arr = [
    {
        team : "CSK",
        name : "Chenni Super Kigs",
        primary : "yellow",
        secondary : "blue",
        trophies : 5,
        caiptian : "MSD"
    },
    {
        team : "MI",
        name : "Mumbai Indians",
        primary : "blue",
        secondary : "gold",
        trophies : 5,
        caiptian : "Hardik pandya"
    },
    {
        team : "RCB",
        name : "Royal Challengers Banglore",
        primary : "red",
        secondary : "black",
        trophies : 2,
        caiptian : "Virat kholi"
    },
    {
        team : "PBKS",
        name : "Punjab Kings",
        primary : "crimson",
        secondary : "silver",
        trophies : 0,
        caiptian : "Iyer"
    },
    {
        team : "KKR",
        name : "Kolkata knight riders",
        primary : "purple",
        secondary : "gold",
        trophies : 3,
        caiptian : "Rahane"
    },
    {
        team : "SRH",
        name : "Sunrisers Hydrabad",
        primary : "orange",
        secondary : "black",
        trophies : 1,
        caiptian : "Pet Cummeins"
    },
    {
        team : "RR",
        name : "Rajesthan Royals",
        primary : "pink",
        secondary : "blue",
        trophies : 1,
        caiptian : "Reyan parag"
    }
]

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let main = document.querySelector('main');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');


btn.addEventListener('click',function(){
    let winner = arr [Math.floor(Math.random()*arr.length)];

    h1.innerHTML = winner.team
    h4.innerHTML = winner.name
    h3.innerHTML = winner.trophies
    h2.innerHTML = winner.caiptian
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary
})