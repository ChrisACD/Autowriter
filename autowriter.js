// version 1

/*const  boutton1 = document.querySelector('.autowriter');
const  output = document.querySelector('.ecran');
const message = ["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés. ", 
                 "La vie c'est des étapes... La plus douce c'est l'amour... La plus dure c'est la séparation... La plus pénible c'est les adieux... La plus belle c'est les retrouvailles.", 
                 "La plus douce c'est l'amour... La plus dure c'est la séparation... La plus pénible c'est les adieux... La plus belle c'est les retrouvailles.", 
                 "L'une des plus grandes douleurs est d'aimer une personne que tu ne peux pas avoir.", 
                 " Un jour amour a dit à amitié : Pourquoi existes-tu puisque je suis là amitié lui répond : Pour amener un sourire là ou tu as laissé des larmes.", 
                 "Les larmes qui coulent sont amères mais plus amères encore sont celles qui ne coulent pas.", 
                 "Le sentiment de ne pas être aimé est la plus grande des pauvretés."]
                 
let indice = Math.floor((Math.random() * 7 ));

let speed = 100;
let i = 0;
let count  = 0;


//boutton1.addEventListener("click", typeWriter);

boutton1.addEventListener("click", typeWriter);

function typeWriter() {
  let myMessage = message[indice];
  console.log(myMessage);
     if(i < myMessage.length) {

      output.innerHTML += myMessage.charAt(i);
      i++;
      setTimeout(typeWriter,speed)
      console.log(i);
      console.log(myMessage.length);
    } 
   
 
}


function reloadPage() {
  window.location.reload(); 
}

*/

// version 2
const  boutton1 = document.querySelector('.autowriter');
const  output = document.querySelector('.ecran');

const messages = ["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés. ", 
                 "La vie c'est des étapes... La plus douce c'est l'amour... La plus dure c'est la séparation... La plus pénible c'est les adieux... La plus belle c'est les retrouvailles.", 
                 "La plus douce c'est l'amour... La plus dure c'est la séparation... La plus pénible c'est les adieux... La plus belle c'est les retrouvailles.", 
                 "L'une des plus grandes douleurs est d'aimer une personne que tu ne peux pas avoir.", 
                 " Un jour amour a dit à amitié : Pourquoi existes-tu puisque je suis là amitié lui répond : Pour amener un sourire là ou tu as laissé des larmes.", 
                 "Les larmes qui coulent sont amères mais plus amères encore sont celles qui ne coulent pas.", 
                 "Le sentiment de ne pas être aimé est la plus grande des pauvretés."];

let i = Math.floor((Math.random() * 7 ));
let timer;
let count = 0;


// add eventListener

let indice = Math.floor((Math.random() * 7 ))



// typing effect

function typingEffect() {

let message = messages[i].split("");

var loopTyping = function () {

  if (message.length > 0) {
   
    output.innerHTML += message.shift();

  } else {

    delectingEffect();
    return false;

  }

  timer = setTimeout(loopTyping,100); 
}

loopTyping();


}


//  deleting effect

function delectingEffect() {

let message = messages[i].split("");
var loopDeleting = function() {
  if (message.length > 0) {
    message.pop();
    output.innerHTML = message.join("");
    
  } else {

  if (message.length > (1-i)) {
    i = Math.floor((Math.random() * 7 )); 
    
  } else {

    i = Math.floor((Math.random() * 7 )); 
  }

  typingEffect();
  return false;
  }
timer = setTimeout(loopDeleting, 50);

}

loopDeleting();

}



//  add event listenner on the button
boutton1.addEventListener("click", typingEffect)

//  add event listenner on the button to cancel the click if the click is up to 1
boutton1.addEventListener("mousedown", function (e) {

    console.log(e.key);
    console.log(e.eventPhase);
    e.preventDefault();
    count++;

    if (count  > 1) {
      
     boutton1.removeEventListener("click", typingEffect)

    }
});



// reload page

function reloadPage() {
  window.location.reload(); 
}



// Color pane 

const  boutton2 = document.querySelector('.colorPane');

boutton2.addEventListener("click", colorChange);

function colorChange() {

  output.style.color = "#" + Math.random().toString(16).substr(-6);

}



//  Dark mode

const  boutton3 = document.querySelector('.darkmode');

boutton3.addEventListener("click", darkMode);

function darkMode() {

  document.body.classList.toggle("dark");
}







//   fake rain 


const  boutton4 = document.querySelector('.snowFlake');

//  add eventListener

boutton4.addEventListener('click', createSnowFall);


function createSnowFall() {

  setInterval(createSnow, 100);
}

function createSnow() {
  //  creating the snow
const snow = document.createElement('i');

//  Adding the required classes for the FontAwesome icon

snow.classList.add('far');
snow.classList.add('fa-snowflake');

// randomly generate the width to be between 15 and 25px

snow.style.width = Math.random()*15 + 10 + 'px';

// randomly generate the left position between 0 and the innerWidth of the screen

snow.style.left = Math.random()* window.innerWidth + 'px';

// randomly generate the animatyion  - between 2s and 5s

snow.style.animationDuration = Math.random()* 3 + 2 + 's';

// Randomly add an opacity between 0 and 1

snow.style.opacity = Math.random();

//  Add the newly created snow to the body

document.body.appendChild(snow);

// Add the newly created snow from the DOM after 5 seconds
//  As we don't want it to overload the page

setTimeout(() => {

  snow.remove();

}, 5000)


}




//  Toast Notification


const button5 = document.querySelector('.toast');
const divToast = document.querySelector('.toasting');
button5.addEventListener('click', toasted);

function toasted() {

  let divE = document.createElement('div')



  if(document.body.classList.contains("dark")) {
   
    divE.style.border="solid 1px white";

  } else  {

    divE.style.border="solid 1px black";

  }
 
  divE.innerHTML="Toasted";
  divE.style.margin= ".5rem"
  divE.style.position="relative";
  divE.style.float = "left";
  divE.style.width="180px";
  divE.style.height= "50px";
  divToast.appendChild(divE);

}


