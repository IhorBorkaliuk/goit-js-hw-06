const increase = document.querySelector('[data-action="increment"]')
console.log(increase)

const decrease = document.querySelector('[data-action="decrement"]')
console.log(decrease)

const counter = document.querySelector('#value')
console.log(counter)

let counterValue = 0

increase.addEventListener('click', () => {
    counterValue += 1
    counter.textContent = counterValue
})

decrease.addEventListener('click', () => {
    counterValue -= 1
    counter.textContent = counterValue
})