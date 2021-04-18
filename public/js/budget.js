const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');
const addItem = document.getElementById('add-item');
const profileButton = document.getElementById('profile-button');
const budgetId = document.getElementById('budget-id').value;
const userId = document.getElementById('user-id').value;

profileButton.addEventListener('click', () => {
  window.location = `${window.location.origin}/users/${userId}`;
});

addItem.addEventListener('click', () => {
  window.location = `${window.location}/items/new`;
});

editButton.addEventListener('click', () => {
  window.location = `${window.location}/edit`;
});

deleteButton.addEventListener('click', () => {
  const confirmation = window.confirm('Are you sure you want to delete this budget?');
  if (confirmation) {
    fetch(`${window.location.origin}/api/budgets/${budgetId}`, { method: 'DELETE' }).then(() => {
      window.location = `${window.location.origin}/users/${userId}`;
    });
  }
});

Array.from(document.getElementsByClassName('budget-item')).forEach((item) => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-item-id');
    window.location = `${window.location.origin}/items/${id}`;
  });
  item.addEventListener('mouseenter', () => {
    item.style.width = '95%';
    item.style.height = '95%';
  });
  item.addEventListener('mouseleave', () => {
    item.style.width = '90%';
    item.style.height = '90%';
  });
});
