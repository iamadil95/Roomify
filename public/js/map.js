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





  //Create a icon marker at listing coordinates
// const el = document.createElement('div');
// el.className = 'fa-marker';
// el.innerHTML = '<i class="fa-solid fa-house"></i>'; 

// el.style.fontSize = '18px'; 
// el.style.color = '#fe424d'; 

// // Add the marker to the map
// const marker = new mapboxgl.Marker({
//   element: el, anchor: "bottom" // This pins the marker by its bottom-center point
// })
//   .setLngLat(listing.geometry.coordinates)
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 })
//       .setHTML(
//         `<h4>${listing.title}</h4>
//          <p>Exact location provided after booking</p>`
//       )
//   )
//   .addTo(map);








