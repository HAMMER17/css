const hr = document.querySelector('#hr')
const sc = document.querySelector('#sc')
const mn = document.querySelector('#mn')

const hr1 = document.querySelector('.hour')
const sc1 = document.querySelector('.seconds')
const mn1 = document.querySelector('.minutes')
const ampm = document.querySelector('.pmam')
setInterval(() => {
  const day = new Date()
  let hh = day.getHours() * 30
  let mm = day.getMinutes() * 6
  let ss = day.getSeconds() * 6
  hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`
}, 1000)

setInterval(() => {
  const day = new Date()
  let hh = day.getHours()
  let mm = day.getMinutes()
  let ss = day.getSeconds()

  let am = (hh >= 12) ? 'AM' : 'PM'
  if (hh > 12) {
    hh = hh - 12
  }
  hh = (hh < 10) ? '0' + hh : hh
  mm = (mm < 10) ? '0' + mm : mm
  ss = (ss < 10) ? '0' + ss : ss
  hr1.innerHTML = hh + ':'
  mn1.innerHTML = mm + ':'
  sc1.innerHTML = ss + '.'
  am.innerHTML = am
}, 1000)