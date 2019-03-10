
import OSM from 'ol/source/OSM.js';
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Point from 'ol/geom/Point.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {fromLonLat} from 'ol/proj.js';
import VectorSource from 'ol/source/Vector.js';
import {Icon, Style} from 'ol/style.js';
const bsdposition = [18.582564,54.304661];
const bsdWebMercator = fromLonLat(bsdposition);


let bsd = new Feature({
	geometry: new Point(bsdWebMercator)
});


bsd.setStyle(new Style({
	image: new Icon(/** @type {module:ol/style/Icon~Options} */ ({
		src: './pic/bsd.jpg'
	}))
}));

let vectorSource = new VectorSource({
	features: [bsd]
});

let vectorLayer = new VectorLayer({
	source: vectorSource,

});

export const map = new Map({
	layers: [
		new TileLayer({
			source: new OSM(),

		}),
		vectorLayer
	],
	target: 'map',
	view: new View({
		center: bsdWebMercator,
		zoom: 16
	})
});