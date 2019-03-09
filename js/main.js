// Initilize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 39.7392, lng: -104.9903};
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 9,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky Navbar menu opacity
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }  
});

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 150
      },
      800
    );
  }
});