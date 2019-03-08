class Scroll {
	constructor(element) {
		this.element = element;
		this.listen();
	}

	listen() {
		window.addEventListener('scroll', e => {
			// console.log(window);
			if (window.pageYOffset >= 100) {
				this.element.classList.add('fixed');
			} else {
				this.element.classList.remove('fixed');
			}
			if (window.pageYOffset >= window.innerHeight-48) {
				this.element.classList.add('solid');
			} else {
				this.element.classList.remove('solid');
			}
			this.menuactive();
		})
	}

	menuactive() {
		let a =document.querySelector('#start');
		if (window.pageYOffset >= a.offsetHeight + window.innerHeight - 96) {
			a.classList.add('active');
		} else {
			a.classList.remove('active');
		}
	}

}

export {Scroll};