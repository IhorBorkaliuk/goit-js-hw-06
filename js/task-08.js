const formEl = document.querySelector('.login-form')

const mailEl = document.querySelector('[type="email"]')

const passwordEl = document.querySelector('[type="password"]')

formEl.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault()

    const wayToElements = event.currentTarget.elements

    const mail = wayToElements.email.value;

    const password = wayToElements.password.value;

    if(mail === '' || password === '') {
      return alert('Заповніть, будь ласка, всі поля!')
    }

    if(mail !== '' || password !== '') {
      const dataForm = {
        Email:  mail, 
        Password:  password
      }

    event.currentTarget.reset()
    
    console.log(dataForm)  }
}