const sidebarButtons = document.querySelectorAll('.nav-button')
const pages = document.querySelectorAll('.page')



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
		console.log(data);
	} catch (error) {
		console.log("Something went wrong!", error);
	}
	
}




const renderElements = (info) => {
	
	Object.keys(info).forEach(key => {
		
		const ulContainer = document.createElement("ul")
		const liContainer = document.createElement("li")

		show.appendChild(ulContainer)
		ulContainer.appendChild(liContainer)

		
	})
}