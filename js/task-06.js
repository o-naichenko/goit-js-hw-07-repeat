// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,
// якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const inputRef = document.getElementById('validation-input')
const expectedInputLength = inputRef.getAttribute('data-length')
let inputValue = ''

const checkInputLength = (inputValue, expectedLength) => {
  inputValue.length === parseInt(expectedInputLength)
    ? (inputRef.className = 'valid')
    : (inputRef.className = 'invalid')
}

inputRef.addEventListener('input', (e) => {
  inputValue = e.target.value
})

inputRef.addEventListener('blur', (e) =>
  checkInputLength(inputValue, expectedInputLength)
)
