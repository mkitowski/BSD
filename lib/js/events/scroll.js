class Scroll {
	constructor(element) {
		this.element = element;
		this.listen();
	}

	listen() {
		window.addEventListener('scroll', e => {
			// console.log(window.pageYOffset);
			if (window.pageYOffset >= 35) {
				this.element.classList.add('fixed');
			} else {
				this.element.classList.remove('fixed');
			}
			if (window.pageYOffset >= 625) {
				this.element.classList.add('solid');
			} else {
				this.element.classList.remove('solid');
			}
		})
	}

}

export {Scroll};