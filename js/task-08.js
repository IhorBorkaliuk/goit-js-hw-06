const formEl = document.querySelector('.login-form')

const mailEl = document.querySelector('[type="email"]')
console.log(mailEl)

const passwordEl = document.querySelector('[type="password"]')
console.log(passwordEl)

formEl.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault()

    const wayToElements = event.currentTarget.elements
    console.log(wayToElements)

    const mail = wayToElements.email.value;

    const password = wayToElements.password.value;

    if(mail === '' || password === '') {
        alert('Заповніть, будь ласка, всі поля!')
    }

    event.currentTarget.reset()

    const dataForm = {
        mail, password
    }
    console.log(dataForm)

}