// save reference to important DOM elements
const barberDisplayEl = $('#barber-display');
const barberModelEl = $('#barber-modal');
const barberFormEl = $('#barber-form');
const barberNameInputEl = $('#barber-name-input');
const barberTypeInputEl = $('#barber-type-input');
const priceRateInputEl = $('#price-rate-input');
const dateInputEl = $('#date-input');


// handle printing appointment data to the page
function printAppointmentInfo(selectedBarber, selectedSerice, haircutPrice, selectedDate) {
  const barberRowEl = $('<tr>');

  const barberNameTdEl = $('<td>').addClass('p-2').text(selectedBarber);

  const baberberTypeTdEl = $('<td>').addClass('p-2').text(selectedSerice);

  const priceTdEl = $('<td>').addClass('p-2').text(haircutPrice);

  const dateTimeTdEl = $('<td>').addClass('p-2').text(selectedDate);

  const deleteBarberBtn = $('<td>')
    .addClass('p-2 delete-appointment-btn text-center')
    .text('X');

  // By listing each `<td>` constiable as an argument, each one will be appended in that order
  barberRowEl.append(
    barberNameTdEl,
    baberberTypeTdEl,
    priceTdEl,
    dateTimeTdEl,
    deleteBarberBtn
  );

  barberDisplayEl.append(barberRowEl);

  barberModelEl.modal('hide');
}

function handleDeleteAppointmentInfo(event) {
  console.log(event.target);
  const btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

// handle barber form submission
function handleAppointmentFormSubmission(event) {
  event.preventDefault();

  const barberNames = barberNameInputEl.val().trim();
  const selectService = barberTypeInputEl.val().trim();
  const selectPrice = priceRateInputEl.val().trim();
  const selectTime = dateInputEl.val().trim();

  printAppointmentInfo(barberNames, selectService, selectPrice, selectTime);
  

  barberFormEl[0].reset();
}

barberFormEl.on('submit', handleAppointmentFormSubmission);
barberDisplayEl.on('click', '.delete-appointment-btn', handleDeleteAppointmentInfo);

