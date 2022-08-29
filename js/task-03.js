// Завдання 3
// Напиши скрипт для створення галереї зображень по масиву даних.

// В HTML є список ul#gallery.

// <ul id="gallery"></ul>
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const galleryRef = document.querySelector('#gallery')

const createItemMarkup = ({ url, alt }) => {
  return `<li><img src=${url} alt="${alt}"></img></li>`
}
const allItemsMarkup = images.map(createItemMarkup).join('')
console.log(allItemsMarkup)

galleryRef.insertAdjacentHTML('beforeEnd', allItemsMarkup)

const galleryItemsRefs = [...galleryRef.children]
const galleryImgRefs = [...galleryRef.querySelectorAll('img')]
console.log(galleryImgRefs)

galleryRef.style.listStyleType = 'none'
galleryRef.style.display = 'flex'
galleryItemsRefs.forEach((item) => (item.style.width = 'calc(100% / 3)'))
galleryImgRefs.forEach((img) => (img.style.maxWidth = '100%'))

console.dir(galleryRef.style)
