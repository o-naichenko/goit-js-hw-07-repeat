// В HTML є пустий список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS є масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
//   після чого вставить всі li за одну операцію в список ul.ingredients.Для
//   створення DOM - вузлів використовуй document.createElement().

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
]

const ingredientsListRef = document.querySelector('#ingredients')

const ingredientsRefs = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement('li')
  ingredientEl.textContent = ingredient
  return ingredientEl
})
ingredientsListRef.append(...ingredientsRefs)
