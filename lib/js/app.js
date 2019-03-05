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
		let a = document.querySelector(`#${i}`).innerText = e[i];
	}
});