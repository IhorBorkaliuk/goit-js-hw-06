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

let countOf = 0
let startSizes = 30

function getAmount(value) {
  countOf = value.currentTarget.value
}
  let amountDiv = []

function createBoxes() {
  for (let i = 0; i < countOf; i += 1) {
    startSizes += 10
    const newDiv = document.createElement('div')
  newDiv.classList.add('box-item')
  newDiv.style.height = `${startSizes}px`
  newDiv.style.width = `${startSizes}px`
  newDiv.style.background = getRandomHexColor()
    amountDiv.push(newDiv)
    boxesEl.append
  }
  boxesEl.append(...amountDiv)
}

createEl.addEventListener('click', createBoxes)

destroyEl.addEventListener('click', () => {
  boxesEl.innerHTML = ''
  amountDiv = []
  countOf = 0
  startSizes = 30
  inputEl.value = ''
})

inputEl.addEventListener('input', getAmount)