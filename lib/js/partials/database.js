

class Db {
	constructor(path) {
		this.path = path;
		this.language();
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

	language() {
		let flag = document.querySelector('.flag');
		if(this.path ==='BSD/PL') {
			flag.style.backgroundImage = 'url("pic/iconfinder_Flag_of_United_Kingdom_96354.png")'
		} else {
			flag.style.backgroundImage = 'url("pic/iconfinder_Flag_of_Poland_96372.png")'
		}
	}

}

export {Db};