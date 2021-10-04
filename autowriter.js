const  boutton1 = document.querySelector('.autowriter');
const  output = document.querySelector('.ecran');
const message = ["Hello my name is Chris Djya I am Cybe Analyst ", 
                 "Salut je m'appelle Chris je suis un cyber analyste", 
                 "Hey menya zhavut Chris ya v cyber analyst", 
                 "Hola my name is Chris i am CDA", 
                 "Hello i love football and basket ball", 
                 "How is  everything  manage to be set", 
                 "I am javascript analyst"];
var i = 0;
var speed = 50;


boutton1.addEventListener("click", typeWriter);




function typeWriter() {

    let indice = Math.floor((Math.random() * 7 ));
    let myMessage = message[indice];

    if(i < myMessage[indice].length) {

      output.innerHTML += myMessage[indice].charAt(i);
      i++;
      setTimeout(typeWriter,speed)

    }
 
}



























