document.getElementById('addBtn').addEventListener('click', addFlight);

function addFlight() {
  const name = document.getElementById('name').value;
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const price = document.getElementById('price').value;
  const rating = document.getElementById('rating').value;

  if (!name || !origin || !destination || !price || !rating) {
    document.getElementById('error').classList.remove('dn');
    return;
  }

  document.getElementById('error').classList.add('dn');

  const newFlight = {
    name,
    origin,
    destination,
    price: parseInt(price),
    rating: parseInt(rating)
  };

  window.flightList.push(newFlight);
  renderFlights(window.flightList);

  document.getElementById('name').value = '';
  document.getElementById('origin').value = '';
  document.getElementById('destination').value = '';
  document.getElementById('price').value = '';
  document.getElementById('rating').value = '';
}

function renderFlights(flights) {
  const flightItems = document.getElementById('flightItems');
  flightItems.innerHTML = '';
  flights.forEach(flight => {
    const flightCard = document.createElement('ul');
    flightCard.className = 'card';
    flightCard.innerHTML = `
      <li class="padT5">Flight Name: ${flight.name}</li>
      <li class="padT5">${flight.origin} to ${flight.destination}</li>
      <li class="padT5">Rating: ${flight.rating}*</li>
      <li class="padT5">Price: Rs.${flight.price}</li>
    `;
    flightItems.appendChild(flightCard);
  });
}

document.getElementById('sortPrice').addEventListener('click', () => {
  const sortOrder = document.getElementById('sortPrice').getAttribute('data-sort');
  const sortedFlights = window.flightList.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
  document.getElementById('sortPrice').setAttribute('data-sort', sortOrder === 'asc' ? 'desc' : 'asc');
  renderFlights(sortedFlights);
});

document.getElementById('sortRating').addEventListener('click', () => {
  const sortOrder = document.getElementById('sortRating').getAttribute('data-sort');
  const sortedFlights = window.flightList.sort((a, b) => sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating);
  document.getElementById('sortRating').setAttribute('data-sort', sortOrder === 'asc' ? 'desc' : 'asc');
  renderFlights(sortedFlights);
});
