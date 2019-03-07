

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

export {Db};