mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
     // starting position [lng, lat].
    // Note that lat must be set between -90 and 90
    zoom: 10, // starting zoom
});

// Create a red marker at the listing coordinates
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // coordinates must be [lng, lat]
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popup with offset
      .setHTML(
        `<h4>${listing.title}</h4>
         <p>Exact Location details shared after booking</p>`
      )
  )
  .addTo(map);

