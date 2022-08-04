const userName = document.querySelector('#name-input')
console.log(userName)

const outputName = document.querySelector('#name-output')
console.log(outputName)

userName.addEventListener('input', (event) => {
userName.value === '' ? outputName.textContent = 'Anonymous' : outputName.textContent = event.currentTarget.value 
})
