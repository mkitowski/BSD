export class Menu {
	constructor() {
		this.menuBurger = document.querySelector('.burger');
		this.menu = document.querySelector('nav ul');
		this.menuItems = document.querySelectorAll('nav ul li');
		this.menuSelected();
		this.itemSelected();
	}

	menuSelected () {
		this.menuBurger.addEventListener('click', () => {
			this.menuBurger.classList.toggle('menuSelected');
			this.menu.classList.toggle('clicked');
		})
	}

	itemSelected() {
		this.menuItems.forEach(e => {
			e.addEventListener('click', () => {
				this.menuBurger.classList.remove('menuSelected');
				this.menu.classList.remove('clicked');
			})
		})
	}

}