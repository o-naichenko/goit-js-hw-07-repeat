// Напиши скрипт, який реагує на зміну значення input#font - size - control
// (подія input) і змінює інлайн - стиль span#text оновлюючи властивість font -
// size.В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const inputRef = document.getElementById('font-size-control')
const textRef = document.getElementById('text')

const changeTextSize = (event) => {
  textRef.style.fontSize = event.target.value + 'px'
}

inputRef.addEventListener('input', changeTextSize)
