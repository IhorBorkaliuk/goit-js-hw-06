const formEl = document.querySelector('.login-form')

const mailEl = document.querySelector('[type="email"]')
console.log(mailEl)

const passwordEl = document.querySelector('[type="password"]')
console.log(passwordEl)

formEl.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault()

    const wayToElements = event.currentTarget.elements

    const mail = wayToElements.email.value;

    const password = wayToElements.password.value;

    if(mail === '' || password === '') {
        alert('Заповніть, будь ласка, всі поля!')
    }

    event.currentTarget.reset()

    const dataForm = {
      Email:  mail, 
      Password:  password
    }
    console.log(dataForm)

}