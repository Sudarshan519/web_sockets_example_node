// const socket = new WebSocket('ws://localhost:8080')

// // listen for messages

// socket.onmessage = ({ data }) => {
//     console.log('Message from server');

// }

// document.querySelector('button').onclick = () => {
//     socket.send('hello')
// }

// var os = require('os');

// var networkInterfaces = os.networkInterfaces();

// console.log(networkInterfaces);

const socket = io('ws://127.0.0.1:8080');
socket.on('message', text => {
    const el = document.createElement('li')
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value
    console.log(text);

    socket.emit('message', text)
}