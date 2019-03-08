import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/source/Tile';

function initMap() {


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
}

export {initMap};