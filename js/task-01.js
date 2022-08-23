// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Вийде'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories,
//   знайде і виведе в консоль текст заголовка елемента(тега h2) і кількість елементів в категорії
//   (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

console.log('task-1')
const categoriesListRef = document.querySelector('#categories')

const categoriesAmount = categoriesListRef.children.length
console.log(`В списку ${categoriesAmount} категорій`)
console.log(categoriesAmount)
const categoriesItemsRefs = document.querySelectorAll('.item')
console.log(categoriesItemsRefs)

categoriesItemsRefs.forEach((item) => {
  const categoryName = item.firstElementChild.textContent
  const categoryElementsAmount = item.querySelectorAll('li').length
  console.log(
    `Категорія  ${categoryName}\nКількість елементів: ${categoryElementsAmount}`
  )
})
