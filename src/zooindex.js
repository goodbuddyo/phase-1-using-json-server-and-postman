//console.log('hi from zooindex.js')
//console.log(animalData)

// renderOneAnimal DOM Manipulators
function renderOneAnimal(animal) {
  let card=document.createElement('li')
  card.className='card'
  // will use innerHTML is coming from us so it should be save
  card.innerHTML=`
  <img src="${animal.imageUrl}">
  <div class="content">
  <h4>${animal.name}</h4>
  <p>
    $<span class="donation-count">${animal.donations}</span> Donated
  </p>
  <p>
    ${animal.description}
  </p>
  </div>
  <div>
  <div class="buttons">
  <button>Donate $10</button>
  <button>Remove from list</button>
  </div>
  `
  //console.log(card)
  // add card to dom
  document.querySelector('#animal-list').appendChild(card)
}

// Initial Render
function initialize() {
  animalData.forEach(animal => renderOneAnimal(animal))
}

initialize()

