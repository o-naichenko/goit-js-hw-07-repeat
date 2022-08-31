// Напиши скрипт, який би при втраті фокуса на інпут,
// перевіряв його вміст на правильну кількість символів.

const inputRef = document.getElementById('validation-input')
const expectedInputLength = inputRef.getAttribute('data-length')
let inputValue = ''

const changeTextColor = (boolean, input) => {
  const green = '#00FF00'
  const red = '#FF0000'
  input.style.color = boolean ? green : red
}

const checkInputLength = (inputValue, expectedLength) => {
  changeTextColor(inputValue.length === parseInt(expectedLength), inputRef)
}

inputRef.addEventListener('input', (e) => {
  inputRef.style.color = '#000000'
  inputValue = e.target.value
})

inputRef.addEventListener('blur', (e) =>
  checkInputLength(inputValue, expectedInputLength)
)
