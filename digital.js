const minutesHand = document.querySelector('.minutes')
const hoursHand = document.querySelector('.hours')

const setHours = (hours) => {
  let hoursNumber = Number(hours)
  let h = hours+":"
  if(hoursNumber<10) {
    h = `0${hoursNumber}:`
  }
  hoursHand.innerText = h
}

const setMinutes = (minutes) => {
  let minutesNumber = Number(minutes)
  let m = minutes
  if(minutesNumber<10) {
    m = `0${m}`
  }
   minutesHand.innerText = m
}

const setTime = (hours, minutes) => {
  setHours(hours)
  setMinutes(minutes)
}

setTime(00,00)






























// ex
/*
const time = document.querySelector('#time')
let h = 0;
let m = 0;
let timeout

const startTimer = (hours, minutes) => {
  clearTimeout(timeout)
  h = hours
  m = minutes
  timeout = setTimeout(( )=>{
    //
    m++
    if(m>59){ // aqui cambiamos la hora
      m=0
      h++
    }
    //
    if(h>24) { // aqui reseteamos la hora
      h=0
    }
    setTime(h,m) // update
    startTimer(h,m) // recursion
  }, 1000)
}

time.onchange = event => {
  const [hours,minutes] = event.target.value.split(':').map(el=>Number(el))
  setTime(hours,minutes)
  startTimer(hours,minutes)
}
*/