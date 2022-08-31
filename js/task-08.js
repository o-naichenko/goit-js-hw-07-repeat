// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.При натисканні на кнопку
// Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount -
//   число.Функція створює стільки div, скільки вказано в amount і
//    додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div - 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище
// попереднього на   10px
// Створи функцію destroyBoxes(), яка очищає div#boxes.

const inputRef = document.querySelector('input')
const renderBtnRef = document.querySelector('button[data-action="render"]')
const destroyBtnRef = document.querySelector('button[data-action="destroy"]')
const mainBoxRef = document.getElementById('boxes')

let boxesAmount = 0
let boxWidth = 30
let boxHeight = 30

const colorRandomizer = () => {
  const r = () => (Math.random() * 256) >> 0
  return `rgb(${r()}, ${r()}, ${r()})`
}

const changeBoxSize = () => {
  boxWidth += 10
  boxHeight += 10
}

const createBoxes = (amount) => {
  const boxes = []

  if (amount !== 0) {
    for (let i = 0; i < amount; i += 1) {
      const newDiv = document.createElement('div')
      newDiv.style.width = boxWidth + 'px'
      newDiv.style.height = boxHeight + 'px'
      changeBoxSize()
      newDiv.style.backgroundColor = colorRandomizer()
      boxes.push(newDiv)
    }
  }
  mainBoxRef.append(...boxes)
}

const destroyBoxes = () => {
  mainBoxRef.innerHTML = ''
}

inputRef.addEventListener('input', (e) => {
  boxesAmount = parseInt(e.target.value)
})

renderBtnRef.addEventListener('click', (e) => {
  createBoxes(boxesAmount)
})

destroyBtnRef.addEventListener('click', () => {
  destroyBoxes()
  boxWidth = 30
  boxHeight = 30
})
