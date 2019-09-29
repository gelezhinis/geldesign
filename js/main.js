// Initialize and add the map
function initMap() {
  //Your location
  const loc = { lat: 54.3931347, lng: 24.019884599999997 };
  //Centeres map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 15,
    center: loc
  });
  //The marker, positioned at location
  const marker = new google.maps.marker({ position: loc, map: map });
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (this.window.scrollY > 100) {
    this.document.querySelector('#navbar').style.opacity = 0.85;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top-65
      },
      1000
    );
  }
});