const newFormHandler = async (event) => {
    event.preventDefault();
  
    const barberName = document.querySelector('#barber-name').value.trim();
    const haircutPrice = document.querySelector('#haircut-price').value.trim();
    const haircutType = document.querySelector('#haircut-type').value.trim();
  
    if (barberName && haircutPrice && haircutType) {
      const response = await fetch(`/api/barbers`, {
        method: 'POST',
        body: JSON.stringify({ barberName, haircutPrice, haircutType}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create appointment');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/barbers/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete appointment');
      }
    }
  };
  
  document
    .querySelector('.new-barber-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.barber-list')
    .addEventListener('click', delButtonHandler);
  