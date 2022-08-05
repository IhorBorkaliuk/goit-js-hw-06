function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('[type = "number"]')
console.log(inputEl)

const createEl = document.querySelector('[data-create]')
console.log(createEl)

const destroyEl = document.querySelector('[data-destroy]')
console.log(destroyEl)

const boxesEl = document.querySelector('#boxes')
console.log(boxesEl)

function createBoxes(amount) {
  let amountDiv = []
  for(let i = 0; i < amount; i += 1) {
  const newDiv = document.createElement('div')
  newDiv.style.height = `${30 + 10 * i}px`
  newDiv.style.width = `${30 + 10 * i}px`
  newDiv.style.background = getRandomHexColor()
  amountDiv.push(newDiv)
  }
  return amountDiv
}

createEl.addEventListener('click', () => {
  let addedDiv = createBoxes(inputEl.value)
  boxesEl.append(...addedDiv)  
})

destroyEl.addEventListener('click', () => {
  boxesEl.innerHTML = ''
})
