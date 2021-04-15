const editButton = document.getElementById('edit');
const deleteButton = document.getElementById('delete');

editButton.addEventListener('click', () => {
  window.location = `${window.location}/edit`;
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
