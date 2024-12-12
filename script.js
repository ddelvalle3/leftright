let  left = document.querySelector('.left');
let  right = document.querySelector('.right');
let  leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');+
let  pizza = document.querySelector('.pizza');
    pizza.style.display ="none";
let burp = document.querySelector('.burp'); 
    burp.style.display ="none";

left.addEventListener('click', function() {

    console.log("left was clicked")
    pizza.style.display="block";
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
        text.innerHTML = "click to eat or search for cheese"; 

});

// pizza left choice 1 pizza left choice 1 pizza left choice 1 pizza left choice one 




pizza.addEventListener('dbclick', function() {
    console.log("pizza dbl clicked")
    pizza.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";

});

// cheese left choice 2