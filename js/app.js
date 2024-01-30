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
	

	
	}

	sidebarButton.addEventListener("click", ShowPages)
})
s