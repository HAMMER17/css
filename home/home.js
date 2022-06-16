const elem1 = document.querySelector('.elem1')
const elem2 = document.querySelector('.elem2')
const elem3 = document.querySelector('.elem3')
const grab = document.querySelectorAll('.grab')

grab.forEach(function (el, id) {
  el.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text', id)

    elem2.addEventListener('dragover', function (e) {
      e.preventDefault()
    })
    elem2.addEventListener('drop', function (e) {
      this.appendChild(grab[e.dataTransfer.getData('text')])
    })
    elem3.addEventListener('dragover', function (e) {
      e.preventDefault()
    })
    elem3.addEventListener('drop', function (e) {
      this.appendChild(grab[e.dataTransfer.getData('text')])
    })
    elem1.addEventListener('dragover', function (e) {
      e.preventDefault()
    })
    elem1.addEventListener('drop', function (e) {
      this.appendChild(grab[e.dataTransfer.getData('text')])
    })
  })
})