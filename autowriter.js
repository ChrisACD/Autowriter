const  boutton1 = document.querySelector('.autowriter');
const  output = document.querySelector('.ecran');
const message = ["Hello my name is Chris Djya I am Cybe Analyst ", 
                 "Salut je m'appelle Chris je suis un cyber analyste", 
                 "Hey menya zhavut Chris ya v cyber analyst", 
                 "Hola my name is Chris i am CDA", 
                 "Hello i love football and basket ball", 
                 "How is  everything  manage to be set", 
                 "I am javascript analyst"];

boutton1.addEventListener("click", showMessage)

setInterval(function() {
   console.log("hello"); 
},1500);



function showMessage () {

    let indice = Math.floor((Math.random() * 7 ));
    let myMessage = message[indice];

 
 
}



























