const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('ul')

const ingredientCreate = ingredient => {

const ingredientEl = document.createElement('li')
ingredientEl.textContent = ingredient
ingredientEl.classList.add('item')

return ingredientEl
}

const partOf = ingredients.map(ingredientCreate);

ingredientsList.append(...partOf)