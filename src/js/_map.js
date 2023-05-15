let map, mapElement = document.getElementById("map");

function initMap() {
	const mapCenter = { lat: 43.2766133, lng: 76.8136264 },
		  objectCenter = { lat: 43.27723592842318, lng: 76.81586293380391 };

	const map = new google.maps.Map(mapElement, {
		zoom: 15,
		center: mapCenter,
		disableDefaultUI: true,
		styles: [
			{
				"featureType": "all",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "simplified"
					},
					{
						"color": "#291f13"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"color": "#ccb49a"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.icon",
				"stylers": [
					{
						"color": "#c74c31"
					},
					{
						"weight": "0.92"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "simplified"
					},
					{
						"color": "#6d5e4f"
					},
					{
						"weight": ".88"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#332d27"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "off"
					},
					{
						"color": "#ccb49a"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels.text",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "labels.icon",
				"stylers": [
					{
						"saturation": "-100"
					},
					{
						"gamma": "0.94"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					},
					{
						"color": "#dcc4ab"
					}
				]
			}
		]
	});

	const object = new google.maps.Circle({
		center: objectCenter,
		strokeColor: "#C74C31",
		strokeOpacity: 1,
		strokeWeight: 2,
		fillColor: "#C74C31",
		fillOpacity: 0.5,
		radius: 50,
		map,
		title: 'Arena Sunset'
	});

	const arenapark = new google.maps.Circle({
		center: { lat: 43.273753, lng: 76.814938 },
		strokeColor: "#C74C31",
		strokeOpacity: 1,
		strokeWeight: 2,
		fillColor: "#C74C31",
		fillOpacity: 0.5,
		radius: 25,
		map,
		title: 'Arena Park'
	});

	let tooltip = new google.maps.InfoWindow({
		content: "Arena Sunset",
		position: objectCenter
	});

	let tooltip2 = new google.maps.InfoWindow({
		content: "Arena Park",
		position: { lat: 43.273753, lng: 76.814938 }
	});

	tooltip.open(map);
	tooltip2.open(map);
}

if(mapElement) window.initMap = initMap;