const sidebarButtons = document.querySelectorAll('.nav-button')
const pages = document.querySelectorAll('.page')
const films = document.querySelector('.page-films')
const people = document.querySelector('.page-people')
const planets = document.querySelector('.page-planets')
const vehicles = document.querySelector('.page-vehicles')





sidebarButtons.forEach(sidebarButton => {
	function ShowPages(event) {
		
		const clickedButton = event.currentTarget
		const pageToDisplay = clickedButton.dataset.buttons

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
	
	const ul = document.createElement('ul')
	ul.classList.add('ul-content')
	films.appendChild(ul)

	ul.innerHTML = ""
	info.forEach(element => {
		const li = document.createElement('li')

		const title = document.createElement('span')
		const director = document.createElement('span')
		const releaseDate = document.createElement('span')
		const producer = document.createElement('span')
		const picture = document.createElement('span')
		const image = document.createElement('img')

		li.classList.add('userItem')
		title.classList.add('films-title')
		director.classList.add('films-director')
		releaseDate.classList.add('films-releaseDate')
		producer.classList.add('films-producer')
		picture.classList.add('films-picture')

		ul.appendChild(li)
		li.append(title, director, releaseDate, producer, picture)
		picture.append(image)

		title.textContent = element.title
		director.textContent = element.director
		releaseDate.textContent = element.release_date
		producer.textContent = element.producer
		// image.src = element.avatar
		
	})
}

const renderPeople = (info) => {
	people.innerHTML = ""
	const ul = document.createElement('ul')
	people.appendChild(ul)
	for (let i = 0; i < 6; i++) {
		const li = document.createElement('li')

		const name = document.createElement('span')
		const height = document.createElement('span')
		const hairColor = document.createElement('span')
		const eyeColor = document.createElement('span')
		const gender = document.createElement('span')
		const picture = document.createElement('span')
		const image = document.createElement('img')

		// li.classList.add('userItem')
		// title.classList.add('films-title')
		// director.classList.add('films-director')
		// releaseDate.classList.add('films-releaseDate')
		// producer.classList.add('films-producer')
		// picture.classList.add('films-picture')

		ul.appendChild(li)
		li.append(name, height, hairColor, eyeColor, gender)
		picture.append(image)

		name.textContent = info[i].name
		height.textContent = info[i].height
		hairColor.textContent = info[i].hair_color
		eyeColor.textContent = info[i].eye_color
		gender.textContent = info[i].gender
		// image.src = element.avatar
		
	}
}

const renderPlanets = (info) => {
	planets.innerHTML = ""
	const ul = document.createElement('ul')
	planets.appendChild(ul)
	for (let i = 0; i < 6; i++) {
		const li = document.createElement('li')

		const name = document.createElement('span')
		const population = document.createElement('span')
		const climate = document.createElement('span')
		const terrain = document.createElement('span')
		const diameter = document.createElement('span')

		const picture = document.createElement('span')
		const image = document.createElement('img')

		// li.classList.add('userItem')
		// title.classList.add('films-title')
		// director.classList.add('films-director')
		// releaseDate.classList.add('films-releaseDate')
		// producer.classList.add('films-producer')
		// picture.classList.add('films-picture')

		ul.appendChild(li)
		li.append(name, population, climate, terrain, diameter)
		picture.append(image)

		name.textContent = info[i].name
		population.textContent = info[i].population
		climate.textContent = info[i].climate
		terrain.textContent = info[i].terrain
		diameter.textContent = info[i].diameter
		// image.src = element.avatar
		
	}
}

const renderVehicles = (info) => {
	vehicles.innerHTML = ""
	const ul = document.createElement('ul')
	vehicles.appendChild(ul)
	for (let i = 0; i < 6; i++) {
		const li = document.createElement('li')

		const name = document.createElement('span')
		const model = document.createElement('span')
		const manufacturer = document.createElement('span')
		const crew = document.createElement('span')
		const maxSpeed = document.createElement('span')

		const picture = document.createElement('span')
		const image = document.createElement('img')

		// li.classList.add('userItem')
		// title.classList.add('films-title')
		// director.classList.add('films-director')
		// releaseDate.classList.add('films-releaseDate')
		// producer.classList.add('films-producer')
		// picture.classList.add('films-picture')

		ul.appendChild(li)
		li.append(name, model, manufacturer, crew, maxSpeed)
		picture.append(image)

		name.textContent = info[i].name
		model.textContent = info[i].model
		manufacturer.textContent = info[i].manufacturer
		crew.textContent = info[i].crew
		maxSpeed.textContent = info[i].max_atmosphering_speed
		// image.src = element.avatar
	}	
}	