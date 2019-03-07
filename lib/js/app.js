import "./../scss/main.scss";
import {Background} from "./partials/background";
import {Db} from "./partials/database";
import {Scroll} from "./events/scroll";


let config = {
	apiKey: "AIzaSyC39JnnA7Pd3-DfwH2n4zFe2H7NMV1UyhM",
	authDomain: "bsd-mk.firebaseapp.com",
	databaseURL: "https://bsd-mk.firebaseio.com",
	projectId: "bsd-mk",
	storageBucket: "bsd-mk.appspot.com",
	messagingSenderId: "699729683196"
};
firebase.initializeApp(config);



let path = "BSD/PL";
let database = new Db(path);

database.getText().then(e => {
	for (let i in e) {
		document.querySelector(`#${i}`).innerHTML = e[i];
	}
});




let background = new Background();


let bar = document.querySelector('.top_bar');
new Scroll(bar);
