let  left = document.querySelector('.left');
let  right = document.querySelector('.right');
let  leftRight = document.querySelector('.leftRight');
let text = document.querySelector('p');
let reject = document.querySelector('.reject');
    reject.style.display= "none";

let  pizza = document.querySelector('.pizza');
    pizza.style.display ="none";
let burp = document.querySelector('.burp'); 
    burp.style.display ="none";
let sunshine = document.querySelector('.sunshine');
    sunshine.style.display ="none";
let fam = document.querySelector('.fam');
    fam.style.display = "none";
let blow = document.querySelector(".blow");
    blow.style.display = "none";
let cave = document.querySelector(".cave");
    cave.style.display = "none";



left.addEventListener('click', function() {
    console.log("left was clicked")
    pizza.style.display="block";
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    blow.style.display = "none";
    cave.style.display = "none";
   reject.style.display= "block";
    text.innerHTML = "The orb is in front of you. Double click the orb to absorb its magic or reject it by hovering over the reject emoji. "; 
});

// pizza left choice 1 pizza left choice 1 pizza left choice 1 pizza left choice one 




pizza.addEventListener('dblclick', function() {
    console.log("pizza db clicked")
    pizza.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    reject.style.display= "none";
    blow.style.display = "none";
    cave.style.display = "none";
    burp.style.display="block";
    text.innerHTML= "The magic of the orb becomes yours";

});

// cheese left choice 2

right.addEventListener('click', function() {
    console.log("right was clicked");
    pizza.style.display="none";
    leftRight.style.display ="none";
    left.style.display ="none";
    right.style.display ="none";
    burp.style.display="none";
    sunshine.style.display="block";
    fam.style.display="none";
    reject.style.display= "none";
    blow.style.display = "none";
    cave.style.display = "none";
    text.innerHTML = "Double click to leave the cave or scroll to turn around."; 

});

sunshine.addEventListener('dblclick', function() {
    console.log("pizza db clicked")
    pizza.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    burp.style.display="none";
    sunshine.style.display="none";
    reject.style.display= "none";
    cave.style.display = "none";
    blow.style.display = "none";
    fam.style.display= "block";
    text.innerHTML= "You make it home to your family";

});

reject.addEventListener('mouseenter', function(){
    console.log ("hoovered");
    pizza.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    burp.style.display="none";
    sunshine.style.display="none";
    fam.style.display= "none";
    reject.style.display= "none";
    cave.style.display = "none";
    blow.style.display = "block";
    text.innerHTML= "The orb blows you up with magic."
});

sunshine.addEventListener('wheel', function(){
    console.log ("wheel was clicked");
    pizza.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    burp.style.display="none";
    sunshine.style.display="none";
    fam.style.display= "none";
    reject.style.display= "none";
    blow.style.display = "none";
    cave.style.display = "block";
    fam.style.display= "block";
    text.innerHTML = "The cave closes the exit and the way back. You are stuck in the cave and will die of dehydration and starvation.";
});


