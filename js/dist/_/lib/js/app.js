import "./../scss/main.scss";

let config = {
	apiKey: "AIzaSyC39JnnA7Pd3-DfwH2n4zFe2H7NMV1UyhM",
	authDomain: "bsd-mk.firebaseapp.com",
	databaseURL: "https://bsd-mk.firebaseio.com",
	projectId: "bsd-mk",
	storageBucket: "bsd-mk.appspot.com",
	messagingSenderId: "699729683196"
};
firebase.initializeApp(config);

class Db {
	constructor(path) {
		this.path = path;
	}

	connect() {
		const db = firebase.firestore();
		const docRef = db.doc(this.path);
		return docRef;
	}

	getText() {
		return this.connect(this.path).get()
			.then(e => {
				let data = e.data();
				// console.log(updats);
				return data;
			})
	}
}

let path = "BSD/PL";
let database = new Db(path);

database.getText().then(e => {
	for (let i in e) {
		document.querySelector(`#${i}`).innerText = e[i];
	}
});


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

let background = new Background();
