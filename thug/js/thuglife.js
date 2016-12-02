lunettes = document.getElementById('lunettes')
message = document.getElementById('message')
audio = new Audio('thug-life.mp3')
audio.loop = true

function thug() {
  if (audio.paused) {
    message.textContent = 'La promo 7 sont des thuglife !'
    lunettes.style.animationPlayState = 'running'
    audio.play()
  }
  else {
    lunettes.style.animationPlayState = 'paused'
    audio.pause()
  }
}
