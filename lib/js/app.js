import "./../scss/main.scss";
import {Background} from "./partials/background";
import {Db} from "./partials/database";
import {Scroll} from "./events/scroll";
import {Position} from "./events/position";
// import {initMap} from "./partials/map";

//Database - set content
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


//maps
// window.initMap = initMap;
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/source/Tile';




	new Map({
		layers: [
			new TileLayer({source: new OSM()})
		],
		view: new View({
			center: [54.304661, 18.582564],
			zoom: 2
		}),
		target: 'map'
	});

//header background
new Background();

//navbar behavior

let bar = document.querySelector('.top_bar');
let module1 = document.querySelector('#module1');
let start = document.querySelector('#start');
new Scroll(bar);
new Position(module1, start);