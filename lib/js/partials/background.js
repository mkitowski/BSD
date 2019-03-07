class Background {
	constructor () {
		this.pics = ["pic/bck1.jpeg","pic/bck2.jpeg","pic/bck3.jpeg"];
		this.change();
	}

	setbck(num) {
		document.querySelector('.bck').style.backgroundImage = `url(${this.pics[num]})`;

	}

	change() {
		let n = 0;
		this.setbck(n);

		setInterval(() =>{
			n++;
			n = n > 2 ? 0 : n;
			this.setbck(n);
		},30000);
	}
}

export {Background};