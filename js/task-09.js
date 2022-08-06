function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btnChangeColor = document.querySelector('.change-color')
console.log(btnChangeColor)

const findColor = document.querySelector('.color')
console.log(findColor)

const findBody = document.querySelector('body')
console.log(findBody)

btnChangeColor.addEventListener('click', onChangeColor)

function onChangeColor() {
  const bodyColor = getRandomHexColor()

  findBody.style.backgroundColor = bodyColor

  findColor.textContent = bodyColor
}