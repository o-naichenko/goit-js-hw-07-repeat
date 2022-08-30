// Напиши скрипт який, при наборі тексту в інпут
// input#name - input(подія input), підставляє його поточне
// значення в span#name - output.якщо інпут порожній, в спані
// повинен відображатися рядок 'незнайомець'.

const nameInputnputRef = document.getElementById('name-input')
const nameOutputRef = document.getElementById('name-output')
// console.dir(nameInputnputRef)
// console.dir(nameOutputRef)

const onInput = () => {}
nameInputnputRef.addEventListener('input', (e) => {
  const value = e.target.value
  value.length > 0
    ? (nameOutputRef.textContent = value)
    : (nameOutputRef.textContent = 'незнайомець')
})
