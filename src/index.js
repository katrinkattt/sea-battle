import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

const btn = document.getElementById('btnClick');
const start =  document.getElementById('start');
const window = document.getElementById('window');
const btnClose = document.getElementById('btnClose');

// const player = document.getElementById('player');
// const enemy = document.getElementById('enemy');
// const hod = document.getElementById('hod');

btn.addEventListener('click', () => {
  window.style.display='block';
});

btnClose.addEventListener('click', () => {
  window.style.display='none';
})
start.addEventListener('click', () => {
  window.style.display='none';
})

// hod.addEventListener('durationchange',()=>{
//   if(hod.value == "ваш ход"){
//     hod.value = "ход "+ player.value
//   }
//   else if(hod.value == "ход противника"){
//     hod.value = "ход "+ enemy.value
//     alert("ход "+ enemy.value)
//   }
//   else if(hod.value == "победa ваша"){
//     hod.value = "победa "+ player.value
//   }
//   else if(hod.value == "победa противвника"){
//     hod.value = "победa "+enemy.value
//   }
// })

serviceWorker.unregister();
