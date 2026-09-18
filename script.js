let arr = [
    {
        team : "CSK",
        primary : "yellow",
        secondary : "blue"
    },
    {
        team : "MI",
        primary : "blue",
        secondary : "gold"

    },
    {
        team : "RCB",
        primary : "red",
        secondary : "black"
    },
    {
        team : "PBKS",
        primary : "crimson",
        secondary : "silver"
    },
    {
        team : "KKR",
        primary : "purple",
        secondary : "gold"
    },
    {
        team : "SRH",
        primary : "orange",
        secondary : "black"
    },
    {
        team : "RR",
        primary : "pink",
        secondary : "blue"
    }
]

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let main = document.querySelector('main');

btn.addEventListener('click',function(){
    let winner = arr [Math.floor(Math.random()*arr.length)];

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary
})