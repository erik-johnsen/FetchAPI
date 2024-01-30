const sidebarButtons = document.querySelectorAll('.nav-button')
const pages = document.querySelectorAll('.page')

const fetchData = async () => {
	try {
		const response = await fetch('https://swapi.dev/api/films/1/')
		const data = await response.json()
		console.log(data);
	} catch (error) {
		console.log("Something went wrong!", error);
	}
	
}

fetchData()



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
	

	
	}

	sidebarButton.addEventListener("click", ShowPages)
})
s