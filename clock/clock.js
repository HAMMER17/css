const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')
const hr1 = document.querySelector('#hr1')
const mn1 = document.querySelector('#mn1')
const sc1 = document.querySelector('#sc1')

const deg = 6;

function time() {
  let data = new Date()
  let hh = data.getHours() * 30
  let mm = data.getMinutes() * deg
  let ss = data.getSeconds() * deg

  hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`
  // console.log(`${hh} + ${mm} + ${ss}`)
}
setInterval(time, 1000)

function time1() {
  let data = new Date()
  let hh = data.getHours() * 30
  let mm = data.getMinutes() * deg
  let ss = data.getSeconds() * deg

  hr1.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
  mn1.style.transform = `rotateZ(${mm}deg)`
  sc1.style.transform = `rotateZ(${ss}deg)`
  // console.log(`${hh} + ${mm} + ${ss}`)
}
setInterval(time1, 1000)


