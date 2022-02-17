//1.- Se crea nodo [manecillas del reloj]
const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');
//Conversiones de tiempo
const RADS_BY_HOUR = 360/12
const RADS_BY_MIN = 360/60
const RADS_BY_SEC = 360/60

//2.- Se confgirua nodo
const setHours = (hours) => {
  hoursHand.style.transform = `rotate(${RADS_BY_HOUR*hours}deg)`;
}

const setMinutes = (minutes) => {
  minutesHand.style.transform = `rotate(${RADS_BY_MIN*minutes}deg)`;
}

const setSeconds = (seconds) => {
  secondsHand.style.transform = `rotate(${RADS_BY_SEC*seconds}deg)`;
}

//3.- Se asigna contenido al nodo
const setTime = (hours, minutes,seconds) => {
  setHours(hours);
  setMinutes(minutes);
  setSeconds(seconds);
}

//setTime(19,22)
// ex <=
/**
 * 1. colocar un listener que detecte la hora ingresada
 * 2. obtener el valor de lo ingresado (del evento)
 * 3. llamar a nuestra a la herramienta (setTime)
 */

//1.- Se crea nodo [Evento de fijar hora]
const timeInput = document.querySelector('#time');

// Variables globales
let hours;
let minutes;
let seconds;
let interval;

//3.- Se asigna contenido al nodo
timeInput.onchange = (event) => { // listener
//2.- Se confgirua nodo
  const value = event.target.value // "20:20"
  const arr = value.split(':').map(numText => Number(numText)); 
  // ['20','02'] => [20,02]
  //const hours = Number( value.slice(0,2) )
  //const minutes = Number( value.slice(3) )
  
  setTime(arr[0], arr[1]); // llamar a la herramienta
  hours = arr[0];
  minutes = [1];
  seconds = [1];
  //asyn
  clearInterval(interval);
  interval = setInterval(() => {
    seconds++;
    if(seconds > 59){
      seconds = 0;
      minutes++;
    }
    if(minutes > 59){
      minutes = 0;
      hours++;
    }
    if(hours > 23){
      hours = 0;
    }
    setTime(hours,minutes,seconds);
  } ,1000);
}


/*
setInterval(()=>{
  console.log("Buenas noches")
},1000);
*/
//setInterval(x => console.log("hello!"),1000)



// ex
/*
let interval

const time = document.querySelector('#time')
let h = 0;
let m = 0;

const startTimer = (hours, minutes) => {
  h = hours
  m = minutes
  clearInterval(interval)
  interval = setInterval(( )=>{
    //
    m++
    if(m>59){
      m=0
      h++
    }
    //
    if(h>24) {
      h=0
    }
    setTime(h,m)
  },60000)
}

time.onchange = event => {
  const [hours,minutes] = event.target.value.split(':').map(el=>Number(el))
  setTime(hours,minutes)
  startTimer(hours,minutes)
}
*/