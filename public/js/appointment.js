// save reference to important DOM elements
const timeDisplayEl = $('#barber-display');
const barberDisplayEl = $('#barber-display');
const barberModelEl = $('#barber-modal');
const barberFormEl = $('#barber-form');
const barberNameInputEl = $('#barber-name-input');
const barberTypeInputEl = $('#barber-type-input');
const priceRateInputEl = $('#price-rate-input');
const dateInputEl = $('#date-input');


// handle printing project data to the page
function printBarberData(barberName, service, price, timeDate) {
  const barberRowEl = $('<tr>');

  const barberNameTdEl = $('<td>').addClass('p-2').text(barberName);

  const baberberTypeTdEl = $('<td>').addClass('p-2').text(service);

  const priceTdEl = $('<td>').addClass('p-2').text(price);

  const dateTimeTdEl = $('<td>').addClass('p-2').text(timeDate);

  // const daysToDate = moment(timeDate, 'MM/DD/YYYY').diff(moment(), 'days');
  // const daysLeftTdEl = $('<td>').addClass('p-2').text(daysToDate);

  // const totalEarnings = calculateTotalEarnings(price, daysToDate);

  // You can also chain methods onto new lines to keep code clean
  // const totalTdEl = $('<td>')
  //   .addClass('p-2')
  //   .text('$' + totalEarnings);

  const deleteBarberBtn = $('<td>')
    .addClass('p-2 delete-project-btn text-center')
    .text('X');

  // By listing each `<td>` constiable as an argument, each one will be appended in that order
  barberRowEl.append(
    barberNameTdEl,
    baberberTypeTdEl,
    priceTdEl,
    dateTimeTdEl,
    // daysLeftTdEl,
    // totalTdEl,
    deleteBarberBtn
  );

  barberDisplayEl.append(barberRowEl);

  barberModelEl.modal('hide');
}

// function calculateTotalEarnings(rate, days) {
//   const dailyTotal = rate * 8;
//   const total = dailyTotal * days;
//   return total;
// }

function handleDeletedBarbers(event) {
  console.log(event.target);
  const btnClicked = $(event.target);
  btnClicked.parent('tr').remove();
}

// handle barber form submission
function handleBarberFormSumbit(event) {
  event.preventDefault();

  const barberNames = barberNameInputEl.val().trim();
  const selectService = barberTypeInputEl.val().trim();
  const selectPrice = priceRateInputEl.val().trim();
  const selectTime = dateInputEl.val().trim();

  printBarberData(barberNames, selectService, selectPrice, selectTime);
  

  barberFormEl[0].reset();
}

barberFormEl.on('submit', handleBarberFormSumbit);
barberDisplayEl.on('click', '.delete-project-btn', handleDeletedBarbers);
dateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);