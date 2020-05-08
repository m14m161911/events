let fortunes = ['great life', 'bad life', 'long life', 'short life'];
let colors = ['red', 'blue', 'green', 'purple']

// javascript boilerplate
// document.addEventListener('DOMContentLoaded',function(){
    
// });
// same thing as line 4 below
// window.onload = function(){

// }

document.addEventListener('DOMContentLoaded',function(){
    // Create HTML element
    let message = document.createElement('p');
    message.innerHTML = 'Hello';
    message.classList.add('msg');

    console.log(message);

    // Create a button and fill innerHTML
    let button = document.createElement('button');
    button.innerHTML = 'Click Me';

    // Fill in the innerHTML
    let root = document.querySelector('#root');
    console.log(root);


    root.appendChild(message);
    root.appendChild(button);

button.addEventListener('click', function(){
    // grab  random message from array
    let randomNumber = Math.floor(Math.random() * fortunes.length)
    let randomFortune = fortunes[randomNumber]
    let randomColor = colors[randomNumber]
    //grab random message from array
    console.log(randomFortune)
    // fill in message with fortune innerHTML
    message.innerHTML = randomFortune
    message.style.color = randomColor
    })
})