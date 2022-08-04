const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener("blur", event => {
if (event.currentTarget.value === inputEl.getAttribute('data-length')) {
    inputEl.classList.add('valid')
}
else {
    inputEl.classList.add('invalid')
}

console.log(typeof(event.currentTarget.value))
console.log(typeof(inputEl.getAttribute('data-length')))
}

)


