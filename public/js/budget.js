const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');

editButton.addEventListener('click', () => {
  window.location = `${window.location}/edit`;
});

deleteButton.addEventListener('click', () => {
  const budgetId = deleteButton.getAttribute('data-budget-id');
  const userId = deleteButton.getAttribute('data-user-id');
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
