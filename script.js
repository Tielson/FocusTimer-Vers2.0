import Timer from "./timer.js"
import Sounds from "./sons.js"

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const moreButton = document.querySelector('.more')
const lessButton = document.querySelector('.less')
const forestButton = document.querySelector('.forest')
const rainButton = document.querySelector('.rain')
const coffeButton = document.querySelector('.coffe')
const fireplaceButton = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const foresttButton = document.querySelector('.forestt')
const rainnButton = document.querySelector('.rainn')
const coffeeButton = document.querySelector('.coffee')
const fireplaceeButton = document.querySelector('.fireplacee')


const sounds = Sounds()
let minutes = minutesDisplay.textContent
let seconds = secondsDisplay.textContent
let timeTimer
let timer = Timer(minutes,
  minutesDisplay,
  seconds,
  secondsDisplay,
  timeTimer)


playButton.addEventListener('click', function () {
  timer.contDown()
})

pauseButton.addEventListener('click', function () {
  timer.stopcont()
})

moreButton.addEventListener('click', function () {
  timer.moreMinutes()
})

lessButton.addEventListener('click', function () {
  timer.lessMinutes()
})

forestButton.addEventListener('click', function () {  
  sounds.ForestAudio()
  forestButton.classList.add('hide')
  foresttButton.classList.remove('hide')

})
foresttButton.addEventListener('click', function () {  
  forestButton.classList.remove('hide')
  foresttButton.classList.add('hide')
  sounds.ForesttAudio()
})

rainButton.addEventListener('click', function () {
  rainButton.classList.add('hide')
  rainnButton.classList.remove('hide')
  sounds.RainAudio()
  
})
rainnButton.addEventListener('click', function () {
  rainnButton.classList.add('hide')
  rainButton.classList.remove('hide')
  sounds.RainnAudio()
})

coffeButton.addEventListener('click', function () {
  coffeButton.classList.add('hide')
  coffeeButton.classList.remove('hide')
  sounds.CoffeAudio()
})
coffeeButton.addEventListener('click', function () {
  coffeeButton.classList.add('hide')
  coffeButton.classList.remove('hide')
  sounds.CoffeeAudio()
})


fireplaceButton.addEventListener('click', function () {
  fireplaceButton.classList.add('hide')
  fireplaceeButton.classList.remove('hide')
  sounds.FireplaceAudio()
})
fireplaceeButton.addEventListener('click', function () {
  fireplaceeButton.classList.add('hide')
  fireplaceButton.classList.remove('hide')
  sounds.FireplaceeAudio()
})













