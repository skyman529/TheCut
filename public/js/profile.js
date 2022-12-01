const newFormHandler = async (event) => {
    event.preventDefault();
  
    const availableBarbers = document.querySelector('#barber-name-input').value;
    const selectService = document.querySelector('#barber-type-input').value;
    const price = document.querySelector('#price-rate-input').value;
    const selectTimeAndDate = document.querySelector('#date-input').value;
  
    if (availableBarbers && selectService && price && selectTimeAndDate) {
      const response = await fetch(`/api/barbers`, {
        method: 'POST',
        body: JSON.stringify({ available_barbers: availableBarbers, select_service: selectService, price: price, select_data: selectTimeAndDate }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create a profile');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/profile/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete profile');
      }
    }
  };
  
  document
    .querySelector('.btn')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.profile-list')
  //   .addEventListener('click', delButtonHandler);
  