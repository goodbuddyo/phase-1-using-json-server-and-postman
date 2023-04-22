// zooindex04.js
// convert  db.json to db04.json
// need to restart  json-server --watch src/db04.json
// wrap js in const init 

const init=() => {

  // PATCH video https://my.learn.co/courses/650/pages/video-patch-requests?module_item_id=83243
  // video begins w/ //id's added (not in prev video)

  // Event Listeners
  document.querySelector('#animal-form').addEventListener('submit',handleSubmit)

  // Event handlers

  function handleSubmit(e) {
    e.preventDefault()
    let animalObj={
      name: e.target.name.value,
      imageUrl: e.target.image_url.value,
      description: e.target.description.value,
      donations: 0
    }
    renderOneAnimal(animalObj)
    adoptAnimal(animalObj)
  }

  // renderOneAnimal DOM Manipulators
  function renderOneAnimal(animal) {
    // Build Animal
    let card=document.createElement('li')
    card.className='card'
    // innerHTML is coming from us so it should be safe, note backticks
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
        <button class="donatebtn">Donate + $10</button>
        <button class="removebtn">Remove from list</button>
      </div>
      `
    card.querySelector('button.donatebtn').addEventListener('click',() => {
      animal.donations+=10
      card.querySelector('span').textContent=animal.donations
      updateDonation(animal)
    })

    card.querySelector('button.removebtn').addEventListener('click',() => {
      console.log(animal)
      card.innerHTML=''
      removeAnimal(animal)
    })
    //card.querySelector('button.resetbtn').addEventListener('click',() => {
    //  animal.donations=0
    //  card.querySelector('span').textContent=animal.donations
    //})

    // add card to dom
    document.querySelector('#animal-list').appendChild(card)
  }

  // Fetch requests
  // GET all animal resources and render
  function getAllAnimals() {
    fetch('http://localhost:3000/animalData')
      .then(res => res.json())
      .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)))
  }

  // POST an animal - (the Create part of Crud)
  function adoptAnimal(animalObj) {
    //console.log(JSON.stringify(animalObj))
    fetch('http://localhost:3000/animalData',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animalObj)
    })
      .then(res => res.json())
      .then(animal => console.log(animal))
  }

  // PATCH an animal - (the UPDATE part of Crud)
  function updateDonation(animalObj) {
    //console.log(JSON.stringify(animalObj))
    fetch(`http://localhost:3000/animalData/${animalObj.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animalObj)
    })
      .then(res => res.json())
      .then(animal => console.log(animal))
  }

  // DELETE an animal - (the DELETE part of Crud)
  function removeAnimal(animalObj) {
    fetch(`http://localhost:3000/animalData/${animalObj.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
      //body: JSON.stringify(animalObj)
    })
      .then(res => res.json())
      .then(animal => console.log(animal))
  }

  // Initial Render
  // GET Data and Render our Animals to the DOM
  function initialize() {
    getAllAnimals()
    // animalData.forEach(animal => renderOneAnimal(animal))
  }

  initialize()
}
document.addEventListener("DOMContentLoaded",init);
