let btn =document.querySelector('button');
let grow = 0;
let inner = document.querySelector('.inner')
let h2 =document.querySelector('h2')


btn.addEventListener('click',function(){
    btn.style.pointerEvents ='none'

    let num = 50 + Math.floor(Math.random()*50)
    console.log(num)


    let int = setInterval(function(){
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    },num)

    setTimeout(function(){
    clearInterval(int);
    btn.innerHTML ='Downloded';
    btn.style.opacity = 0.5
    console.log(`Downloded in` ,num/10, `second` )
},num*100)


})



