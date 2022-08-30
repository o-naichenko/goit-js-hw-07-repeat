// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

let counterValue = 0

const increment = () => (counterValue += 1)
const decrement = () => (counterValue -= 1)

const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]'
)
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]'
)
const counterValueRef = document.getElementById('value')

const onClick = (e) => {
  e.target === incrementBtnRef ? increment() : decrement()
  counterValueRef.innerHTML = counterValue
}

incrementBtnRef.addEventListener('click', onClick)
decrementBtnRef.addEventListener('click', onClick)
