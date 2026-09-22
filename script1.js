let btn  =document.querySelector('button');
let main =document.querySelector('main');
let arr = ["arerrrere","hhheeellllo","hhhhyyyyyyy","mmmmemeeeee","js love","hihhhhhhhhhhhiiii"]

btn.addEventListener('click',function(){
   let h1 =document.createElement('h1');
   let a = Math.floor(Math.random()*arr.length)

   let x = Math.random()*100
   let y = Math.random()*100
   let rot =Math.random()*360
   let scl = Math.random()*3
   let c1 = Math.random()*256
   let c2 = Math.random()*256
   let c3 = Math.random()*256


   h1.innerHTML = arr[a]

   h1.style.position = 'absolute'

   h1.style.color = "white"

   h1.style.left = x+'%'
   h1.style.top = y+'%'
   h1.style.rotate = rot+'deg'
   h1.style.scale = scl
   h1.style.color = `rgb(${c1},${c2},${c3})`

   main.appendChild(h1)
   
})