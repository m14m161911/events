let people = [
    {first: 'Carl', last: 'Corsini'},
    {first: 'Barry', last: 'Bonds'},
    {first: 'John', last: 'Jacobjengleheimerschmidt'},
];

// put database in the backend and call below
// let people = axios.get('https:my-backend.com/people')

window.onload = function () {
    let button2 = document.createElement('button');
    button2.innerHTML = 'Click Me';

    let root = document.querySelector('#root');

    root.appendChild(button2);

    let message;

    button2.addEventListener('click', function(){
        for (let i = 0; i < people.length; i++){
            message = document.createElement('p')
    
            message.innerHTML = people[i].first
    
            root.appendChild(message);
    
            console.log(people[i].first);
        }
    })

};