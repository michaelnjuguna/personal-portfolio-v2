
var changeHeader = document.querySelector(".changeHeader")



//navbar
//hamburger rules
var hambuger = document.querySelector(".hambuger")
var bar1 = document.querySelector(".bar-1")
var bar2 = document.querySelector(".bar-2")
var bar3 = document.querySelector(".bar-3")
var navbar = document.querySelector(".navbar")

var btn1 = document.querySelector(".cta-btn")
var btn2 = document.querySelector(".downld-btn")


hambuger.addEventListener("click", function () {
    bar1.classList.toggle("rotate1");
    bar2.classList.toggle("rotate2");
    bar3.classList.toggle("rotate3");
})

hambuger.addEventListener("click", function () {
    navbar.classList.toggle("display");
    var audio = new Audio('sound/button-1.mp3');
    audio.play();
})

//sounds

btn1.addEventListener("click", function () {
    var audio = new Audio("sound/button-2.mp3");
    audio.play();
})

btn2.addEventListener("click", function () {
    var audio = new Audio("sound/button-2.mp3");
    audio.play();
})

btn3.addEventListener("click", function () {
    var audio = new Audio("sound/button-2.mp3");
    audio.play();
})




//faq section

var btn4 = document.querySelectorAll(".query-btn")[0]
var btn5 = document.querySelectorAll(".query-btn")[1]
var btn6 = document.querySelectorAll(".query-btn")[2]
var btn7 = document.querySelectorAll(".query-btn")[3]
var btn8 = document.querySelectorAll(".query-btn")[4]


var para1 = document.querySelectorAll(".query-info")[0]
var para2 = document.querySelectorAll(".query-info")[1]
var para3 = document.querySelectorAll(".query-info")[2]
var para4 = document.querySelectorAll(".query-info")[3]
var para5 = document.querySelectorAll(".query-info")[4]

btn4.addEventListener("click", function(){
    para1.classList.toggle("display");
})

btn5.addEventListener("click", function(){
    para2.classList.toggle("display");
})
btn6.addEventListener("click", function(){
    para3.classList.toggle("display");
})
btn7.addEventListener("click", function(){
    para4.classList.toggle("display");
})
btn8.addEventListener("click", function(){
    para5.classList.toggle("display");
})