const amountCategories = document.querySelectorAll('.item')
console.log('Number of categories', amountCategories.length)


amountCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}, Elements: ${item.lastElementChild.children.length}`)
})


