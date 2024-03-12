const sidebarButtons = document.querySelectorAll('.nav-button')
const pages = document.querySelectorAll('.page')
const films = document.querySelector('.page-films')
const people = document.querySelector('.page-people')
const planets = document.querySelector('.page-planets')
const vehicles = document.querySelector('.page-vehicles')
const mainContent = document.querySelector('.main')






sidebarButtons.forEach(sidebarButton => {
	function ShowPages(event) {
		
		const clickedButton = event.currentTarget
		const pageToDisplay = clickedButton.dataset.buttons


		sidebarButtons.forEach(button => {

			button.classList.remove("nav-buttons--active")
	
			if (button.dataset.buttons === pageToDisplay){
				button.classList.add("nav-buttons--active")
			}
		})


		pages.forEach(page => {
			page.classList.remove("visible")
	
			if (page.dataset.pages === pageToDisplay) {
				page.classList.add("visible")
			}

			
		})

		
		
		

		fetchData(pageToDisplay)
	}

	sidebarButton.addEventListener("click", ShowPages)
})


const fetchData = async (attribute) => {
	try {
		const response = await fetch(`https://swapi.dev/api/${attribute}`)
		const data = await response.json()

		if(attribute === "films") {
			renderFilms(data.results)
		} else if(attribute === "people") {
			renderPeople(data.results)
		} else if(attribute === "planets") {
			renderPlanets(data.results)
		} else {
			renderVehicles(data.results)
		}
	} catch (error) {
		console.log("Something went wrong!", error);
	}
	
}



const renderFilms = (info) => {
	// ul.innerHTML = ""
	info.forEach(element => {
		
		const divContainer = document.createElement('div')
		films.appendChild(divContainer)

		const title = document.createElement('div')
		const director = document.createElement('div')
		const releaseDate = document.createElement('div')
		const producer = document.createElement('div')

		const textContent = document.createElement('div')
		const picture = document.createElement('div')
		const image = document.createElement('img')

		divContainer.classList.add('card')
		picture.classList.add('picture-content')
		title.classList.add('text-content')
		director.classList.add('text-content')
		releaseDate.classList.add('text-content')
		producer.classList.add('text-content')
		textContent.classList.add('text-container')

		
		divContainer.append(picture, textContent)
		textContent.append(title, director, releaseDate, producer)
		picture.append(image)

		title.textContent = element.title
		director.textContent = element.director
		releaseDate.textContent = element.release_date
		producer.textContent = element.producer

		image.src = `./assets/film/${element.title}.jpg`
		
	})
}

const renderPeople = (info) => {
	
	info.forEach(element => {
		const divContainer = document.createElement('div')
		people.appendChild(divContainer)

		const name = document.createElement('span')
		const height = document.createElement('span')
		const hairColor = document.createElement('span')
		const eyeColor = document.createElement('span')
		const gender = document.createElement('span')

		const textContent = document.createElement('div')
		const picture = document.createElement('span')
		const image = document.createElement('img')

		divContainer.classList.add('card')
		picture.classList.add('picture-content')
		name.classList.add('text-content')
		height.classList.add('text-content')
		hairColor.classList.add('text-content')
		eyeColor.classList.add('text-content')
		gender.classList.add('text-content')
		textContent.classList.add('text-container')
		

		divContainer.append(picture, textContent)
		textContent.append(name, height, hairColor, eyeColor, gender)
		picture.append(image)

		name.textContent = element.name
		height.textContent = element.height
		hairColor.textContent = element.hair_color
		eyeColor.textContent = element.eye_color
		gender.textContent = element.gender
		
		
		if(["Leia Organa", "C-3PO", "R5-D4"].includes(element.name)) {
			image.src = `./assets/people/${element.name}.webp`
		} else {
			image.src = `./assets/people/${element.name}.jpeg`
		}
		
	})
}

const renderPlanets = (info) => {

	info.forEach(element => {
		const divContainer = document.createElement('div')
		planets.appendChild(divContainer)

		const name = document.createElement('span')
		const population = document.createElement('span')
		const climate = document.createElement('span')
		const terrain = document.createElement('span')
		const diameter = document.createElement('span')

		const textContent = document.createElement('div')
		const picture = document.createElement('span')
		const image = document.createElement('img')

		divContainer.classList.add('card')
		picture.classList.add('picture-content')
		name.classList.add('text-content')
		population.classList.add('text-content')
		climate.classList.add('text-content')
		terrain.classList.add('text-content')
		diameter.classList.add('text-content')
		textContent.classList.add('text-container')

		divContainer.append(picture, textContent)
		textContent.append(name, population, climate, terrain, diameter)
		picture.append(image)

		name.textContent = element.name
		population.textContent = element.population
		climate.textContent = element.climate
		terrain.textContent = element.terrain
		diameter.textContent = element.diameter

		if(["Coruscant", "Endor"].includes(element.name)) {
			image.src = `./assets/planet/${element.name}.jpeg`
		} else {
			image.src = `./assets/planet/${element.name}.webp`
		}

		console.log(element.name);
		
	})
}

const renderVehicles = (info) => {

	info.forEach(element => {
		const divContainer = document.createElement('div')
		vehicles.appendChild(divContainer)

		const name = document.createElement('span')
		const model = document.createElement('span')
		const manufacturer = document.createElement('span')
		const crew = document.createElement('span')
		const maxSpeed = document.createElement('span')

		const textContent = document.createElement('div')
		const picture = document.createElement('span')
		const image = document.createElement('img')

		divContainer.classList.add('card')
		picture.classList.add('picture-content')
		name.classList.add('text-content')
		model.classList.add('text-content')
		manufacturer.classList.add('text-content')
		crew.classList.add('text-content')
		maxSpeed.classList.add('text-content')
		textContent.classList.add('text-container')

		
		divContainer.append(picture, textContent)
		textContent.append(name, model, manufacturer, crew, maxSpeed)
		picture.append(image)

		name.textContent = element.name
		model.textContent = element.model
		manufacturer.textContent = element.manufacturer
		crew.textContent = element.crew
		maxSpeed.textContent = element.max_atmosphering_speed
		
		if(element.name === "TIE bomber") {
			image.src = `./assets/vehicles/${element.name}.avif`
		} else if(["AT-AT", "AT-ST", "T-16 skyhopper"].includes(element.name)){
			image.src = `./assets/vehicles/${element.name}.jpeg`
		} else if(element.name === "TIE/LN starfighter") {
			image.src = `./assets/vehicles/starfighter.jpeg`
		} else {
			image.src = `./assets/vehicles/${element.name}.webp`
		}
	})
}	