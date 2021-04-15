const form = document.getElementById('editUserForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const userId = form.querySelector('[name="userId"]').value;
  const firstname = form.querySelector('[name="firstname"]').value;
  const lastname = form.querySelector('[name="lastname"]').value;
  const email = form.querySelector('[name="email"]').value;
  const birthday = form.querySelector('[name="birthday"]').value;
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname, lastname, email, birthday
    })
  };
  fetch(`${pathUtil()}`, options).then(() => {
    window.location = `${window.location.origin}/users/${userId}`;
  });
});
