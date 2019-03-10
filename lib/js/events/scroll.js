class Scroll {
	constructor(element) {
		this.element = element;
		this.listen();
	}

	listen() {
		let moveup = document.querySelector('.moveup');
		window.addEventListener('scroll', e => {
			// console.log(window);
			if (window.pageYOffset >= 100) {
				this.element.classList.add('fixed');
				moveup.classList.add('shown');
			} else {
				this.element.classList.remove('fixed');
				moveup.classList.remove('shown');

			}
			if (window.pageYOffset >= window.innerHeight - 48) {
				this.element.classList.add('solid');
			} else {
				this.element.classList.remove('solid');
			}
			this.menuactive();
		})
	}

	menuactive() {
		let a = document.querySelector('#module1');
		let b = document.querySelector('#module3');
		let c = document.querySelector('#module4');
		let aa = document.querySelector('#start');
		let bb = document.querySelector('#about');
		let cc = document.querySelector('#contact');

		if (window.pageYOffset >= a.offsetTop - 96 &&
			window.pageYOffset < b.offsetTop - 96) {
			aa.classList.add('active');
			bb.classList.remove('active');
		} else if (window.pageYOffset >= b.offsetTop - 96 &&
			window.pageYOffset < c.offsetTop - 96) {
			aa.classList.remove('active');
			bb.classList.add('active');
			cc.classList.remove('active');
		} else if (window.pageYOffset >= c.offsetTop - 96) {
			bb.classList.remove('active');
			cc.classList.add('active');
		} else {
			aa.classList.remove('active');
		}
	}

}

export {Scroll};